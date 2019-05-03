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

const delivery = document.getElementById('dpu');
const pickUp = document.getElementById('pick-up');
const dpu = document.getElementById('dpu');

yes.addEventListener('change', function () {
    dpu.disabled = !delivery.checked;
    dpu.required = delivery.checked;
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    const applicant = getApplication(formData);

    customerApi.save(customer);

    window.location = 'thank-you.html';
});