const {nanoid} = require("nanoid");


const customers = [
 {
    _id: nanoid(),
    name: "Paul",
    product: "Steak and Shrimp Basket",
    cookedMeat: "Medium Well Done",
    priceInCents: 599,
    inStock: true,
    specialRequests: false,
    topping: false,
    sauce: false
    
 },
 {
    _id: nanoid(),
    name: "Jaiden",
    product: "Cheesburger and French Fries Basket",
    cookedMeat: "Well Done",
    priceInCents: 699,
    inStock: true,
    specialRequests: false,
    topping: false,
    sauce: false,
    

 },
 {

    _id: nanoid(),    
    name: "Simone",
    cookedMeat: false,
    product: "Salmon and Yellow Rice Basket",
    priceInCents: 799,
    inStock: true,
    specialRequests: false,
    topping: false,
    sauce: false
    
 },
 {
    _id: nanoid(),
    name: "McKenzie",
    product: "BBQ Chicken with Macaroni and Cheese Basket",
    cookedMeat: false,
    priceInCents: 899,
    inStock: true,
    specialRequests: false,
    topping: false,
    sauce: false,
    
 },
 {
    _id: nanoid(),
    name: "Logan",
    product: "Personal Pizza",
    cookedMeat: false,
    specialRequests: "Cut into 4 slices",
    topping: "Cheese",
    sauce: "Tomato",
    priceInCents: 799,
    inStock: true,
    topping: false,
    sauce: false,
    
 },
 {
    _id: nanoid(),
    name: "Tashea",
    pronunciation: "Ta-Sha",
    products: "Grilled Chicken and Lettuce Basket",
    cookedMeat: false,
    specialRequests: "Please make sure the chicken is in bite size",
    priceInCents: 599,
    inStock: true,
    topping: false, 
    sauce: false,
   

 },
];
module.exports = customers;