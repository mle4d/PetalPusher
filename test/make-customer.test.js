import getApplication from '../src/get-application.js';
const test = QUnit.test;

QUnit.module('make customer');

test('makes object literal from form data', (assert)=> {
    const expected = {
        name: 'Julia',
        phone: '123456789',
        dpu: 'delivery',
        time: '1200',
        address: 'qwerty',
        flowers: ['rose', 'tulip'],
        budget: '10',
        color: 'red',
    };

    const formData = new FormData ();
    formData.set('name', expected.name);
    formData.set('phone', expected.phone);
    formData.set('dpu', expected.dpu);
    formData.set('time', expected.time);
    formData.set('address', expected.address);
    formData.set('flowers', expected.flowers[0]);
    formData.append('flowers', expected.flowers[1]);
    formData.set('budget', expected.budget);
    formData.set('color', expected.color);

    const applicant = getApplication(formData);

    assert.deepEqual(applicant, expected);
});