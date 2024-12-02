/*Assume variable angle1 and angle2 holds angles in radians.
 Write a program that adds the sine of angle1 to cosine of angle2, and
  stores the result in variable x.*/

const prompt = require("prompt-sync")();


let angle1 = prompt("Enter the angle1 value ::");
let angle2 = prompt("Enter the angle2 value :: ");  

x = Math.sin(angle1) + Math.cos(angle2);
console.log(x);