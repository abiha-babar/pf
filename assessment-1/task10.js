/*Design an algorithm to find the perimeter and area of rectangle. Formula used to find the solution are
Perimeter = 2 (length + width)
Area = length width*/
const prompt = require("prompt-sync")();
let lenght = prompt ("Enter the Lenght  :: ");
let width = prompt("Enter the Width :: ");
Perimeter = 2 *lenght + width;
console.log("The Perimeter of the rectangle is :: ",Perimeter);
Area = lenght * width ;
console.log("The Arae of the Rectangle is :: ",Area);