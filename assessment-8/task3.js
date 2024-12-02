/*Task-03 (Denomination)
Change the Lab-task-05 of Lab-02 to find denomination in given amount.
 Use the same scenario and implement the task using while loop.
 */

/*
 Write a program which accepts amount as integer and display total number of Notes of Rs. 500, 100, 50, 20, 10, 5 and 1.
  For example, when user enter a number, 575, the results would be like this:

500: 1
100: 0
50: 1
20: 1
10: 0
5: 1
1: 0
*/


const prompt = require('prompt-sync')();

let amount = parseInt(prompt("Enter the amount :: "));
let notes = [500, 100, 50, 20, 10, 5, 1];

let i = 0;

while (amount > 0 && i <= notes.length)
{
  let count = Math.floor(amount / notes[i]);
  console.log (notes[i],":",count);

  amount = amount % notes[i];
  i++;
}