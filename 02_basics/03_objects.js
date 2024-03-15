// singleton
Object.create; // will create singleton object

//object literal

const mySymbol = Symbol("mySymbol");
const JsUser = {
  name: "sachin",
  "full name": "sachin Jadhav",
  [mySymbol]: "mySymbol321",
  age: 30,
  location: "latur",
  email: "sachin@google.com",
  isloggedIn: true,
  lasLoginDays: ["Monday", "Tuesday", "Wednesday", "Thursday"],
};

// console.log(JsUser.name);
// console.log(JsUser["full name"]);
// console.log(JsUser["name"]);
// console.log(typeof JsUser[mySymbol]);

JsUser.email = "sachin@microsoft.com";
// Object.freeze(JsUser);
JsUser.email = "sachin@tridiagonal.com";

JsUser.greeting = function () {
  console.log("Hello JS User!");
};

JsUser.greetingTwo = function () {
  //say hello to the name user
  console.log(`Hello ${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
