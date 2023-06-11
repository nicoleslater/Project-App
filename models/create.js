
const chalk = require("chalk");
const log = console.log

function createCustomerProfileById(customers){
  return _.pick(customers, ["_id", "firstName"]);
}   
log(chalk.green("Thank you for submitting this information"))

function createCustomerPurchase(customers, _priceInCents){
    let customerPurchase = 0
    for (let _customer of customers){
        customerPurchase += customers.priceInCents
    }
    return customerPurchase;
}
log(chalk.green("Thank you for submitting your order"))   


module.exports = {
    createCustomerProfileById,
    createCustomerPurchase,
}