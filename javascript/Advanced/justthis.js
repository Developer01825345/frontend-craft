// Global Scope
console.log(`Checking this from global scope: ${this}`); // Output: {}, but in global scope this on devtool (browser), refers to windows object

// Practices:

const car = {
    brand: "Tata",
    showMethod() {
        console.log(`This car is a ${this.brand}`);
    }
}

car.showMethod();

function showName() {
  console.log(`Checking this from function: ${this.name}`);
}

showName();

const user = {
    name: "Developer",
    normalGreet() {
        console.log(`Hello, ${this.name}`);
    },
    arrowGreet: () => {
        console.log(`Hello, ${this.name}`);
    }
}

user.normalGreet();
user.arrowGreet();

function introduce()
{
    console.log(`Hi, I'm ${this.name}`);
}

const person1 = {
    name: "Person 1"
}

const person2 = {
    name: "Person 2"
}

introduce.call(person1);
introduce.call(person2);