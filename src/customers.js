import customerApi from './customer-api.js';

const tbody = document.getElementById('orders');

const orders = orderApi.getAll();
for(let i = 0; i < orders.length; i++) {
    const customer = customer [i];

    const tr = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = customer.name;
    tr.appendChild(nameCell);

    const phoneCell = document.createElement('td');
    phoneCell.textContent = customer.phone;
    tr.appendChild(phoneCell);

    const timeCell = document.createElement('td');
    timeCell.textContent = customer.time;
    tr.appendChild(timeCell);

    tbody.appendChild(tr);
;}
