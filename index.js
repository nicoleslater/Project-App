const { readJSONFile, writeJSONFile } = require("./models/helpers");

const {
       create,
       index,
       show, 
       destroy,
       update
      } = require("./src/create");

const chalk = require("chalk");


console.log(chalk.magenta.bold('Hello!'))
console.log(chalk.cyan.bold('Welcome!'))
console.log(chalk.blue.bold('Please make sure you read carefully :-)'))


function run(){
const action = process.argv[2];
const customer = process.argv[3];
let products = readJSONFile("./src/data", "objects.json")
let writeToFile = false
let updatedProducts = []
switch("index"){
    case "index":
        console.log(products)
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



console.log(chalk.green("Thank you so much for your purchase, please come back soon!"))
run()

