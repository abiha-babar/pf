/*Write a program that predicts the size of a population of organisms. The program should ask the user for
 the starting number of organism, their average daily population increase (as percentage), and the number of days they will multiply.
 \ A loop should display the size of population for each day.

Input Validation:

Do not accept a number less than 2 for the starting size of population
Do not accept a negative number for average daily population increase
Do not accept a number less than 1 for the number of days they will multiply*/
// Ask for the starting population
const prompt = require ("prompt-sync")();
let population;
do {
    population = parseInt(prompt("Enter the starting number of organisms (must be at least 2):"));
} while (population < 2);

let dailyIncrease;
do {
    dailyIncrease = parseFloat(prompt("Enter the average daily population increase as a percentage (cannot be negative):"));
} while (dailyIncrease < 0);

let numDays;
do {
    numDays = parseInt(prompt("Enter the number of days the population will multiply (must be at least 1):"));
} while (numDays < 1);


console.log("Starting population ::",population );
console.log("Average daily increase :: " ,dailyIncrease,"%");
console.log("Number of days ::",numDays);
console.log("   Population growth each day  :: ");

for (let day = 1; day <= numDays; day++) {
    population += population * (dailyIncrease / 100); 
    console.log("DAYS :",day," :: Population :",population);
}

