import TestUtils from 'js-test-buddy';
import { setupHeader } from '..';


describe('module', () => {
    it('is a function', () => {
        expect(typeof setupHeader).toBe('function');
    });
});

describe('setupHeader', () => {
    beforeEach(() => {
        document.documentElement.className = '';
    });

    it('adds `is-visible` class to nav container', () => {
        // Arrange
        TestUtils.setBodyHtml(`
            <button data-nav-button></button>
            <div data-nav-container></div>
        `);
        setupHeader();
        const button = document.querySelector('[data-nav-button]');

        // Act
        TestUtils.click(button);

        // Assert
        const navContainer = document.querySelector('[data-nav-container]');
        expect(navContainer.className).toEqual('is-visible');
    });

    it('adds `is-open` class to nav label', () => {
        // Arrange
        TestUtils.setBodyHtml(`
            <button data-nav-button></button>
            <label data-nav-toggle>Menu</label>
        `);
        setupHeader();
        const button = document.querySelector('[data-nav-button]');

        // Act
        TestUtils.click(button);

        // Assert
        const label = document.querySelector('[data-nav-toggle]');
        expect(label.className).toEqual('is-open');
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
            <button data-nav-button></button>
        `);
        setupHeader();
        const button = document.querySelector('[data-nav-button]');

        // Act
        TestUtils.click(button);

        // Assert
        const html = document.documentElement;
        expect(html.className).toEqual('is-navInView');
    });

    it('adds `is-navInView--noPad` class to html element if header has `c-header--transparent` class', () => {
        // Arrange
        TestUtils.setBodyHtml(`
            <button data-nav-button></button>
            <header data-header class="c-header c-header--transparent"></header>
        `);
        setupHeader();
        const button = document.querySelector('[data-nav-button]');

        // Act
        TestUtils.click(button);

        // Assert
        const html = document.documentElement;
        expect(html.className).toEqual('is-navInView is-navInView--noPad');
    });

    it('clicking the navigation label, triggers a click on the navigation button element', () => {
        // Arrange
        TestUtils.setBodyHtml(`
            <button data-nav-button></button>
            <label data-nav-toggle></label>
        `);
        setupHeader();
        const label = document.querySelector('[data-nav-toggle]');

        // Act
        TestUtils.click(label);

        // Assert
        const html = document.documentElement.outerHTML;
        expect(html).toMatchSnapshot();
    });
    it('checks that hamburger menu checkbox is unchecked on every load', () => {
        // Arrange
        TestUtils.setBodyHtml(`
            <input data-nav-accessible-button type="checkbox" checked>
        `);

        // Act
        setupHeader();

        // Assert
        const checkbox = document.querySelector('[data-nav-accessible-button]');
        expect(checkbox.checked).toEqual(false);
    });
});
