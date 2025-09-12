"use strict";
const adminUser = {
    id: 1,
    userName: "User1",
    adminLevel: 5
};
const customer = {
    id: 2,
    userName: "User2",
    purchaseHistory: ["item1", "item2"]
};
const adminType = {
    id: 3,
    userName: "User3",
    adminLevel: 10
};
const customerType = {
    id: 4,
    userName: "User4",
    purchaseHistory: ["item3", "item4"]
};
console.table([adminUser, customer, adminType, customerType]);
