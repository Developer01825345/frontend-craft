import { Invoice } from "./Classes/Invoice.js";
import { Payment } from "./Classes/Payment.js";
import { IFormat } from "./Interfaces/IFormat.js";
import { LoggerListUI } from "./Classes/LoggerListUI.js";

// let docOne: IFormat;
// let docTwo: IFormat;

// docOne = new Invoice("Tester1", "Work on the xyz website", 250);
// docTwo = new Payment("Tester1", "Payment details1", 200);

// const invOne = new Invoice("Client A", "Work on project A", 250);
// const invTwo = new Invoice("Client B", "Work on project B", 300);

// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);
// const formatInvoiceValue = invOne.format();

// console.log(invoices);
// console.log(formatInvoiceValue);

// const myself : IPerson = {
//     name: "Developer",
//     age: 10,
//     spend(amount: number): number
//     {
//         console.log(`I spent $${amount}`);
//         return amount;
//     }
// }

// const showPerson = (person: IPerson): void => 
// {
//     console.log(`This is ${person.name}`);
// }

// showPerson(myself);

// console.log(myself.age, myself.name, myself.spend(100));

const formContainer = document.querySelector("form") as HTMLFormElement;
const typeElement = document.querySelector("#type") as HTMLSelectElement;
const toFromElement = document.querySelector("#toFrom") as HTMLInputElement;
const detailsElement = document.querySelector("#details") as HTMLInputElement
const amountElement = document.querySelector("#amount") as HTMLInputElement;

formContainer.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    let doc: IFormat;
    const uiElement = document.querySelector('ul') as HTMLUListElement;
    const uiContainer = new LoggerListUI(uiElement);

    if (typeElement.value === "invoice")
    {
        doc = new Invoice(toFromElement.value, detailsElement.value, amountElement.valueAsNumber);
    } else {
        doc = new Payment(toFromElement.value, detailsElement.value, amountElement.valueAsNumber);
    }
    uiContainer.render(doc, typeElement.value, 'end');
});

