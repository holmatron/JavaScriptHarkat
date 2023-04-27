'use strict';

//Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error.

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What is a sensor error? And what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtracting min from max (amplitude) and return it

/* MY SOLUTION to finding min and max and calculating amplitude. NO error-handling
const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(max);

  for (let i = 0; i < temps.length; i++) {
    if (temps[i] < min) min = temps[i];
  }
  console.log(min);
  let amplitude = max - min;
  console.log(`the amplitude is ${amplitude}`);
};

calcTempAmplitude([-3, 7, 0.4]);
*/

//CLEANER SOLUTION

/*
const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
    if (typeof curTemp !== 'number') continue;
  }
  console.log(max);
  console.log(min);
  return max - min;

  //let amplitude = max - min;
  //console.log(`the amplitude is ${amplitude}`);
};

//calcTempAmplitude([-3, 'error', 7, 0.4]);
const amplitude = calcTempAmplitude(temperatures);

console.log(amplitude);
*/

// Problem 2: What if there is two arrays?

// 1) - With two arrays, should we implement functionality twice? Answer: NO! Just merge two arrays
// 2) Breaking in to sub-problems
// - Merge 2 arrays

const calcTempAmplitudeNew = function (t1, t2) {
  //   const array1 = ['a', 'b', 'c'];
  //   const array2 = ['d', 'e', 'f'];
  //   const array3 = array1.concat(array2);

  const temps = t1.concat(t2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
    if (typeof curTemp !== 'number') continue;
  }
  console.log(max);
  console.log(min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);

console.log(amplitudeNew);
