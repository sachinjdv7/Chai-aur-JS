// const myUser = new Object();

const myUser = {};

(myUser.id = "1sdfasd"), (myUser.name = "sachin"), (myUser.isLogedIn = true);
//   console.log(myUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "sachin",
      lastname: "jadhav",
    },
  },
};

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b", 3: "c" };
const obj2 = { 4: "d", 5: "e", 6: "f" };

// const obj3 = Object.assign({}, obj1, obj2); // intresting
const obj3 = { ...obj1, ...obj2 };

// console.log(obj3);

// Array of objects
// create array of objects users dummy data which coming from the db

const users = [
  {
    id: 1,
    email: "sachin@gmail.com",
  },
  {
    id: 2,
    email: "sachin@gmail.com",
  },
  {
    id: 3,
    email: "sachin@gmail.com",
  },
  {
    id: 4,
    email: "sachin@gmail.com",
  },
  {
    id: 5,
    email: "sachin@gmail.com",
  },
  {
    id: 6,
    email: "sachin@gmail.com",
  },
];

users[1].email;

console.log(myUser);
console.log(Object.keys(myUser));
console.log(Object.values(myUser));
console.log(Object.entries(myUser));

console.log(myUser.hasOwnProperty("id"));
