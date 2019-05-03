import customerApi from '../src/customer-api.js';
const test = QUnit.test;

QUnit.module('customer api');

customerApi.storage = sessionStorage;
const testStorage = sessionStorage;
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
    testStorage.removeItem('customers');
    const customer = { name: 'tester' };
    customerApi.save(customer);
    const result = customerApi.get(customer.name);

    assert.deepEqual(result, customer);
});

test('no customerss in local storage returns empty array', assert => {
    testStorage.removeItem('customers');
    const expected = [];

    const customers = customerApi.getAll();

    assert.deepEqual(customers, expected);
});

test('two saves return array with two items', (assert => {
    testStorage.removeItem('customers');

    const customer1 = { name: 'tester ' };
    const customer2 = { name: 'tester2' };
    const expected = [customer1, customer2];

    customerApi.save(customer1);
    customerApi.save(customer2);

    const customers = customerApi.getAll();

    assert.deepEqual(customers, expected);
}));