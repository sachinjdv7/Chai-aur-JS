function setUsername(username) {
  //complex db calls
  this.username = username;
}

function createUser(username, email, password) {
  setUsername.call(this, username);

  this.email = email;
  this.password = password;
}

const chai = new createUser("test", "test@email.com", "password123");
console.log(chai);
