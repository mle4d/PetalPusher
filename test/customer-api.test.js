import customerApi from '../src/customer-api.js';
const test = QUnit.test;

QUnit.module('customer api');
//const orderApi = {   
    //  save: function(customer) {
   //const json = JSON.stringify(customer);
  //localStorage.setItem('applicant', json);
//},
//get: function() {
    // const json = localStorage.getItem('applicant');
   //const customer = JSON.parse(json);
   //return customer;
//}
//};

test('round-trip customer', (assert) => {
   //remember you changed applicant to customer//
    const customer = { name: 'tester' };
    console.log(customer, 'customer');
    customerApi.save(customer);
    const result = customerApi.get();

    assert.deepEqual(result, customer);
});