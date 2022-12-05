import { Invoice } from './classes/Invoice.js' // because we are using javascript in the browser we need to import the js module.

const invOne = new Invoice("Leonardo", "Working on PeerBR's payment API", 1300);
const invTwo = new Invoice("Rafael", "Working on PeerBR's payment API", 1500);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach((inv) => console.log(inv.client, inv.amount, inv.format()));

const form = document.querySelector(".new-item-form") as HTMLFormElement;
console.log(form.children);

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
