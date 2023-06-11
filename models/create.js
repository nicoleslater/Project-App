const chalk = require("chalk");


function createCustomerProfileById(customers, _id){
   let customerProfileById = [];

   for(let customer of customers){
    if (customers._id === _id){
        return customerProfileById = customer
    }
   }
   return customerProfileById
}   
console.log(chalk.green("Thank you for submitting this information"))

function createCustomerPurchase(customers, _priceInCents){
    let customerPurchase = 0
    for (let _customer of customers){
        customerPurchase += customers.priceInCents
    }
    return customerPurchase;
}
console.log(chalk.green("Thank you for submitting your order"))   


module.exports = {
    createCustomerProfileById,
    createCustomerPurchase,
}