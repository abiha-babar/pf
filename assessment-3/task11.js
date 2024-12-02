/*The following statements are conditional expressions. Rewrite each with and if/else statement:

// Expression 1
let max = num1 > num2 ? num1 : num2;

// Expression 2
let status = age >= 21 ? "Adult" : "Minor";

// Expression 3
let fee = isMember ? 2.00 : 10.00;
*/
num1 = 2;
num2 = 4;

if (num1 > num2)
{
    max = num1;
}
else {
    max = num2;
}
console.log(max);

age= 23;

if (age >= 21)
{
    status = "Adult";
}
else 
{
    status = "Minor";
}
console.log(status);

let isMember = true;
if(isMember)
{
    fee = 2.00;
}
else 
{
    fee = 10.00;
}
console.log(fee.toFixed(2));