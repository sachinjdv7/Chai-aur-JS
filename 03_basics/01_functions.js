function callMyName() {
  console.log("s");
  console.log("a");
  console.log("c");
  console.log("h");
  console.log("i");
  console.log("n");
}

// callMyName();

// function addTwoNumbers(num1, num2) {
//   console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2) {
  //   console.log(num1 + num2);
  return num1 + num2;
}
const result = addTwoNumbers(10, 8);
// console.log("Result", result);

function userLogin(username = "sachin") {
  if (!username) {
    console.log("Please provide username");
    return;
  }
  return `${username} is logged in`;
}
// console.log(userLogin());

function calculateCartItem(...num) {
  return num;
}
// console.log(calculateCartItem(10, 2000, 50000));

const user = {
  name: "sachin",
  age: 26,
  city: "delhi",
};

function handleUserObject(anyObject) {
  console.log(`Username is ${anyObject.name} and age is ${anyObject.age}`);
}
// handleUserObject(user);
handleUserObject({ name: "sachin", age: 28 });

const myNewArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function retunrSecondValue(getArray) {
  return getArray[1];
}
console.log(retunrSecondValue(myNewArray));
