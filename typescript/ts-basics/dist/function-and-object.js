"use strict";
//typed function with IIFE
console.log((function (number1, number2, number3) {
    return number1 * number2 * number3;
})(2, 2, 3));
function greet(fn) {
    fn("Hello");
}
function insideGreet(param1) {
    console.log(param1);
}
greet(insideGreet);
//Typed function with optional parameter with IIFE, this is the testing environment of TypeScript
console.log((function (string1, string2, string3) {
    let combinedStrings = string3 ? `${string1}, ${string2}, ${string3}` : `${string1}, ${string2}`;
    return `All the strings are here ${combinedStrings}`;
})("str1", "str2"));
//Function with rest parameter with IIFE
console.log((function (...params) {
    let total = 0;
    params.map(param => total = total + param);
    return total;
})(2, 3, 4, 5));
let product = {
    id: 1,
    name: "Product",
    price: 10.00,
    description: "Product Description"
};
let address = {
    city: "Valsad",
    zip: 396001
};
let student = {
    name: "Developer",
    age: 20,
    address: address
};
console.table([product, student]);
