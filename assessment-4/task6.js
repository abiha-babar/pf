/*The cosecant of the angle a is 1 / sine(a).
 Write a program that calculates the cosecant of the angle stored in variable a and 
 store the result in variable y. Display the result.*/
const prompt = require ("prompt-sync")();


let a = prompt ("Enter the value of a :: ");
y = (1 / Math.sin(a));
console.log("The cosecant of the angle is :: ",y);