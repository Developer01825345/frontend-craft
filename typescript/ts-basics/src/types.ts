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
type Id = string | number;
let productId: Id = 101;

console.table([firstName, phoneNumber, isLoggedIn, nullChecking, newArray, newTuple, getUserRoles, productId]);