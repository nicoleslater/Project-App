const customers = require("./src/data/customers");
// const {nanoid} = require("nanoid");

function createCustomerProfile(customers, _id){
   let customberById = null 
   for (let customer of customers){
    if(customers._id === _id){
        return customberById = customer
    }
   }
   return customberById
}   

function createCustomerPurchase(customers, _priceInCents){
    let customerPurchase = null
    for (let _customer of customers){
        customerPurchase += customers.priceInCents
    }
    return customerPurchase;
}
    


module.exports = {
    createCustomerProfile,
    createCustomerPurchase,
}