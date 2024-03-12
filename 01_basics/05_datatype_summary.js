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

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Javascript Memory

/*
1. Stack (premitive data types) -> In stack we will store the copy of the data.
2. Heap (non-premitive data types) -> In heap we will store the reference of the data.
*/

let myYoutubeName = "hiteshchaudarydocom";
let anotherName = myYoutubeName;
anotherName = "chai aur js";

console.log(myYoutubeName);
console.log(anotherName);

let objOne = {
  name: "sachin",
  upi: "sachin@upi",
};

let objTwo = objOne;

objTwo.upi = "sachin@okaxis";

console.log(objOne.upi);
console.log(objTwo.upi);
