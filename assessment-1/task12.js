/*Given the radius, in inches, and price of pizza, design an algorithm to find the price of pizza per square inch.*/
/*pricePerSquareInch = price / area .
PI = 3.141593
area = PI * radius * radius*/

const prompt = require("prompt-sync")();

let PI = 3.141593;
let price = prompt ( " Enter the price of the Pizza :: ");

let radius = prompt ( " Enter the value in radius :: ");
area = PI * radius * radius;

pricePerSquareInch = price / area ;
console.log(pricePerSquareInch);
