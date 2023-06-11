function create(){
    let result = 0 
    for (let products of cart){
        result += products.priceInCents
    }
    return result;
}
    
function destroy(){}
function update(){}



module.exports = {
    create,
    destroy, 
    update
}