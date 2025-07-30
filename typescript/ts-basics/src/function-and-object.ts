//typed function with IIFE
console.log(
(function(number1: number, number2: number, number3: number): number
{
    return number1 * number2 * number3;
})(2, 2, 3));

function greet(fn: (param: string) => void)
{
    fn("Hello");
}

function insideGreet(param1: string)
{
    console.log(param1);
}

greet(insideGreet);

//Typed function with optional parameter with IIFE, this is the testing environment of TypeScript
console.log((function(string1: string, string2: string, string3?: string): string
{
    let combinedStrings = string3 ? `${string1}, ${string2}, ${string3}` : `${string1}, ${string2}`;
    return `All the strings are here ${combinedStrings}`;
})("str1", "str2"));

//Function with rest parameter with IIFE
console.log((function(...params: number[]): number
{
    let total = 0;
    params.map(param => total = total + param);
    return total;
})(2, 3, 4, 5));

type Product =
{
    id: number,
    name: string,
    price: number,
    description?: string
} 
let product = {
    id: 1,
    name: "Product",
    price: 10.00,
    description: "Product Description"
}

type Address =
{
    city: string,
    zip: number
} 

let address = {
    city: "Valsad",
    zip: 396001
}

type Student=
{
    name: string,
    age: number
    address: Address
} 
let student = {
    name: "Developer",
    age: 20,
    address: address
}

console.table([product, student]);

