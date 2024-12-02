/*Assuming there are no deposits other than the original investment, 
the balance in a saving account after one year may be calculated.
 Principal is the balance in the saving account, rate is the interest rate and T is the number of times interest 
 is compounded during year (T is 4 if the interest is compounded quarterly). Write a program that asks for the principal,
  the interest rate, and the number of times the interest is compounded. It should display report similar to:

Interest Rate: 4.25%
Time Compounded: 12
Principal: Rs. 1000
Interest: Rs. 43.34
Amounts in Savings: Rs. 1043.34

*/
const prompt = require ("prompt-sync")();

let interestRate =prompt("The Interest Rate ::  ");
interestRate = interestRate / 100.0;

let principal = prompt("The principal :: ");
 
let timess = prompt("Number of times the interest is compound :: ");

let amount = principal *( 1 + interestRate/timess)**timess;

let interest = amount - principal;

console.log ("Interest Rate :: ", interestRate);
console.log("Time compounded :: ", timess);
console.log("Principal :: ", principal);
console.log("Interest :: ", interest);
console.log("Amount in Savings :: ", amount);