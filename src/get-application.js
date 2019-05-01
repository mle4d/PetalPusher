function getApplication(formData) {
    const name = formData.get('name');
    const phone = formData.get('phone');
    const dpu = formData.get('dpu');
    const time = formData.get('time');
    const address = formData.get('address');
    const flowers = formData.getAll('flowers');
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


    };
    return applicant;
}


export default getApplication;