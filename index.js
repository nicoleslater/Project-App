const customers = require("./src/data/customers");
// const {faker} = require("@faker-js/faker");
const { nanoid } = require("nanoid");
const log = console.log



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

