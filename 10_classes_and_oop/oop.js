// const user = {
//   name: "sachin",
//   loginCount: 32,
//   signedIn: true,

//   getUserDetails: function () {
//     // console.log("Got user details from the database");
//     console.log(`name: ${this.name}, loginCount: ${this.loginCount}`);
//     console.log(this);
//   },
// };
// console.log(this);
// console.log(user.name);
// console.log(user.getUserDetails());

function User(userName, logInCount, isLoggedIn) {
  this.userName = userName;
  this.logInCount = logInCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.userName}`);
  };

  // return this;
}

const user1 = new User("sachin", 5, true);
const user2 = new User("nitin", 10, false);
console.log(user1.greeting());
console.log(user2);
