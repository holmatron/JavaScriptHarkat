"use strict";

console.log("JS-Fundamentals- Part 2");

function logger() {
  console.log("My name is Linda");
}

//Calling/ running/ invoking function
logger();

//parameters are specific to the function and will be defined when the function is called
function fruitProcessor(apples, oranges) {
  //console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

//run the function and store the returned result in a new constant (that can be console logged)
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice); //cl: Juice with 5 apples and 0 oranges.

const orangeJuice = fruitProcessor(0, 5);
console.log(`Orangejuice is ${orangeJuice}`); //cl: Orangejuice is Juice with 0 apples and 5 oranges.

const sekamehu = fruitProcessor(3, 3);
console.log(`Sekamehu is ${sekamehu}`); //cl: Sekamehu is Juice with 3 apples and 3 oranges.

/*
const num = Number("23");
console.log(num);
*/
