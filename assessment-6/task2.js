/*The area of rectangle is the rectangle's length times its width. 
Write a program that asks for the length and width of two rectangles.
 The program should tell the user which rectangle has the greater area or if the areas are same.*/


const prompt = require("prompt-sync")();

let lenght1 = parseInt(prompt("Enter the lenght of rectangle :: "));
let width1 = parseInt(prompt("Enter the width of rectangle :: "));
let lenght2 = parseInt(prompt("Enter the lenght of rectangle :: "));
let width2 = parseInt(prompt("Enter the width of rectangle :: "));
area1 = lenght1 * width1 ;
area2 = lenght2 * width2 ;

if(area1 >= area2 )
{
    console.log("Rectangle1 has the greater area or Equal to area2 ");
}
else{
    console.log("Rectangle2 is greater ");
}