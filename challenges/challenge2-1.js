"use strict";

/* Coding Challenge #1 Fundamentals part 2
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores � */

//ARROW FUNCTION
/*const calcAge4 = (birthYear) => 2023 - birthYear;
const age4 = calcAge4(1986);
console.log(age4);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  const retir = 65 - age;
  return `${firstName} retires in ${retir} years.`;
};
*/

//TEST 1
const calcAvg = (score1, score2, score3) => {
  const avgScore = (score1 + score2 + score3) / 3;

  return avgScore;
};
/* OR JUST
const calcAvg = (score1, score2, score3) => (score1 + score2 + score3) / 3;
console.log(calcAvg(1, 10, 100));
*/
let avgDolphins = calcAvg(44, 23, 71);
let avgKoalas = calcAvg(65, 54, 49);
console.log(avgDolphins, avgKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`dolphins win with ${avgDolphins} over Koalas, ${avgKoalas}`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`koalas win with ${avgKoalas} over Dolphins ${avgDolphins}`);
  } else {
    console.log("Nobody wins");
  }
};

checkWinner(avgDolphins, avgKoalas);

//TEST 2

avgDolphins = calcAvg(85, 54, 41);
avgKoalas = calcAvg(23, 34, 27);
console.log(avgDolphins, avgKoalas);
checkWinner(avgDolphins, avgKoalas);
