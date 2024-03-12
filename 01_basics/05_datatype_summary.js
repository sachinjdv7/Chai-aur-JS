// Premitive Data Types

/*
1. String
2. Number
3. Boolean
4. Undefined
5. Null
6. Symbol
7. BigInt
*/

// Non-Premitive Data Types(Reference Data Types)

/*
1. Object
2. Array
3. Function
*/

/*
JavaScript is a dynamically typed language. 
Because data type will automatically assigned at the time of compilation or code execution.
*/

const isLogged = true;
const outsideTemp = null;
let userEmailAddress;

const id = Symbol("id");
const anotherId = Symbol("id");

console.log(id === anotherId); // false

const bigNumber = 1234567890123456789012345678901234567890n;

const heros = ["Shaktiman", "Superman", "Batman", "Spiderman"];

let obj = {
  name: "John",
  age: 30,
};

const myFunction = function () {
  console.log("Hello World");
};

console.log(typeof bigNumber);
console.log(typeof myFunction);
