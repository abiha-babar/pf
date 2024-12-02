/*A bag of cookies holds 40 cookies. The calories information on the bag claims that there are 10 "servings" in the
 bag and that a serving equals to 300 calories.
 Write a program that asks the user to input how many cookies he or she actually 
 ate and then report how many total calories were consumed.*/
const prompt = require("prompt-sync")();

 bagOfCookies = 40;
 totalCalories = 300;
 perserving = 10;


const caloriesPerCookie = totalCalories / bagOfCookies;

let askUser = prompt("HOW MANY COOKIES YOU WANT TO ATE :: ");
askUser = parseInt(askUser);

calculateCalories = askUser * caloriesPerCookie;
console.log("The Cookies you want to eat have ",calculateCalories,"Calories");