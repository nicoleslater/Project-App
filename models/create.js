const {customers} = require("./src/data/customers");
const {nanoid} = require("nanoid");

function createCustomerProfile(customers){
    const customer = {
        id: nanoid(),
        name: customers.name(),
        product: customers.product(),
        cookedMeat: customers.cookedMeat(),
        priceInCents: customers.priceInCents(),
        inStock: customers.inStock(),
        specialRequests: customers.specialRequests(),
        topping: customers.topping(),
        sauce: customers.sauce(),
    }
    return customer;
}

function createCustomerPurchase(customers){

}

module.exports = {
    createCustomerProfile,
    createCustomerPurchase,
}