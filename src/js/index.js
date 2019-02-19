/**
 * @overview Fozzie header JavaScript behaviour.
 *
 * @module f-header
 */

import ready from 'lite-ready';
import { checkForUser } from './userAuth';

const CLASSNAMES = {
    headerTransparent: 'c-header--transparent'
};

/**
 * Setup the behaviour for the header component.
 */
const setupHeader = () => {
    const headerEl = document.querySelector('[data-header]');
    const navButton = document.querySelector('[data-nav-button]');
    const navToggleLabel = document.querySelector('[data-nav-toggle]');

    if (navButton) {
        navButton.addEventListener('click', () => {
            const navContainer = document.querySelector('[data-nav-container]');

            if (navContainer) {
                navContainer.classList.toggle('is-visible');
            }

            if (navToggleLabel) {
                navToggleLabel.classList.toggle('is-open');
            }

            // This is added to remove the ability to scroll the page content when the mobile navigation is open
            document.documentElement.classList.toggle('is-navInView');

            // If the header is already fixed/absolute (as it is when the header is transparent)
            // then the content doesn't need to be padded down when the nav comes into view, as it's already flush with the top of the screen
            if (headerEl && headerEl.classList.contains(CLASSNAMES.headerTransparent)) {
                document.documentElement.classList.toggle('is-navInView--noPad');
            }
        });
    }

    // setup click event on the navigation label, as the button is hidden by default (as used for tabbing only)
    if (navToggleLabel) {
        navToggleLabel.addEventListener('click', () => {
            navButton.click();
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
