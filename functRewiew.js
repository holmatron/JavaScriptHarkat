"use strict";

const calcAge = function (birthYear) {
  return 2023 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retir = 65 - age;
  if (retir > 0) {
    return `${firstName} retires in ${retir} years.`;
  } else {
    return `${firstName} has already retired`;
  }
  //OR
  //if (retir > 0) {
  //return retir;
  //} else {
  //return -1}
};

console.log(yearsUntilRetirement(1986, "Linda"));
