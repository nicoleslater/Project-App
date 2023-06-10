// const {
//     createCustomerProfile,
//     createProduct
//  } = require("./src/data/customers");

const {customers} = require("./src/data/customers");
const {faker} = require("@faker-js/faker");
// const { nanoid } = require("nanoid");
const log = console.log

function createCustomerProfile(customers, name){
    const customerProfile = {
    
        _id: faker.string.uuid(),
        name: "Paul",

        
    }
    return customerProfile;
}   

function createProduct(customers){
    const products = {
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

function run(){
const action = process.argv[2];
const customer = process.argv[3];
switch(action){
    case "index":
        log(action, customer)
    case "create":
        log(action, customer);
        break;
    case "read":
        log(action, customer);
        break;
    case "update":
        log(action, customer);
        break;
    case "destroy":
        log(action, customer);
        break;
    default:
        log("There is no customer by that name.");

}
}

run()
createCustomerProfile()
createProduct()
