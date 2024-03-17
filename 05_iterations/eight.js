const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function (acc, curVal) {
//   console.log(`Accu: ${acc} and curVal : ${curVal}`);
//   return acc + curVal;
// }, 0);

const myTotal = myNums.reduce((acc, curVal) => acc + curVal, 0);

console.log(myTotal);

const shoppingCart = [
  {
    name: "js",
    price: 566,
  },
  {
    name: "java",
    price: 999,
  },
  {
    name: "python",
    price: 888,
  },
  {
    name: "react",
    price: 777,
  },
  {
    name: "node js",
    price: 444,
  },
];

const priceTotal = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(priceTotal);
