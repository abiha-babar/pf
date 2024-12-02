/*Write a program that defines an integer variable named age and a float variable named weight. Store your age and weight in the variables. The program should display these values on the screen in a manner similar to the following:


Program Output:

My age is 20 and my weight is 180 pounds*/

const prompt = require("prompt-sync")(); 


let age = parseInt(prompt("Enter the Age :: "));
let weight = parseFloat(prompt("Enter the Weight ::"));

console.log ( "My age is ",age,"and my weight is ",weight,"pounds");