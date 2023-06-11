

function createCustomerProfileById(customers, _id){
   let customerProfileById = [];

   for(let customer of customers){
    if (customers._id === _id){
        return customerProfileById = customer
    }
   }
   return customerProfileById
}   

function createCustomerPurchase(customers, _priceInCents){
    let customerPurchase = 0
    for (let _customer of customers){
        customerPurchase += customers.priceInCents
    }
    return customerPurchase;
}
    


module.exports = {
    createCustomerProfileById,
    createCustomerPurchase,
}