const accountId = 123456;
let accountName = "tester";
var accountCode = "5665656";
accountValidity = true;

// accountId = 12121212
console.log(accountId);

// javascript was block scope language, for creating variables, always use either const or let, var is not ideal because if you mistakenly use identical variable in project it will change the value of the that first variable as well/
console.table([accountId, accountName, accountCode, accountValidity]);

// var a = 1;
// {
//     let a = 2;
//     console.log(a);
// }
// console.log(a);

let a = 10; // global scope

function test() {
  var b = 20; // function scope
  if (true) {
    let c = 30; // block scope
    console.log(a); // 10
    console.log(b); // 20
    console.log(c); // 30
  }

  console.log(a);
}

test();
// console.log(b);

let multiply = (x, y) => {
  return x * y;
};

console.log(multiply(4, 2));

function outer() {
  let name = "Tester";

  function inner() {
    console.log(name); // Can access 'name' from outer
  }

  inner();
}

outer();