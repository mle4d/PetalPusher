import customerApi from './customer-api.js';

const name = document.getElementById('name');
const phone = document.getElementById('phone');
const dpu = document.getElementById('dpu');
const time = document.getElementById('time');
const address = document.getElementById('address');
const flowers = document.getElementById('flowers');
const budget = document.getElementById('budget');
const color = document.getElementById('color');

const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get('name');

const customer = customerApi.get(id);
console.log(customer);

if(!customer) {
    window.location = './';
}

name.textContent = customer.name;
phone.textContent = customer.phone;
dpu.textContent = customer.dpu;
time.textContent = customer.time;
address.textContent = customer.address;
if(customer.flowers) {
    flowers.textContent = customer.flowers.join(',');
}
budget.textContent = customer.budget;
color.textContent = customer.color;
