import customerApi from './customer-api.js';

const tbody = document.getElementById('orders');

const customers = customerApi.getAll();
console.log(customers);
for(let i = 0; i < customers.length; i++) {
    const customer = customers[i];

    const tr = document.createElement('tr');

    const nameCell = document.createElement('td');
    const link = document.createElement('a');
    const searchParams = new URLSearchParams();

    searchParams.set('name', customer.name);
    link.href = 'customer.html?' + searchParams.toString();

    link.textContent = customer.name;
    nameCell.appendChild(link);
    tr.appendChild(nameCell);

    const phoneCell = document.createElement('td');
    phoneCell.textContent = customer.phone;
    tr.appendChild(phoneCell);

    const timeCell = document.createElement('td');
    timeCell.textContent = customer.time;
    tr.appendChild(timeCell);

    tbody.appendChild(tr);
}
