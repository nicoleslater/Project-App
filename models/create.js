const chalk = require("chalk");



function createCustomerProduct(_number){
    console.log(createCustomerProduct(4))
    const product = [];
    for (let i = 0; i < _number; i++){
        product.push(createCustomerProduct());
    }
        return product;
} 


module.exports = {
    createCustomerProduct
}