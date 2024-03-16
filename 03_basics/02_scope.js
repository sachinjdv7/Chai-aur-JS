// var c = 3000;
let a = 300;
if (true) {
  let a = 10;
  const b = 20;
  // console.log("inner", a);
}
// console.log(a);
// console.log(b);
// console.log(c);

function One() {
  const username = "sachin";
  function Two() {
    const website = "yotube";
    // console.log(username);
  }
  // console.log(website);
  // Two();
}
// One();

if (true) {
  const username = "sachin";
  if (username === "sachin") {
    const website = "youtube";
    console.log(username + website);
  }
  // console.log(website);
}
// console.log(username);

//+++++++++++++++++++++++++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++++++++++++++++++++++++

console.log(addOne(10));
function addOne(num) {
  return num + 1;
}

addTwo(10);
const addTwo = function (num) {
  return num + 2;
};
