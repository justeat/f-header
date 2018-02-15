import TestUtils from 'js-test-buddy';
import header from '../src/js/index';


describe('module', () => {

    it('is a function', () => {
        expect(typeof header).toBe('function');
    });

});

describe('header', () => {

    it('converts nav checkbox to button with correct type attribute', () => {
        // Arrange
        TestUtils.setBodyHtml(`
            <input data-nav-enhance />
        `);

        // Act
        header();

        // Assert
        const html = TestUtils.getBodyHtml();
        expect(html).toMatchSnapshot();
    });

    it('adds `is-visible` class to nav container', () => {
        // Arrange
        TestUtils.setBodyHtml(`
            <input data-nav-enhance />
            <div data-nav-container></div>
        `);
        header();
        const button = document.querySelector('button[data-nav-enhance]');

        // Act
        TestUtils.click(button);

        // Assert
        const html = TestUtils.getBodyHtml();
        expect(html).toMatchSnapshot();
    });

    it('adds `is-open` class to nav label', () => {
        // Arrange
        TestUtils.setBodyHtml(`
            <input data-nav-enhance />
            <label data-nav-toggle>Menu</label>
        `);
        header();
        const button = document.querySelector('button[data-nav-enhance]');

        // Act
        TestUtils.click(button);

        // Assert
        const html = TestUtils.getBodyHtml();
        expect(html).toMatchSnapshot();
    });

    it('does nothing if nav input does not exist', () => {
        // Arrange
        TestUtils.setBodyHtml(`
            <button></button>
            <div data-nav-container></div>
            <label data-nav-toggle>Menu</label>
        `);
        header();
        const button = document.querySelector('button');

        // Act
        TestUtils.click(button);

        // Assert
        const html = TestUtils.getBodyHtml();
        expect(html).toMatchSnapshot();
    });

    it('adds `is-navInView` class to html element', () => {
        // Arrange
        TestUtils.setBodyHtml(`
            <input data-nav-enhance />
        `);
        header();
        const button = document.querySelector('button[data-nav-enhance]');

        // Act
        TestUtils.click(button);

        // Assert
        const html = document.documentElement.outerHTML;
        expect(html).toMatchSnapshot();
    });
});
