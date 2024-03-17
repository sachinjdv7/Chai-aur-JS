// suppose getting email from db

// const userEmail = "sachin@gmail.com";

const userEmail = [];

if (userEmail) {
  console.log("Got user email");
} else {
  console.log(`Don't have user email`);
}

/**
 * falsy values
 * ============
 * 1. false
 * 2. 0, -0
 * 3. BigInt 0n
 * 4. ""
 * 5. null,
 * 6. undefined
 * 7. NaN
 */

/**
 * Truthy value
 * 1. '0'
 * 2. 'false'
 * 3. ' '
 * 4. []
 * 5. {}
 * 6. function(){}
 */

if (userEmail.length === 0) {
  console.log("Array is empty");
}

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}

// Nullish Coalescing operator (??) null undefined

let val1;

// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 10;
val1 = null ?? 10 ?? 20;

console.log(val1);

// Terniary Operator

// condition ? true : false;

const iceTeaPrice = 100;

iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("more than 80");
