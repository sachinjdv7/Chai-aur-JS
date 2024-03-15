const marvelHeroes = ["Iron man", "Spiderman", "Thor"];

const dcHeroes = ["Batman", "Superman", "flash", "wonder woman"];

// marvelHeroes.push(dcHeroes);
// console.log(marvelHeroes);
// console.log(marvelHeroes[3][1]);

// const allHeros = marvelHeroes.concat(dcHeroes);
// console.log(allHeros);
// console.log(marvelHeroes);

const allNewHeros = [...marvelHeroes, ...dcHeroes];
// console.log(allNewHeros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const realArray = anotherArray.flat(Infinity);
// console.log(realArray);

console.log(Array.isArray("sachin"));
console.log(Array.from("sachin"));
console.log(Array.from({ name: "sachin" })); // [] interesting

let score = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score, score2, score3));
