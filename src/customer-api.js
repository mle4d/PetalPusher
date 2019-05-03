const customerApi = {
    storage: localStorage
    save(customer) {
        const customers = customerApi.getAll();
        customers.push(customer);
        const json = JSON.stringify(customers);
    },
    get() {
        const json = applicantApi.storage.getItem('customer');
        let customers = JSON.parse(json);
        if(!customers) {
            customers = [];
        }
        return customer;
    }
};

export default customerApi;