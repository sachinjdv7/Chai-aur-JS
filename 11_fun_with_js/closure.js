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
