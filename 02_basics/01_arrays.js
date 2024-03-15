// Arrays

const myArray = [0, 1, 2, 3, 4, 5];
const myHeroes = ["Batman", "Superman", "shaktiman", "natwarlal", "Mr.India"];

const myArray2 = new Array(0, 1, 2, 3, 4);

// console.log(myArray[0]);

// Array methods

// myArray.push(6);
// myArray.pop();
// console.log(myArray);

// myArray.unshift(9);
// myArray.shift();
// console.log(myArray.includes(9));
// console.log(myArray.indexOf(3));

// const newArray = myArray.join();
// console.log(newArray);
// console.log(typeof newArray);

// slice, splice

console.log("A", myArray);

const mynew1 = myArray.slice(1, 4);

console.log("B", mynew1);

// splice will modify the original array
// also include the last index

const mynew2 = myArray.splice(1, 4);
console.log("C", mynew2);
console.log("A", myArray);
