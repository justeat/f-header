/**
 * @overview Fozzie header JavaScript behaviour.
 *
 * @module f-header
 */

import ready from 'lite-ready';


const convertInputToButton = selector => {
    if (selector) {
        const input = document.querySelector(selector);
        const replaceTag = input.outerHTML.replace(/^<input/, '<button');

        input.outerHTML = `${replaceTag}</button>`;
        input.removeAttribute('type');

        // Query the DOM again for this element now it has changed to a button
        return document.querySelector(selector) || null;
    }

    return null;
};

/**
 * Setup the behaviour for the header component.
 */
const setupHeader = () => {
    const menuButton = convertInputToButton('[data-nav-enhance]');

    if (menuButton) {
        /**
         * Attach click event handler — as this element is now a button this event will
         * trigger when the `enter` and `spacebar` keys are pressed.
         *
         * @see {@link https://www.w3.org/TR/html51/editing.html#running-synthetic-click-activation-steps - synthetic click activation steps}
         */
        menuButton.addEventListener('click', () => {
            const navContainer = document.querySelector('[data-nav-container]');
            const navLabel = document.querySelector('[data-nav-toggle]');

            if (navContainer) {
                navContainer.classList.toggle('is-visible');
            }

            if (navLabel) {
                navLabel.classList.toggle('is-open');
            }
        });
    }
};

ready(() => {

    setupHeader();

});

export default setupHeader;
