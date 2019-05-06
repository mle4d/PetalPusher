import getApplication from './get-application.js';
import customerApi from './customer-api.js';
/* eslint-disable */

// include jsdom for DOM use in tests on travis
// const jsdom = require('jsdom');
// const { JSDOM } = jsdom;
// const { window } = new JSDOM(``, {
//     url: 'http://localhost:5500'
// });
// global.window = window;
// global.document = window.document;
// global.FormData = window.FormData;
// global.localStorage = window.localStorage;

// require = require('esm')(module);
// module.exports = require('./tests.js');
const form = document.getElementById('order-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    const customer = getApplication(formData);

    customerApi.save(customer);

    window.location = 'thank-you.html';
});