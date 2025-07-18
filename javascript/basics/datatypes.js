let score = "10abc";

console.log(typeof score)
console.log(typeof (score));

// Conversions
let valueInNumber = Number(score)
let sampleFunction = function () { }

console.log(typeof valueInNumber);
console.log(valueInNumber);
console.table([typeof "testing", typeof 10, typeof 100.50, typeof true, typeof null, typeof undefined, typeof [1, 2, 3], typeof sampleFunction]);
