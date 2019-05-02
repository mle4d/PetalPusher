const customerApi = {
    save: function(customer) {
        const json = JSON.stringify(customer);
        localStorage.SetItem('customer', json);
    },
    get: function() {
        const json = localStorage.getItem('customer');
        const customer = JSON.parse(json);
        return customer;
    }
};

export default customerApi;