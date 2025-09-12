function getGreetings(arg1: string): string;
function getGreetings(arg1: string[]): string[];
function getGreetings(arg1: string | string[]): string | string[] {
    if (typeof arg1 === "string") {
        return `Hello, ${arg1}`;
    } else {
        return arg1.map(arg => `Hello, ${arg}`);
    }
}

console.log(getGreetings("Good Morning"));
console.log(getGreetings(["Good Morning", "Good Evening"]));

function WrapValue<T>(value: T): { value: T } {
    return { value }
}

console.log(WrapValue<string>("Hello"));
console.log(WrapValue<number>(5));

// Generic Constraints
function getLength<T extends { length: number }>(value: T): number {
    return value.length;
}

console.log(getLength<string>("testing"));
// console.log(getLength<number>(123));