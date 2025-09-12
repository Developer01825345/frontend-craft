"use strict";
function getGreetings(arg1) {
    if (typeof arg1 === "string") {
        return `Hello, ${arg1}`;
    }
    else {
        return arg1.map(arg => `Hello, ${arg}`);
    }
}
console.log(getGreetings("Good Morning"));
console.log(getGreetings(["Good Morning", "Good Evening"]));
function WrapValue(value) {
    return { value };
}
console.log(WrapValue("Hello"));
console.log(WrapValue(5));
// Generic Constraints
function getLength(value) {
    return value.length;
}
console.log(getLength("testing"));
// console.log(getLength<number>(123));
