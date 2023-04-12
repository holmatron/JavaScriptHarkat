'use strict';

/*const friends = ["Ada", "Berta", "Cecilia"];
console.log(friends);

const year = new Array(1991, 1994, 2008, 2020);
console.log(year);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length); //not zero-based, so logs the actual amount of elements, in this case 3
console.log(friends[friends.length - 1]); // in this example logs the last element of 3
console.log(friends[friends.length - 2]); //second last of 3

//changing
friends[1] = "Bertil";
console.log(friends);
const linda = ["linda", "oljemark", 2023 - 1986, friends];
console.log(linda);

//Exercise
const calcAge = function (birthyear) {
  return 2023 - birthyear;
};
//console.log(calcAge(1986));

const years = [1989, 1958, 1974];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];

console.log(ages);
*/

//ADD ELEMENTS
const friends = ['Ada', 'Berta', 'Cecilia'];
const newLength = friends.push('Diana', 'Erika');
console.log(friends);
console.log(newLength);

friends.unshift('Aama');
console.log(friends);

//REMOVE ELEMENTS
friends.pop(); //removes last, in his case Erika
const popped = friends.pop(); //removes next, in this case Diana
console.log(popped);
console.log(friends);

friends.shift(); //removes first, Aaama
const shifted = friends.shift(); //Ada
console.log(shifted);
console.log(friends);

//Where is the element located
console.log(friends.indexOf('Berta'));
console.log(friends.indexOf('kalle'));

//Is the element located
console.log(friends.includes('Berta'));
console.log(friends.includes('kalle'));

if (friends.includes('Cecilia')) {
  console.log('You have a friend called Cecilia');
} else {
  console.log('Cant find a frien for you');
}
