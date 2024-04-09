//lexical scope

function outer() {
  let username = "sachin";
  console.log(secret);
  function inner() {
    let secret = "123";
    console.log("inner ", username);
  }
  function innerTwo() {
    console.log("Inner tWo", username);
    console.log(secret);
  }
  inner();
  innerTwo();
}
outer();
// console.log("outer", username);

//closure

function makefunc() {
  const name = "sachin";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makefunc();
myFunc();
