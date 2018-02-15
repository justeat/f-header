/**
 * @overview Fozzie header JavaScript behaviour.
 *
 * @module f-header
 */

import ready from 'lite-ready';
import { checkForUser } from './modules/userAuth';


/**
 * Converts an input to a button in order to improve accessibility.
 *
 * @param {string} selector
 */
const convertInputToButton = selector => {
    const input = document.querySelector(selector);

    if (input) {
        const replaceTag = input.outerHTML.replace(/^<input/, '<button');
        input.outerHTML = `${replaceTag}</button>`;

        // Query the DOM again for this element now it has changed to a button
        const button = document.querySelector(selector);
        button.setAttribute('type', 'button');

        return button;
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

            document.documentElement.classList.toggle('is-navInView');

        });
    }
};

ready(() => {
    setupHeader();
});

export {
    setupHeader,
    checkForUser
};
