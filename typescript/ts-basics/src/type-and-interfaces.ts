// Extending properties in interface
interface AppUser {
    id: number;
    userName: string;
}

interface AdminUser extends AppUser {
    adminLevel: number;
}

interface Customer extends AppUser {
    purchaseHistory: string[];
}

const adminUser : AdminUser = {
    id: 1,
    userName: "User1",
    adminLevel: 5
}

const customer : Customer = {
    id: 2,
    userName: "User2",
    purchaseHistory: ["item1", "item2"]
}

// Extending properties in type
type AppUserType = {
    id: number,
    userName: string
}

type AdminUserType = AppUserType &{
    adminLevel: number
}

type CustomerType = AppUser & {
    purchaseHistory: string[]
}

const adminType: AdminUserType = {
    id: 3,
    userName: "User3",
    adminLevel: 10
}

const customerType: CustomerType = {
    id: 4,
    userName: "User4",
    purchaseHistory: ["item3", "item4"]
}

console.table([adminUser, customer, adminType, customerType]);