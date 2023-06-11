const chalk = require("chalk");
const log = console.log


function createCustomerProduct(products){
    let customerPurchase = 0
    for (let _product of products){
        return customerPurchase;
    }
    log(chalk.green("Thank you for submitting your order"))  
} 


module.exports = {
    createCustomerProduct
}