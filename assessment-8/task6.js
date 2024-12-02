/*Task-06 (Sum the geometric series)
Write a program that sums the first n items in a geometric series using while loop.
 User will input the n. use the following formula or use your previous knowledge.*/
 const prompt = require ("prompt-sync")();

let a = parseFloat(prompt("Enter the first term (a):"));
let r = parseFloat(prompt("Enter the common ratio (r):"));
let n = parseInt(prompt("Enter the number of terms (n):"));
 

let totalSum = 0;
let currentTerm = a;
let count = 0;
 
while (count < n) {
    totalSum += currentTerm;
    currentTerm *= r; 
    count++;  
}


console.log("The sum of series :: " , totalSum);
