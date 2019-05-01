const formData = new FormData ();
formData.set('name', expected.name);
formData.set('phone', expected.phone);
formData.set('dpu', 'delivery');
formData.set('time', expected.time);
formData.set('address', expected.address);
formData.set('flowers', expected.flowers);
// formData.append('flowers', expected.flowers);
formData.set('budget', expected.budget);
formData.set('color', expected.color);

const name = formData.get('name');
    const phone = formData.get('phone');
    const dpu = formData.get('dpu') === 'delivery';
    const time = formData.get('time');
    const address = formData.get('address');
    const flowers = formData.get('flowers');
    const budget = formData.get('budget');
    const color = formData.get('color');

    const applicant = {
        name: name,
        phone: phone,
        dpu: dpu,
        time: time,
        address: address,
        flowers: flowers,
        budget: budget,
        color: color,

        return applicant;
    };
   