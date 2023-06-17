const { readJSONFile } = require("../models/helpers");





function index(products){
for (let i = 0; i < )
}
     


function create(products){
        let purchase = {
            name: products[0].name,
            priceInCents: products[0].priceInCents,
            inStock: products[0].inStock
        }
        return purchase
}

    
function destroy(products){
    const index = products.findIndex((product) => product.priceInCents === priceInCents);
 if (index > -1){
    products.splice(index, 1);
    return products
 } else {
    console.log(chalk.red(" The item has been delete. Thank you!"))
 }

}


function update(_products){
    
}


function show(products){
    return products.length;
}



module.exports = {
    index,
    create,
    destroy, 
    update,
    show
}