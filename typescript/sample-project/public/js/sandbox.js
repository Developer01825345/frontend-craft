"use strict";
console.log("This is awesome");
let greet;
greet = () => {
    console.log("Good Morning!");
};
greet();
const addNumbers = (a, b, c) => {
    return a + b;
};
let addResult = addNumbers(5, 10);
console.log(typeof addResult);
const testFunction1 = (testParam) => {
    console.log(`The test param is ${testParam}`);
};
const testFunction2 = (data) => {
    return `Hello ${data.name}, you're age is ${data.age} and you're ${data.isAdult ? 'an adult' : 'not an adult'}.`;
};
testFunction1(true);
let result = testFunction2({ name: 'Developer', age: 30, isAdult: true });
console.log(result);
