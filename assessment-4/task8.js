/*There are three seating categories at a stadium. For a softball game, Class A seats costs Rs. 2000,
 Class B seats cost Rs. 1000, and class C seats cost Rs. 500. Write a program that asks how many tickets for each class of seats were sold,
 then display the amount of income generated from ticket sale.*/

const prompt = require ("prompt-sync")()
classA = 2000;
classB = 1000;
classC = 500;

let ticketA = prompt("Tickets for classA ::  ");  
let ticketB = prompt("Tickets for classB ::  ");
let ticketC = prompt("Tickets for classC ::  ");


let ticketSale = (ticketA * classA) + (ticketB * classB) + (ticketC * classC);
console.log("Amount of income generated :: ",ticketSale); 