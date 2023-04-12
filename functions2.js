"use strict";

//FUNCTION DECLARATION
//function declarations can be called before they are defined in the code
function calcAge1(birthYear) {
  //const age = 2022 - birthYear;
  //return age;
  return 2023 - birthYear;
}
const age1 = calcAge1(1986);

//function declarations can be called before they are defined in the code
const age3 = calcAge3(1958);
function calcAge3(birthYear) {
  return 2023 - birthYear;
}
console.log(age3);

//FUNCTION EXPRESSION
//Expressions produces values. Here the functionvalue gets stored in calcAge2

const calcAge2 = function (birthYear) {
  return 2023 - birthYear;
};
const age2 = calcAge2(1989);
console.log(age1, age2);

//ARROW FUNCTION
const calcAge4 = (birthYear) => 2023 - birthYear;
const age4 = calcAge4(1986);
console.log(age4);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  const retir = 65 - age;
  return `${firstName} retires in ${retir} years.`;
};
console.log(yearsUntilRetirement(1986, "Linda"));
console.log(yearsUntilRetirement(2018, "Viggo"));

//FUNCTIONS CALLING FUNCTIONS
//Make juice out of fruitPieces instead of whole fruit

function cutter(fruit) {
  return fruit * 4;
}

const fruitProcessor = function (apples, oranges) {
  const applePieces = cutter(apples);
  const orangePieces = cutter(oranges);
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
};
const fruitPieceJuice = fruitProcessor(2, 3);
console.log(fruitPieceJuice);
