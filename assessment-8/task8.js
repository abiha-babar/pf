/*Write a program that predicts the size of a population of organisms. The program should ask the user for
 the starting number of organism, their average daily population increase (as percentage), and the number of days they will multiply.
 \ A loop should display the size of population for each day.

Input Validation:

Do not accept a number less than 2 for the starting size of population
Do not accept a negative number for average daily population increase
Do not accept a number less than 1 for the number of days they will multiply*/

const prompt = require('prompt-sync')();

let startingNumber;
do {
    prompt("Enter the values greater than 2 ::"); 
} while ( startingNumber <=2)
let dailyAverage = parseFloat(prompt("Enter the daily population increase :: "));

let days = parseInt(prompt("Enter the number of days :: "));


