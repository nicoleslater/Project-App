const {create,
       index,
       show, 
        destroy,
        update
 } = require("./src/create");
const products = require("./src/data/products");
const chalk = require("chalk");

console.log(chalk.magenta.bold('Hello!'))
console.log(chalk.cyan.bold('Welcome!'))
console.log(chalk.blue.bold('Please make sure you read carefully :-)'))


function run(){
const action = process.argv[2];
const customer = process.argv[3];
switch("create"){
    case "index":
        console.log(action, customer)
    case "create":
        console.log(action, customer);
        break;
    case "read":
        console.log(action, customer);
        break;
    case "update":
        console.log(action, customer);
        break;
    case "destroy":
        console.log(action, customer);
        break;
    default:
        console.log(chalk.red("I'm sorry there is no customer by that name, please try again"));
        

}
}



run()
console.log(chalk.green("Thank you so much for your purchase, please come back soon!"))
create()
