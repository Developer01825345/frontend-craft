console.log("This is awesome");

let greet: Function;

greet = () => {
    console.log("Good Morning!");  
}

greet();

const addNumbers = (a:number, b:number, c?:number | string) => { //Union type: number | string, if you have to give multiple types to a variable
    return a + b;
}

let addResult = addNumbers(5, 10);
console.log(typeof addResult);

type BooleanOrString = boolean | string; // Type Alias: when you have to use the same union type multiple times
type Person = {name: string, age: number, isAdult: BooleanOrString} // Custom Type Alias: when you have to use the same object structure multiple times

const testFunction1 = (testParam: BooleanOrString): void => {
    console.log(`The test param is ${testParam}`);
}

const testFunction2 = (data: Person): string => {  
    return `Hello ${data.name}, you're age is ${data.age} and you're ${data.isAdult ? 'an adult' : 'not an adult'}.`;
}

testFunction1(true)
let result = testFunction2({name: 'Developer', age: 30, isAdult: true})
console.log(result);
