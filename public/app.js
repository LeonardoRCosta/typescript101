import { Invoice } from './classes/Invoice.js'; // because we are using javascript in the browser we need to import the js module.
const invOne = new Invoice("Leonardo", "Working on PeerBR's payment API", 1300);
const invTwo = new Invoice("Rafael", "Working on PeerBR's payment API", 1500);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach((inv) => console.log(inv.client, inv.amount, inv.format()));
const form = document.querySelector(".new-item-form");
console.log(form.children);
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
