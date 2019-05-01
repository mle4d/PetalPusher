

import getApplication from './get-application.js';

const form = document.getElementById('order-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    
    const applicant = getApplication(formData);
    
    console.log(applicant);
});