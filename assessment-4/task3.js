/*Write an algorithm that asks user to enter a golfer's 
score for three games of golf and then display the average of three scores.
 After you write algorithm, convert it into complete JavaScript program.*/

 const prompt = require ("prompt-sync")();

let firstGameScore =parseFloat( prompt("Enter the golfers score for 1st game :: "));
let secondGameScore =parseFloat( prompt("Enter the golfers score for 2nd game :: "));
let thirdGameScore =parseFloat( prompt("Enter the golfers score for 3rd game :: "));

average =(( firstGameScore + secondGameScore + thirdGameScore) / 3);
console.log("The average of three scores are :: ", average);
