/**
 * @overview Fozzie header JavaScript behaviour.
 *
 * @module f-header
 */

import ready from 'lite-ready';
import { checkForUser } from './userAuth';

/**
 * Setup the behaviour for the header component.
 */
const setupHeader = () => {
    const menuButton = document.querySelector('[data-nav-button]');

    if (menuButton) {
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
