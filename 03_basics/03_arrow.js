const user = {
  username: "batman",
  priceTicket: 200,
  welcomeMessage: function () {
    console.log(`Welcome ${this.username} to the indian theater`);
    console.log(this);
  },
};
console.log(this);
user.welcomeMessage();
user.username = "superman";
user.welcomeMessage();

//+++++++++++++++++++++++++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++++++++++++++++++++++++

function coffee() {
  const username = "batman";
  console.log(this.username);
}
coffee();

//function expression
const coffee2 = function () {
  const username = "batman";
  console.log(this);
};
coffee2();

//arrow function
const coffee3 = () => {
  const username = "batman";
  console.log(this); //{}
};
coffee3();

const addTwo = (num1, num2) => {
  return num1 + num2;
};

const addTwo1 = (num1, num2) => num1 + num2;

const addTwo3 = (num1, num2) => num1 + num2;

const addTwo4 = (num1, num2) => ({ name: "sachin" });
console.log(addTwo4(10, 20));
