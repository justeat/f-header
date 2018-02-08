import TestUtils from 'js-test-buddy';
import checkForUser from '../index';


jest.mock('../userData');

describe('module', () => {

    it('is a function', () => {
        expect(typeof checkForUser).toBe('function');
    });

});

describe('if the account details call fails', () => {

    it('the function returns', () => {
        // Arrange
        TestUtils.setBodyHtml(`
            <div data-auth-wrapper></div>
        `);
        fetch.mockRejectOnce();

        // Act
        const result = checkForUser();

        // Assert
        expect.assertions(1);
        return result.then(response => expect(response).toBeUndefined());
    });

});

describe('if the auth element is not present', () => {

    it('the function returns', () => {
        // Act
        const result = checkForUser();

        // Assert
        expect.assertions(1);
        return result.then(response => expect(response).toBeUndefined());
    });

});

describe('if user is not authenticated', () => {

    beforeEach(() => {
        const authData = { isAuthenticated: false };
        fetch.mockResponseOnce(JSON.stringify(authData), { status: 200 });
    });

    it('the login element is shown', () => {
        // Arrange
        TestUtils.setBodyHtml(`
            <div data-auth-wrapper></div>
            <div data-login class="is-hidden"></div>
        `);

        // Act
        const result = checkForUser();

        // Assert
        expect.assertions(1);
        return result.then(() => {
            const html = TestUtils.getBodyHtml();
            expect(html).toMatchSnapshot();
        });
    });

    it('the auth element is removed', () => {
        // Arrange
        TestUtils.setBodyHtml(`
            <div data-auth-wrapper></div>
        `);

        // Act
        const result = checkForUser();

        // Assert
        expect.assertions(1);
        return result.then(() => {
            const html = TestUtils.getBodyHtml();
            expect(html).toMatchSnapshot();
        });
    });

});

describe('if user is authenticated', () => {

    it('the header name is set to friendly name', () => {
        // Arrange
        TestUtils.setBodyHtml(`
            <div data-auth-wrapper></div>
            <div data-name></div>
        `);
        const friendlyName = 'Ronald';
        const authData = { isAuthenticated: true, friendlyName };
        fetch.mockResponseOnce(JSON.stringify(authData), { status: 200 });

        // Act
        const result = checkForUser();

        // Assert
        expect.assertions(1);
        return result.then(() => {
            const html = TestUtils.getBodyHtml();
            expect(html).toMatchSnapshot();
        });
    });

    it('the header email is set to user email', () => {
        // Arrange
        TestUtils.setBodyHtml(`
            <div data-auth-wrapper></div>
            <div data-email></div>
        `);
        const email = 'ronald.mcdonald@just-eat.com';
        const authData = { isAuthenticated: true, email };
        fetch.mockResponseOnce(JSON.stringify(authData), { status: 200 });

        // Act
        const result = checkForUser();

        // Assert
        expect.assertions(1);
        return result.then(() => {
            const html = TestUtils.getBodyHtml();
            expect(html).toMatchSnapshot();
        });
    });

    it('the auth element is shown', () => {
        // Arrange
        TestUtils.setBodyHtml(`
            <div data-auth-wrapper class="is-hidden"></div>
            <div data-login></div>
        `);
        const authData = { isAuthenticated: true };
        fetch.mockResponseOnce(JSON.stringify(authData), { status: 200 });

        // Act
        const result = checkForUser();

        // Assert
        expect.assertions(1);
        return result.then(() => {
            const html = TestUtils.getBodyHtml();
            expect(html).toMatchSnapshot();
        });
    });

    it('the login element is removed', () => {
        // Arrange
        TestUtils.setBodyHtml(`
            <div data-auth-wrapper></div>
            <div data-login></div>
        `);
        const authData = { isAuthenticated: true };
        fetch.mockResponseOnce(JSON.stringify(authData), { status: 200 });

        // Act
        const result = checkForUser();

        // Assert
        expect.assertions(1);
        return result.then(() => {
            const html = TestUtils.getBodyHtml();
            expect(html).toMatchSnapshot();
        });
    });

});
