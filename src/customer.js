import customerApi from './customer-api.js';

const name = document.getElementsById('name'); 
const phone = document.getElementsById('phone'); 
const dpu = document.getElementsById('delivery'); 
const time = document.getElementsById('time'); 
const address = document.getElementsById('address'); 
const flowers = document.getElementsById('flowers'); 
const budget = document.getElementsById('budget'); 
const color = document.getElementsById('color'); 

const customer = customerApi.get();

if(!customer) {
    window.location = './';
}

name.textContent = customer.name;
phone.textContent = customer.phone;
dpu.textContent = customer.role;
time.textContent = customer.time;
address.textContent = customer.address;
flowers.textContent = customer.flowers;
budget.textContent = customer.budget;
color.textContent = customer.color;
