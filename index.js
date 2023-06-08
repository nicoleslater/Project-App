const {writeJSONFile, readJSONFile} = require("./helpers");
const {faker} = require("@faker-js/faker");
const log = console.log




function run(){
const action = process.argv[2];
const customer = process.argv[3];
switch(action){
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