"use strict";
//typed function
console.log((function (number1, number2, number3) {
    return number1 * number2 * number3;
})(2, 2, 3));
//typed function with optional parameter
console.log((function (string1, string2, string3) {
    return `All the strings are here, ${string1}, ${string2}, ${string3}`;
})("str1", "str2"));
//typed function with rest parameters
console.log((function (...numbers) {
    let sum = 0;
    console.log(numbers.forEach(number => number));
})(2, 2, 3));
