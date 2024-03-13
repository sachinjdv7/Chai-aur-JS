const name = "sachin";

const githubRepos = 10;

console.log(name + githubRepos);

// Always use string interpolation

console.log(`My name is ${name} and I have ${githubRepos} repos on github.`);

// how to declare a string in javascript

const gameName = new String("Gama-Academy-course");

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("m"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-12, 4);
console.log(anotherString);

const newString2 = "    sachin   ";
console.log(newString2.trim());
console.log(newString2);

const url = "https://www.google.com/search%20javascript";
console.log(url.replace("%20", "-"));

console.log(url.includes("google"));

console.log(gameName.split("-"));
