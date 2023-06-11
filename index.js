
const {createCustomerProduc} = require("./models/create");
const log = console.log
const chalk = require("chalk");

log(chalk.magenta.bold('Hello'))
log(chalk.cyan.bold('Welcome!'))
log(chalk.blue.bold('Please make sure you read carefully :-)'))


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
        log(chalk.red("I'm sorry there is no customer by that name, please try again"));

}
}



run()
log(chalk.green("Thank you so much for your purchase, please come back soon!"))
