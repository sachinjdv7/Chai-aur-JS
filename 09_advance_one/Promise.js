const PromiseOne = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Async task is completed");
    resolve();
  }, 1000);
});

PromiseOne.then(function () {
  console.log("Promise consumed");
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task 2 completed");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Async task 2 resolved");
});

const PromiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(
      {
        username: "sachin",
        email: "sachin@gmail.com",
      },
      1000
    );
  });
});

PromiseFour.then((user) => {
  console.log(user);
});

const PromiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    const error = true;
    if (!error) {
      resolve(
        {
          name: "name",
          age: 25,
        },
        1000
      );
    } else {
      reject("ERROR: Something went wrong");
    }
  });
});

PromiseFive.then((user) => {
  return user.name;
})
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("Promise is either resolved or rejected"));

const promiseSix = new Promise((resolve, reject) => {
  setTimeout(() => {
    const error = false;
    if (!error) {
      resolve({
        lang: "JS",
        useLang: "front and backend",
      });
    }
  }, 1000);
});

async function consumePromise() {
  try {
    const res = await promiseSix;
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

consumePromise();

async function getAllUsers() {
  try {
    const response = await fetch("https://api.github.com/users/sachinjdv7");
    console.log(typeof response);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getAllUsers();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
