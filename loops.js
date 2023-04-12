"use strict";

/*
console.log('lifting weights repetition 1');
console.log('lifting weights repetition 2');
console.log('lifting weights repetition 3');
console.log('lifting weights repetition 4');
console.log('lifting weights repetition 5');
console.log('lifting weights repetition 6');
*/

//for loop keeps running while condition is TRUE

for (let rep = 1; rep <= 6; rep++) {
  //console.log('lifting weights repetition 1');
  console.log(`Lifting weights repetition ${rep}`);
}

//-------------------------------------47
//looping arrays, braking and continuing

const jonas = [
  "Jonas",
  "Shmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

const types = [];

//reading values from an array
for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i], typeof jonas[i]);

  //Filling types array
  //types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2023 - years[i]);
}

console.log(ages);

//Continue and brake-statements

console.log("---ONLY STRINGS---");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;
  console.log(jonas[i], typeof jonas[i]);
}

console.log("---BREAK WITH NUMBER---");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") break;
  console.log(jonas[i], typeof jonas[i]);
}
//----------------------------------------------------------48
//Looping backwards ans loops in loops

const linda = [
  "Linda",
  "Oljemark",
  2023 - 1986,
  "engineer",
  ["Hanna", "Gusse", "Marina"],
];

//From last to first

for (let i = linda.length - 1; i >= 0; i--) {
  console.log(i, linda[i]);
}

//Loop in loop

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`----Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Lifting weigths repetition ${rep} 🏋️‍♂️`);
  }
}

/*output: 
----Starting exercise 1
----Starting exercise 1
loops.js:87 Lifting weigths repetition 1 🏋️‍♂️
loops.js:87 Lifting weigths repetition 2 🏋️‍♂️
loops.js:87 Lifting weigths repetition 3 🏋️‍♂️
loops.js:87 Lifting weigths repetition 4 🏋️‍♂️
loops.js:87 Lifting weigths repetition 5 🏋️‍♂️
loops.js:84 ----Starting exercise 2
loops.js:87 Lifting weigths repetition 1 🏋️‍♂️
loops.js:87 Lifting weigths repetition 2 🏋️‍♂️
loops.js:87 Lifting weigths repetition 3 🏋️‍♂️
loops.js:87 Lifting weigths repetition 4 🏋️‍♂️
loops.js:87 Lifting weigths repetition 5 🏋️‍♂️
loops.js:84 ----Starting exercise 3
loops.js:87 Lifting weigths repetition 1 🏋️‍♂️
loops.js:87 Lifting weigths repetition 2 🏋️‍♂️
loops.js:87 Lifting weigths repetition 3 🏋️‍♂️
loops.js:87 Lifting weigths repetition 4 🏋️‍♂️
loops.js:87 Lifting weigths repetition 5 🏋️‍♂️
*/

//The While loop

//for loop keeps running while condition is TRUE
console.log("----for");
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}

//while loop
console.log("----while");
let rep = 1;

while (rep <= 10) {
  console.log(`lifting weigths repetition ${rep}`);
  rep++;
}

//rolling dice (be careful of infinite loop before testing!)

console.log("---rolling dice");

let dice = Math.trunc(Math.random() * 6) + 1; //random is a decimal, trunc makes it even
while (dice !== 6) {
  console.log(`You rolled number ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Yay! You rolled the number 6");
}
