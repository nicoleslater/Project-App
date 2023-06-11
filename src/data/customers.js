const {nanoid} = require("nanoid");


const customers = [
 {
    _id: nanoid(),
    firstName: "Paul",
    products: "Steak and Shrimp Basket",
    cookedMeat: "Medium Well Done",
    priceInCents: 599,
    inStock: true,
    specialRequests: false,
    topping: false,
    sauce: false
    
 },
 {
    _id: nanoid(),
    firstName: "Jaiden",
    products: "Cheesburger and French Fries Basket",
    cookedMeat: "Well Done",
    priceInCents: 699,
    inStock: true,
    specialRequests: false,
    topping: false,
    sauce: false,
    

 },
 {

    _id: nanoid(),    
    firstName: "Simone",
    cookedMeat: false,
    products: "Salmon and Yellow Rice Basket",
    priceInCents: 799,
    inStock: true,
    specialRequests: false,
    topping: false,
    sauce: false
    
 },
 {
    _id: nanoid(),
    firstName: "McKenzie",
    products: "BBQ Chicken with Macaroni and Cheese Basket",
    cookedMeat: false,
    priceInCents: 899,
    inStock: true,
    specialRequests: false,
    topping: false,
    sauce: false,
    
 },
 {
    _id: nanoid(),
    firstName: "Logan",
    products: "Personal Pizza",
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
    firstName: "Tashea",
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