/*Write a program that calculates and displays a person's Body Mass Index (BMI).
 The BMI is often used to determine whether a person with sedentary lifestyle is overweight or underweight for their height.
  A person's BMI is calculated with following formula:

BMI = weight * 703 / height²
Where weight is measured in pounds and height is measured in inches.
 The program should display a message indicating whether the person has optimal weight, is underweight, or is overweight.
  A sedentary person's weight is considered to be optimal if their BMI is between 18.5 and 25. If the BMI is less than 18.5, 
  the person is considered to be underweight. If the BMI value is greater than 25 then the person is overweight.*/

const prompt = require("prompt-sync")();

let weight = parseFloat(prompt ("Enter the weight :: "));
let height =parseFloat(prompt("Enter the height :: "));

BMI = ( weight * 703 )/( height*height);
console.log(BMI);

if (BMI >=18.5 && BMI <=25)
{
  console.log("A sedentary person's weight is considered to be optimal ");
}
else if (BMI < 18.5)
{
  console.log("Person is UNDERWEIGHT ");
}
else if (BMI > 25)
{
  console.log("Person is OVERWEIGHT ");
}