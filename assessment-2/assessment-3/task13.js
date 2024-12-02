
/*Write and if statement that prints the message "The number is valid"
 if the variable temperature is within range -50 through 150.
 */

const prompt = require("prompt-sync")();
let temperature = prompt ("ENTER THE TEMPERATURE  ::: ");

 if (temperature >= -50 && temperature <= 150)
 {
    console.log("The number is valid");
 }
 else 
 {
    console.log("NOT IN RANGE ");
 }