/*The monthly payment on a loan may be calculated by the following formula.
 Rate is monthly interest rate, which is the annual interest rate divided by 12
 . (12% annual interest would be 1 percent monthly interest.) N is the number of payments and L is the amount of loan.
  Write a program that asks for these values and displays report similar to:

Loan Amount: Rs. 10000
Monthly Interest Rate: 1%
Number of Payments: 36
Monthly Payments: Rs. 332.14
Amount Paid Back: Rs. 11957.15
Interest Paid: Rs. 1957.15

*/

const prompt = require ("prompt-sync")();

let loan  =parseInt(prompt("Enter the Loan amount  ::  "));

let annualRate = parseFloat(prompt("Enter the annual interest rate :: "));

let payment =parseInt(prompt("Enter the number of payments :: "));

let rate = annualRate/ 12 / 100;
rate = rate * 100;

let monthlyPayments = (rate *(1 + rate)**payment / ((1 + rate)**payment - 1)) *loan ;
let amountPaidBack = monthlyPayments *  payment;
let interestPaidBack = amountPaidBack - loan ;

console.log("Loan Amount: Rs.",loan);
console.log("MOnthly Interest Rate :",rate,"%");
console.log("Number of Payments: ",payment);
console.log("Monthly Payments: Rs.",monthlyPayments);
console.log("Amount Paid Back: Rs.",amountPaidBack);
console.log("Interest Paid: Rs.",interestPaidBack);