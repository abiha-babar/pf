/*Write a program to sum of digits of any given integer number.

Input: 459
Sum: 18
*/
const prompt = require ("prompt-sync")();


let digits = prompt ("Enter the number of digits you want to sum :: ");

function sumofDigits(digits){
    let sum = 0;
while (digits > 0)
 {
    sum += digits % 10;
    digits =Math.floor(digits / 10); 
}
return sum;
}
let result = sumofDigits(digits);
console.log("The sum of the digits is :: ",result);