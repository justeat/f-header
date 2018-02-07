/**
 * @overview Helper methods for the fetch API.
 *
 * @module fetchHelper
 */


/**
 * Checks the status of a response is `ok` following a fetch call.
 *
 * @param {object} response
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Response|MDN docs}
 *
 * @throws Will throw an error if the status is not `ok`.
 * @returns {object} Returns the response if the status is `ok`, otherwise an error will be thrown.
 */
const checkStatus = response => {
    if (response.ok) {
        return response;
    }

    const error = new Error(response.statusText);
    error.response = response;
    throw error;
};

/**
 * Gets the JSON content from a response following a fetch call.
 *
 * @param {object} response
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Body/json|MDN docs}
 *
 * @returns {object} Returns a promise that resolves with the result of parsing the body text as JSON.
 */
const getJson = response => response.json();

/**
 * Wrapper for a fetch `get` call which ensures the status is `ok` and returns the JSON content from the response.
 *
 * @param {string} input - Defines the resource that you wish to fetch.
 * @param {init} init - An options object containing any custom settings that you want to apply to the request.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Request/Request|MDN docs}
 *
 * @returns {object} Returns a promise containing the JSON content from the response.
 */
const fetchJSON = (input, init) => fetch(input, Object.assign({
    method: 'GET',
    credentials: 'same-origin'
}, init))
    .then(checkStatus)
    .then(getJson);

module.exports = {
    checkStatus, getJson, fetchJSON
};
