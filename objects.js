"use strict";
//order matters in arrays
/* 
const lindaArray = [
  "Linda",
  "Oljemark",
  2023 - 1986,
  "engineer",
  ["Gusse", "Hanna"],
];

//Objects consists of key-value-pairs, here the order does not matter
const linda = {
  firstName: "Linda",
  lastName: "Oljemark",
  age: 2023 - 1986,
  job: "engineer",
  friends: ["Gusse", "Hanna", "Marina"],
};

//dot vs. bracket notations

console.log(linda);
console.log(linda.friends);
console.log(linda["lastName"]); // here we can put any expression we like

const nameKey = "Name";
console.log(linda["first" + nameKey]);
console.log(linda["last" + nameKey]);

//when we need to first compute the propertyname like in the example over, use bracket-notations. Otherwise use dot-notations.

const interestedIn = prompt(
  "What do you want to know about Linda? Choose between firstName, lastName, age, job and friends"
);

//console.log(linda[interestedIn]);

if (linda[interestedIn]) {
  console.log(linda[interestedIn]);
} else {
  console.log("NOT AN OPTION");
}

linda.location = "Spain";
linda["twitter"] = "@jonasschemdtman";
console.log(linda);

//Challenge
//Linda has 3 friends and her best friend is called Gusse

console.log(
  `${linda.firstName} has ${linda.friends.length} friends and her best friend is called ${linda.friends[0]}`
);
*/

// Object methods

const linda = {
  firstName: "Linda",
  lastName: "Oljemark",
  birthYear: 1986,
  job: "engineer",
  friends: ["Gusse", "Hanna", "Marina"],
  hasDriversLicence: true,

  // 1 calcAge: function (birthYear) {
  // 1  return 2023 - birthYear;
  // 1 },

  // 2 calcAge: function () {
  // 2 console.log(this);
  // 2 return 2023 - this.birthYear;
  // 2 },

  calcAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },

  //Challenge
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} years old ${
      this.job
    }, and she has ${this.hasDriversLicence ? "a" : "no"} driver's licence.`;
  },
};

console.log(linda.calcAge());
console.log(linda.age);
console.log(linda.age);
// 1 console.log(linda.calcAge(linda.birthYear));
// 1 console.log(linda["calcAge"](1986));

//Challenge: Get summarie that returns a string that summarizes the data from linda. "Linda is a 37 years old engineer. Linda has a drivers licence."

console.log(linda.getSummary());
