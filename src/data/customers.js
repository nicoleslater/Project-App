const customers = [
 {
    id: nanoid(),
    name: "Paul",
    product: "Steak and Shrimp Basket",
    cookedMeat: "Medium Well Done",
    priceInCents: 599,
    inStock: true,
    specialRequests: false
    
 },
 {
    id: nanoid(),
    name: "Jaiden",
    product: "Cheesburger and French Fries Basket",
    cookedMeat: "Well Done",
    priceInCents: 699,
    inStock: true,
    specialRequests: false
    

 },
 {

    id: nanoid(),    
    name: "Simone",
    product: "Salmon and Yellow Rice Basket",
    priceInCents: 799,
    inStock: true,
    specialRequests: false,
    
 },
 {
    id: nanoid(),
    name: "McKenzie",
    product: "BBQ Chicken with Macaroni and Cheese Basket",
    priceInCents: 899,
    inStock: true,
    specialRequests: false,
    
 },
 {
    id: nanoid(),
    name: "Logan",
    product: "Personal Pizza",
    specialRequests: "Cut into 4 slices",
    topping: "Cheese",
    sauce: "Tomato",
    priceInCents: 799,
    inStock: true,
    
 },
 {
    id: nanoid(),
    name: "Tashea",
    pronunciation: "Ta-Sha",
    products: "Grilled Chicken and Lettuce Basket",
    specialRequests: "Please make sure the chicken is in bite size",
    priceInCents: 599,
    inStock: true,
   

 },
];
module.exports = customers;