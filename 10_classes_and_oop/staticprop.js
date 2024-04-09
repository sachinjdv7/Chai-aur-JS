class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Usename is ${this.username}`);
  }
  static createId() {
    return `123`;
  }
}

const sachin = new User("sachin");

// console.log(sachin.createId());

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const iPhone = new Teacher("iphone", "i@gmail.com");
console.log(iPhone.createId());
// iPhone.logMe();
