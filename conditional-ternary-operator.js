"use strict";

console.log("Conditional Ternary Operator");

//writes something similar to the if/else statement, using a condition with ? if true : if false. If the condition is true, the first value is returned, if false, the second value is returned

const age = 37;
age >= 18
  ? console.log("I'm over 18 so I can drink alcohol🍸")
  : console.log("I'm under 18, so i drink water💧");

// the same as above, but with a variable to store the result in
const drink = age >= 18 ? "wine🍷" : "water💧";
console.log(`My drink of choice is ${drink}`);

// almost the same as above, but with a if/else statement
let drink2;
if (age >= 18) {
  drink2 = "if/else wine🍷";
} else {
  drink2 = "if/else water💧";
}
console.log(drink2);

console.log(
  `And finally the same with a template litteral: ${
    age >= 18 ? "wine🍷" : "water💧"
  }`
);

// THE TERNARY OPERATOR IS NOT AN REPLACEMENT FOR IF ELSE STATEMENTS, BUT IT CAN BE USED INSTEAD OF SIMPLE IF ELSE STATEMENTS
