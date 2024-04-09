class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }
  get password() {
    return `${this._password}sachin`;
  }
  set password(value) {
    this._password = value;
  }
}

const sachin = new User("sachin@gmail.com", "abc");
console.log(sachin.password);
console.log(sachin.email);
