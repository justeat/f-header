/**
 * @overview Authorisation handler
 *
 * @module userAuth
 */

import saveUserData from './userData';

const removeElement = element => element && element.remove();
const removeHiddenClass = element => element && element.classList.remove('is-hidden');

const updateDom = authData => {
    const authEl = document.querySelector('[data-auth-wrapper]');
    const loginEl = document.querySelector('[data-login]');

    if (authData.isAuthenticated) {
        const headerName = document.querySelector('[data-name]');
        const headerEmail = document.querySelector('[data-email]');

        if (headerName && authData.friendlyName !== '') {
            headerName.textContent = authData.friendlyName;
        }
        if (headerEmail && authData.email !== '') {
            headerEmail.textContent = authData.email;
        }

        removeHiddenClass(authEl);
        removeElement(loginEl);
    } else {
        removeHiddenClass(loginEl);
        removeElement(authEl);
    }

    return authData;
};

/**
 * Checks if authorisation details can be found in the current session hits .net
 * endpoint and is returned valid auth details or no details if not logged in
 */
const checkForUser = () => {
    const authEl = document.querySelector('[data-auth-wrapper]');

    // if our auth wrapper exists, get our user details
    if (authEl) {
        // this fetch logic will be extracted to a new module
        return fetch('/api/account/details', {
            method: 'GET',
            credentials: 'same-origin'
        })
            .then(response => response.json())
            .then(updateDom)
            .then(saveUserData)
            // should send this error to the f-logger but for now, just erroring here inline
            .catch(error => {
                console.log(error);
            });
    }

    return Promise.resolve();
};

export default checkForUser;
