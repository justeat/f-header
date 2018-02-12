/**
 * @overview UserData handler
 *
 * @module userAuth/userData
 */

const storeLocalAnalyticsBlob = result => {
    window.localStorage.setItem('je-analytics', JSON.stringify(result));
    return result;
};

const enrichUserDataWithCount = (userData, orderCountResponse) => {
    userData.orderCount = orderCountResponse.Count;
    return userData;
};

const pushUserData = userData => window.dataLayer.push({ userData });

const fetchOrderCountAndSave = userData => {
    const orderCountLink = document.querySelector('link[rel="ordercountlink"]');
    const orderCountUrl = orderCountLink && orderCountLink.getAttribute('href');

    if (orderCountUrl) {
        return fetch(orderCountUrl, {
            method: 'GET',
            credentials: 'same-origin'
        })
            .then(response => response.json())
            .then(storeLocalAnalyticsBlob)
            .then(result => enrichUserDataWithCount(userData, result))
            .then(pushUserData)
            .catch(err => {
                console.log(`Unable to get order count. ${err}`);
                pushUserData(userData);
            });
    }

    pushUserData(userData);
    return Promise.reject();
};

const getLocalAnalyticsBlob = () => window.localStorage.getItem('je-analytics');

const orderCountSupported = () => {
    const supportedEl = document.querySelector('[data-order-count-supported]');
    if (supportedEl && supportedEl.value) {
        // Case insensitive regex test for value="true"
        return /^true$/i.test(supportedEl.value);
    }
    return Promise.reject();
};

const saveUserData = authData => {
    if (!authData.isAuthenticated) {
        return Promise.resolve();
    }

    const { userData } = authData;

    if (!orderCountSupported()) {
        pushUserData(userData);
        return Promise.resolve();
    }

    const savedAnalytics = getLocalAnalyticsBlob();
    if (!savedAnalytics) {
        return fetchOrderCountAndSave(userData);
    }

    const localOrderCount = JSON.parse(savedAnalytics);
    const currentTime = new Date().getTime();
    const localOrderCountExpires = Date.parse(localOrderCount.Expires);

    if (localOrderCountExpires < currentTime) {
        return fetchOrderCountAndSave(userData);
    }

    enrichUserDataWithCount(userData, localOrderCount);
    pushUserData(userData);

    return Promise.resolve();
};

export default saveUserData;
