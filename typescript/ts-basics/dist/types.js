"use strict";
const firstName = "Developer";
const phoneNumber = 123456;
const isLoggedIn = true;
const nullChecking = null;
const newArray = ["test1", "test2", "test3"];
const newTuple = [123, "test"];
var userRoles;
(function (userRoles) {
    userRoles[userRoles["Admin"] = 0] = "Admin";
    userRoles[userRoles["Editor"] = 1] = "Editor";
    userRoles[userRoles["Viewer"] = 2] = "Viewer";
})(userRoles || (userRoles = {}));
const getUserRoles = userRoles.Admin;
let productId = 101;
console.table([firstName, phoneNumber, isLoggedIn, nullChecking, newArray, newTuple, getUserRoles, productId]);
