// let myName = "sachin      ";
// let myChannel = "   GeeksforGeeks";

// console.log(myName.trueLength);
// console.log(myChannel.length);

let myHerors = ["thor", "hulk", "spiderman", "ironman"];

let myHeroPowers = {
  thor: "thunder",
  hulk: "super strength",
  getHeroPower: function () {
    console.log(`Thor power is ${this.thor}`);
  },
};

Object.prototype.Sachin = function () {
  console.log("Sachin is the best");
};

// myHeroPowers.Sachin();
// console.log(myHeroPowers.getHeroPower());

Array.prototype.heySachin = function () {
  console.log("Hey Sachin");
};

// myHeroPowers.Sachin();
// myHeroPowers.heySachin();
// myHerors.heySachin();

//Inheritance

const User = {
  name: "sachin",
  email: "sachin@gmail.com",
};

const Teacher = {
  makeVideos: true,
};

const TeachingSupport = {
  isAvailable: true,
};

const TASupport = {
  makeAssignment: "js Assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

//modern sytanx

Object.setPrototypeOf(TeachingSupport, Teacher);

const anotherName = "sachinjadhav      ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is ${this.trim().length}`);
};

anotherName.trueLength();
"sachin".trueLength();
"iceTea".trueLength();
