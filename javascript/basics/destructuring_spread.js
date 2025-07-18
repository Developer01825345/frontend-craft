// Default name
const numbers = [2, 3, 5];
const [first, second, third, fourth = 6] = numbers;

console.log(fourth);

// Renaming variables
const users = {name: "tester"};
const {name: userName} = users;
console.log(userName);

// Binding and Assignment
const obj = { a: 2, b: { c: 3 } };
const { a } = obj;
let {
  b: { c: d },
} = obj;

console.log(d);

// Rest Properties
const [ ele, ...others ] = [ 1, 2, 3];
console.log(others); // { b: 2, c: 3 }

/** In object destructuring, const variable name should be identical to the key of object to which it is associate with, but in array destructuring, you can give the variable name as per your choice */
/** In object destructuring, const variable name */

let name = null;
console.log(name || "John");