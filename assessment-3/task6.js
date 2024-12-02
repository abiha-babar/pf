/*If you execute the following code, what it would display on screen if the user enters 5?
 If the user enters 15? What if user enters 30? What if the user enters -1?*/

const prompt = require("prompt-sync")();


let number = parseInt(prompt("Enter a number: "));
if (number < 10)
    console.log("Less than 10");
else if (number < 20)
    console.log("Less than 20");
else
    console.log("20 or more");