/*Write a program that calculates the average rainfall for three months.
 The program should ask the user to enter the name of month,
 such as June or July and the amount of rain (in millimeters) that fell each month. 
The program should display a message similar to the following: "The average rain for July,
 August & September is 20.65 millimeter."*/

const prompt = require("prompt-sync")();

let month1 = prompt("Enter the name of the month1 :: ");
let month2 = prompt("Enter the name of the month2 :: ");
let month3 = prompt("Enter the name of the month3 :: ");


let amountM1 =parseFloat( prompt ("Enter the amount of rain that fell 1st month :: "));
let amountM2 = parseFloat(prompt ("Enter the amount of rain that fell 2nd month :: "));
let amountM3 = parseFloat(prompt ("Enter the amount of rain that fell 3rd month :: "));

average = (amountM1 + amountM2 + amountM3)/3;


console.log("The average rain for ",month1,month2,month3, "is",average,"millimeter.");