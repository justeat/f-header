import TestUtils from 'js-test-buddy';
import { saveUserData } from '../../userAuth/userData';


jest.unmock('../../userAuth/userData');

describe('module', () => {

    it('is a function', () => {
        expect(typeof saveUserData).toBe('function');
    });

});

describe('user is not authenticated', () => {

    it('promise resolves', () => {
        // Arrange
        const authData = { isAuthenticated: false };

        // Act
        const result = saveUserData(authData);

        // Assert
        expect.assertions(1);
        return expect(result).resolves.toBeUndefined();
    });

    it('user data is not pushed to data layer', () => {
        // Arrange
        const authData = { isAuthenticated: false };
        const expectedResult = [];

        // Act
        const result = saveUserData(authData);

        // Assert
        expect.assertions(1);
        return result.then(() => expect(window.dataLayer).toEqual(expectedResult));
    });

});

describe('user is authenticated', () => {

    let userData;
    let authData;

    beforeEach(() => {
        userData = { name: 'John Testington' };
        authData = { isAuthenticated: true, userData };
    });

    describe('promise rejects', () => {

        it('if order count url is not found', () => {
            // Arrange
            TestUtils.setBodyHtml('<input data-order-count-supported type="hidden" value="True" />');

            // Act
            const result = saveUserData(authData);

            // Assert
            expect.assertions(1);
            return expect(result).rejects.toBeUndefined();
        });

        it('if order count supported element is not found', () => {
            // Arrange

            // Act
            const result = saveUserData(authData);

            // Assert
            expect.assertions(1);
            return expect(result).rejects.toBeUndefined();
        });

        it('if order count supported element has no value', () => {
            // Arrange
            TestUtils.setBodyHtml('<input data-order-count-supported type="hidden" value="" />');

            // Act
            const result = saveUserData(authData);

            // Assert
            expect.assertions(1);
            return expect(result).rejects.toBeUndefined();
        });

    });

    describe('user data is pushed to data layer', () => {

        it('if order count is not supported', () => {
            // Arrange
            TestUtils.setBodyHtml(`<link rel="ordercountlink" href="analytics/ordercount" />
            <input data-order-count-supported type="hidden" value="False" />`);

            // Act
            const result = saveUserData(authData);

            // Assert
            expect.assertions(1);
            return result.then(() => expect(window.dataLayer[0].userData).toEqual(userData));
        });

        it('if order count url is not found', () => {
            // Arrange
            TestUtils.setBodyHtml('<input data-order-count-supported type="hidden" value="True" />');

            // Act
            const result = saveUserData(authData);

            // Assert
            expect.assertions(1);
            return result.catch(() => expect(window.dataLayer[0].userData).toEqual(userData));
        });

        it('if analytics is not saved in local storage and order count fetch fails', () => {
            // Arrange
            fetch.mockRejectOnce();

            TestUtils.setBodyHtml(`<link rel="ordercountlink" href="analytics/ordercount" />
                                    <input data-order-count-supported type="hidden" value="True" />`);

            // Act
            const result = saveUserData(authData);

            // Assert
            expect.assertions(1);
            return result.then(() => expect(window.dataLayer[0].userData).toEqual(userData));
        });

    });

    describe('order count is added to', () => {

        beforeEach(() => {
            const response = JSON.stringify({ Count: 1 });
            fetch.mockResponseOnce(response, { status: 200 });
            TestUtils.setBodyHtml(`<link rel="ordercountlink" href="analytics/ordercount" />
                                    <input data-order-count-supported type="hidden" value="True" />`);
        });

        describe('local storage', () => {

            it('if it is not already present', () => {
                // Arrange
                const expectedResult = JSON.stringify({ Count: 1 });

                // Act
                const result = saveUserData(authData);

                // Assert
                expect.assertions(1);
                return result.then(() => expect(window.localStorage.getItem('je-analytics')).toEqual(expectedResult));
            });

        });

        describe('user data and pushed to data layer', () => {

            it('if analytics is not saved in local storage', () => {
                // Arrange
                const expectedResult = {
                    userData: { name: 'John Testington', orderCount: 1 }
                };

                // Act
                const result = saveUserData(authData);

                // Assert
                expect.assertions(1);
                return result.then(() => expect(window.dataLayer[0]).toEqual(expectedResult));
            });

        });

    });

    describe('order count is updated in', () => {

        beforeEach(() => {
            TestUtils.setBodyHtml(`<link rel="ordercountlink" href="analytics/ordercount" />
                                    <input data-order-count-supported type="hidden" value="True" />`);
        });

        describe('local storage', () => {

            it('if local order count has expired', () => {
                // Arrange
                const oneYearAgo = new Date(new Date().setFullYear(new Date().getFullYear() - 1));
                const localOrderCount = JSON.stringify({
                    Count: 1,
                    Expires: oneYearAgo.toString()
                });
                window.localStorage.setItem('je-analytics', localOrderCount);

                const response = JSON.stringify({
                    Count: 2,
                    Expires: new Date().toString()
                });
                fetch.mockResponseOnce(response, { status: 200 });

                // Act
                const result = saveUserData(authData);

                // Assert
                expect.assertions(1);
                return result.then(() => expect(window.localStorage.getItem('je-analytics')).toEqual(response));
            });

        });

        describe('user data and pushed to data layer', () => {

            it('if analytics is already in local storage and local order count has expired', () => {
                // Arrange
                const oneYearAgo = new Date(new Date().setFullYear(new Date().getFullYear() - 1));
                const localOrderCount = JSON.stringify({
                    Count: 1,
                    Expires: oneYearAgo.toString()
                });
                window.localStorage.setItem('je-analytics', localOrderCount);

                const response = JSON.stringify({
                    Count: 2,
                    Expires: new Date().toString()
                });
                fetch.mockResponseOnce(response, { status: 200 });

                const expectedResult = {
                    userData: { name: 'John Testington', orderCount: 2 }
                };

                // Act
                const result = saveUserData(authData);

                // Assert
                expect.assertions(1);
                return result.then(() => expect(window.dataLayer[0]).toEqual(expectedResult));
            });

            it('if analytics is already in local storage and local order count has not expired', () => {
                // Arrange
                const oneYearFromNow = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
                const localOrderCount = {
                    Count: 1,
                    Expires: oneYearFromNow.toString()
                };

                window.localStorage.setItem('je-analytics', JSON.stringify(localOrderCount));

                const expectedResult = {
                    userData: { name: 'John Testington', orderCount: 1 }
                };

                // Act
                const result = saveUserData(authData);

                // Assert
                expect.assertions(1);
                return result.then(() => expect(window.dataLayer[0]).toEqual(expectedResult));
            });

        });

    });

});
