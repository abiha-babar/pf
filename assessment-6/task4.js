/*Scientists measure an object's mass in kilograms and its weight in newton.
 If you know the amount of mass that an object has, you can calculate its weight in newton with following formula:

Weight = mass * 9.8
Write a program that asks the user to enter an object's mass, and then calculates and displays its weight. If the object's 
weight is more than 1000 newton, display a message indicating it is too heavy.
 If the object's weight is less than 1000 display a message indicating object is too light.*/

 const prompt = require ("prompt-sync")();

 let objectsMass = prompt("Enter an objects mass :: ");
 let weight = objectsMass * 9.8;
 console.log(" Weight is :: ",weight);

 if( weight >= 1000)
 {
    console.log("The object is too heavy");
 }
 else 
 {
    console.log("The object is too light");
 }
