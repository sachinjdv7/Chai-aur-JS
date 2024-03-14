// Dates

let myDate = new Date();
console.log(myDate); //2024-03-14T03:43:38.624Z
console.log(myDate.toString()); //Thu Mar 14 2024 09:13:38 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); //Thu Mar 14 2024
console.log(myDate.toISOString()); //2024-03-14T03:43:38.624Z
console.log(myDate.toJSON()); //2024-03-14T03:43:38.624Z
console.log(myDate.toLocaleDateString()); // 14/3/2024
console.log(myDate.toLocaleString()); // 14/3/2024, 9:16:37 am
console.log(typeof myDate); //object

// In js month starts from 0
// const myDateCreated = new Date(2023, 0, 23);
// const myDateCreated = new Date(2023, 0, 23, 5, 3);
// const myDateCreated = new Date("2023-01-23");
const myDateCreated = new Date("01-05-23");
console.log(myDateCreated.toLocaleString());

// Quizes and poles in js (Timestamps will be useful)

let myTimeStamp = Date.now();
// console.log(myTimeStamp); //1710437651820
// console.log(myDateCreated.getTime());
// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate.getMonth());
console.log(newDate.getDay());

const myDATE = newDate.toLocaleString("default", {
  weekday: "long",
});
console.log(myDATE);
