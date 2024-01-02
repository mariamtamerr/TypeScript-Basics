"use strict";
// === You can use Typescript IMPLICITLY like JavaScript or EXPLCILITLY declaring data types from the beginning
// --=== IMPLICITLY --------------------------------
// ========== IMPLICIT Data Types =================================
const nameh = 'Mariam';
console.log(nameh);
// const inputs = document.querySelectorAll('input');
// console.log(inputs); 
// console.log("Dsdsdsd");
// inputs.forEach( (input) => {
//     console.log(input); 
// }); 
// ------------
let circ = (diameter) => {
    return diameter * Math.PI;
};
console.log(circ(7.5));
// --------------------------
// let names: string[] = ['mario', 'lala'];
// names[0] = 'salma';
// console.log(names); // (2) ['salma', 'lala']
// -----------------------
let mixed = ['ken', 4, true];
mixed.push('hello');
mixed.push(10);
console.log(mixed); // (5) ['ken', 4, true, 'hello', 10]
// it's fine bc from the beginning it knows that it's mixed kol value b haga
// -----------------------------------
// object 
// All Properties SHOUD HAVE THE SAME NUMBER Of properties & DATA TYPE 
// we can't change either info type nor its properties types
let info = {
    name: 'mario',
    age: 23,
};
// ERROR : Should be defined from the beginning  
// info.skills = ['running']; 
// But I can override THE VALUE not the DATA TYPE
info = {
    name: 'salma',
    age: 20,
};
console.log(info); // {name: 'salma', age: 20}
// -----------------------
// ===== EXPLICITLY ================
// ----
let id = 5;
let firstname = 'Mariam';
let hasCat = true;
let unit;
unit = 5;
// union type = variable assigned more than one type
let age;
age = 26;
age = '26';
// ---------------------------------------------------------------------------------------------------------------------------
// =========== Arrays in TypeScript =====================
let ids = [1, 2, 3, 4, 5];
let names = ['Mariam', 'Omar'];
let books = [
    { name: 'Fooled', author: 'Omar' },
    { name: 'Day in the sun', author: 'Layla' },
];
// array with any data type
let array = [1, 'Ali', true];
ids.push(6);
// ids.push('7'); ERROR 
// Arrays with union types
let person = ['Dan', 1, false];
// -----------------------------------------------------------------------------------------------------------------------------
// ============ Tuples =============================== 
// Tuples are stricter than normal arrays with fixed size and known datatypes
let personArray = ['Dan', 1, false];
// personArray[0]= 500;  ERROR  Type 'number' is not assignable to type 'string'.
// ---------------------------------------------------------------------------------------------------------------------------------------------------
// ========== Objects in Typescript ================
// Declare variables with specific object type annotations
let personObject;
personObject = {
    name: 'Mariam',
    location: 'Egypt',
    isProgrammer: true,
};
// personObject = {
//     name: 'John',
//   location: 'US',
// };  ERROR: missing the isProgrammer property
// You have to assign values to ALL variables since you declared ALL their types 
// --------------------------------------------
// -------------------------------------------
let about;
about = { name: 'John', age: 30 };
// 
let aboutTwo;
aboutTwo = {
    name: 'layla',
    age: 30,
};
console.log(aboutTwo); // {name: 'layla', age: 30}
let person1 = {
    name: 'Mariam',
    location: 'Egypt',
    isProgrammer: true,
};
let person2 = {
    name: 'Menna',
    location: 'Egypt',
    isProgrammer: true,
};
let sayStuff = {
    sayHi: function (name) {
        return `hi ${name}`;
    },
    sayBye: (name) => `bye ${name}`,
};
// console.log(sayStuff.sayHi('Heisenberg')); // Hi Heisenberg
// console.log(sayStuff.sayBye('Heisenberg')); // Bye Heisenberg
// -------------------------------
console.log(".........................");
console.log(".test .");
// ================== function signatures =============
let greet;
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
console.log(greet("ahmed", "greetings")); // ahmed says greetings
// just bec the first ones are called a and b doesn't mean the args have to be a and b .. they can be anything like name and greeting
// ANd we did RETURN '''VOID''' because we haven't returned anything aka we haven't used the 'return' keyword .. we only used console
// === if we explicitly specify a return type of the function, then
// the function MUST return this type and nothing else not even void (can't be empty)
// -----------------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------
// ============== classes =============
class Invoice {
    // Initialize The Values In The Constructor not in the beginning so each obj can have a diff client/amount/details
    constructor(client, amount, details) {
        this.client = client;
        this.amount = amount;
        this.details = details;
    }
    message() {
        return `${this.client} ows $${this.amount} for ${this.details}`;
    }
}
const invoiceOne = new Invoice('Mariam', 200, 'project');
const invoiceTwo = new Invoice('Menna', 340, 'Website');
// You can make an array of the classes objects
const invoice = [];
invoice.push(invoiceOne, invoiceTwo);
console.log(invoice);
console.log(invoiceOne.message()); // Mariam ows $200 for project
// You can access the 'public' VALUE NOT DATA TYPE and change it
invoiceTwo.amount = 500;
console.log(invoiceTwo); // Invoice {client: 'Menna', amount: 500, details: 'Website'}
// ---------------------------
// Class Types : 
//  1) public ... the default .. read & change inside&outside class
//  2) private .. you can read and change only inside class/method
//  3) readonly .. only read inside & outside class but not change the value
// -------------------------------------
// You can declare&initialize properties immediately in constructor USING MODIFIERS (readonly/oublic/private)
// You can do :: 
// class Invoice{
//     constructor(
//         readonly client: string, 
//         private details: string,
//         public amount: number,
//     ) {}
// }
// BUT WITHOUT MODIFIERS, you'll get an error
