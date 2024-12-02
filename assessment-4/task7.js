/*Write a program which accepts amount as integer and display total number of
 Notes of Rs. 500, 100, 50, 20, 10, 5 and 1. For example, when user enter a number, 575, the results would be like this:

500: 1
100: 0
50: 1
20: 1
10: 0
5: 1
1: 0
*/

const prompt = require("prompt-sync")();

let amount =parseInt(prompt("Enter the Amount :: "));

// SOLUTION 1

// let note500 = parseInt(amount / 500);
// amount = amount % 500;


// let note100 = parseInt(amount / 100);
// amount = amount % 100;
r

// let note50 =parseInt( amount / 50);
// amount = amount % 50;

// let note20=parseInt( amount / 20);
// amount = amount % 20;

// let note10 = parseInt(amount / 10);
// amount = amount % 10;

// let note5 =parseInt(amount / 5);
// amount = amount % 5;

// let note1 =parseInt(amount / 1);
// amount = amount % 1;

// console.log ("500 : ",note500);
// console.log ("100 : ",note100);
// console.log ("50 : ",note50);
// console.log ("20 : ",note20);
// console.log ("10 : ",note10);
// console.log ("5 : ",note5);
// console.log ("1 : ",note1);

// SOLUTION 2

const currency = {500 : 0 , 100: 0, 50: 0,20: 0, 10:0 , 5: 0, 1:0};

currency['500'] = parseInt(amount / 500);
amount = amount % 500;


currency['100'] =parseInt( amount / 100);
amount = amount % 100;


currency['50'] =parseInt( amount / 50);
amount = amount % 50;


currency['20'] = parseInt(amount / 20);
amount = amount % 20;


currency['10'] = parseInt(amount / 10);
amount = amount % 10;


currency['5'] = parseInt(amount / 5);
amount = amount % 5;


currency['1'] = parseInt(amount / 1);
amount = amount % 1;

console.log(currency);