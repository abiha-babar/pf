/*Task-04 (Sum of Numbers)
Write a program that ask user to enter a positive number (do not accept –ve number).
 The program should use a while loop to sum all the number from 1 up to the number entered.*/


const prompt = require('prompt-sync')();

let number = prompt ("Enter a positive number :: ");

while (number <= 0)
{
    number = parseInt( prompt("Enter a positive number :: "));
}


let totalSum = 0;
let i=1;

while ( i <= number)
{
    totalSum += i;
    i++;
}
console.log("The sum of the total number is :: ",totalSum);