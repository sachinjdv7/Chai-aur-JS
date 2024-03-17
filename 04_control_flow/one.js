const temp = 40;

// if (temp <= 40) {
//   console.log(`Temp is 40`);
// } else {
//   console.log(`Temp is more than 50`);
// }
// console.log(`Executed`);

// const score = 200;

// if (score > 100) {
//   var power = "fly";
//   console.log(`You have power to ${power}`);
// }
// console.log(`You have power to ${power}`);

// const balance = 1000;
//implicit scope
// if (balance > 500) console.log("test");

// if (balance < 500) {
//   console.log("less than 500");
// } else if (balance < 750) {
//   console.log("less than 750");
// } else if (balance < 900) {
//   console.log("less than 750");
// } else {
//   console.log("less than 1200");
// }

const userLoggedIn = true;
const debitCard = true;
const userLoggedInFromGoogle = false;
const userLoggedInFromEmail = true;

if (userLoggedIn && debitCard) {
  console.log("Allow to buy courses");
}

if (userLoggedInFromGoogle || userLoggedInFromEmail) {
  console.log("user logged in");
}
