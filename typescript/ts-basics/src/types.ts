const firstName: string = "Developer";
const phoneNumber: number = 123456;
const isLoggedIn: boolean = true;
const nullChecking: null  = null;

const newArray: string[] = ["test1", "test2", "test3"];
const newTuple: [number, string] = [123, "test"];
enum userRoles
{
    "Admin",
    "Editor",
    "Viewer"
}

const getUserRoles: userRoles = userRoles.Admin;

//Type Aliases for Union type
type Id = string | number | boolean;
let productId: Id = 101;

// Literal Types
type Size = "small" | "medium" | "large";
let shirtSize: Size = "small";

//Type Assertion (Type Casting)
let assertionString: string = "Testing Assertion Type";
let assertionStringLength = (assertionString as string).length;
console.log(assertionStringLength);

//Index Signature
type container = {
    [key: string]: string | number
}
let containerData: container = {
    "email": "developer@gmail.com",
    "address": "developer address",
    "age": 20
}

let user = { name: "John", age: 30 };
type User = typeof user;
type UserKeys = keyof User;

console.log((function(obj: User, key: UserKeys) {
  return [obj.age, key];
})(user, "name"))

//in and extends concepts in typeof and keyof
type UserIn = {
    name: string,
    age: number
}

let userIn: UserIn = {
    name: "Developer",
    age: 20
}

type ReadOnlyUser = {
    readonly [u in keyof UserIn]: UserIn[u]
}

console.log(containerData);

console.table([firstName, phoneNumber, isLoggedIn, nullChecking, newArray, newTuple, getUserRoles, productId]);