


function create(products){
const product = [];
    for (let product of products){
        product.push(createCustomerProduct());
    }
        return product;
} 


module.exports = {
    create
}