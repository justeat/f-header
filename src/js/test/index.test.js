import TestUtils from 'js-test-buddy';
import { setupHeader } from '../';


describe('module', () => {

    it('is a function', () => {
        expect(typeof setupHeader).toBe('function');
    });

});

describe('setupHeader', () => {

    it('converts nav checkbox to button with correct type attribute', () => {
        // Arrange
        TestUtils.setBodyHtml(`
            <input data-nav-enhance />
        `);

        // Act
        setupHeader();

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
        setupHeader();
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
        setupHeader();
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
        setupHeader();
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
        setupHeader();
        const button = document.querySelector('button[data-nav-enhance]');

        // Act
        TestUtils.click(button);

        // Assert
        const html = document.documentElement.outerHTML;
        expect(html).toMatchSnapshot();
    });
});
