// Immediately Invoked Function Expression

(function chai() {
  // named IIFE
  console.log("Database connected");
})();
// chai();

((name) => {
  console.log(`Db connected two ${name}`);
})("sachin");

/**
 * Global scope ke pollution se bachne ke liye IIFE ka use hota hai.
 */
