/*A retail store grants its customers a maximum amount of credit.
 Each customer's available credit is their maximum amount of credit minus the amount of credit used.
  Write a pseudo code on paper that asks for a customer's maximum amount of credit and amount of credit used.
 The program should display the remaining credit. Convert this algorithm into a complete JavaScript program in your lab*/

const prompt = require("prompt-sync")();

let maxCredit = prompt ("Enter the maximun amount of credit :: ");
let usedCredit= prompt("Enter the amount of credit used :: ");

let remainingCredit = maxCredit - usedCredit;
console.log("REMAINING CREDIT IS :: ",remainingCredit);