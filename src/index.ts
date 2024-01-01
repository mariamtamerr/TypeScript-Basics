// === You can use Typescript IMPLICITLY like JavaScript or EXPLCILITLY declaring data types from the beginning


// --=== IMPLICITLY --------------------------------

// ========== IMPLICIT Data Types =================================

const nameh = 'Mariam' ; 
console.log(nameh);

// const inputs = document.querySelectorAll('input');
// console.log(inputs); 


// console.log("Dsdsdsd");


// inputs.forEach( (input) => {
//     console.log(input); 
// }); 

// ------------

let circ = (diameter:number) => {
    return diameter * Math.PI;
}

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

let id: number = 5; 
let firstname: string = 'Mariam';
let hasCat: boolean = true;

let unit: number;
unit = 5; 

// union type = variable assigned more than one type
let age: string | number; 
age = 26; 
age = '26'; 

// ---------------------------------------------------------------------------------------------------------------------------

// =========== Arrays in TypeScript =====================
let ids: number[] = [1,2,3,4,5];
let names: string[] = ['Mariam', 'Omar'];
let books: object[] = [
    {name:'Fooled', author : 'Omar'},
    {name:'Day in the sun', author : 'Layla'},
]; 

// array with any data type
let array: any[] = [1, 'Ali', true];

ids.push(6);
// ids.push('7'); ERROR 


// Arrays with union types
let person: (string | number | boolean)[] = ['Dan', 1, false];

// -----------------------------------------------------------------------------------------------------------------------------

// ============ Tuples =============================== 
// Tuples are stricter than normal arrays with fixed size and known datatypes
let personArray: [string, number, boolean] = ['Dan', 1, false];
// personArray[0]= 500;  ERROR  Type 'number' is not assignable to type 'string'.


// ---------------------------------------------------------------------------------------------------------------------------------------------------

// ========== Objects in Typescript ================
// Declare variables with specific object type annotations
let personObject : {
    name: string;
    location: string;
    isProgrammer: boolean;
};

personObject = {
    name:'Mariam',
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

let about: object; 
about = {name:'John', age:30};


// 

let aboutTwo: {
    name: string,
    age: number, 
}


aboutTwo = {
    name: 'layla',
    age: 30,
}

console.log(aboutTwo); // {name: 'layla', age: 30}


// ============== Interface ===========================
// ---- Using an INTERFACE to make sure all have the same properties and value types
interface Person {
    name: string;
    location: string;
    isProgrammer: boolean;
}


let person1: Person = {
    name:'Mariam',
    location: 'Egypt',
    isProgrammer: true,
};

let person2: Person = {
    name:'Menna',
    location: 'Egypt',
    isProgrammer: true,
};


// ----------------------------------------------------------------------

// ======================== functions ===================================

// We can also declare function properties with function signatures. We can do this using old-school common JavaScript functions (sayHi), or ES6 arrow functions (sayBye):
interface Speech {
    sayHi(name: string): string;
    sayBye: (name: string) => string;
  }


  let sayStuff: Speech = {
    sayHi: function (name: string) {
        return `hi ${name}`
    },
    sayBye: (name: string) => `bye ${name}`,
  };


// console.log(sayStuff.sayHi('Heisenberg')); // Hi Heisenberg
// console.log(sayStuff.sayBye('Heisenberg')); // Bye Heisenberg


// -------------------------------


console.log(".........................")
console.log(".test .")



// ================== function signatures =============

let greet: (a: string, b: string) => void;

greet = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`);
};

console.log(greet("ahmed", "greetings")); // ahmed says greetings

// just bec the first ones are called a and b doesn't mean the args have to be a and b .. they can be anything like name and greeting

// ANd we did RETURN '''VOID''' because we haven't returned anything aka we haven't used the 'return' keyword .. we only used console

// === if we explicitly specify a return type of the function, then
// the function MUST return this type and nothing else not even void (can't be empty)


// -----------------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------




