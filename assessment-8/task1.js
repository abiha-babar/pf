/*Write a program to reveres any given integer number.

Input: 12345
Revers: 54321*/

const prompt = require ('prompt-sync')();

let number = prompt("Enter the number that you want  to reverse :: ");

let reverse = number.toString().split('').reverse().join('');
console.log("The reverse number is :: ",reverse);

