/*A palindrome is a number or a text phrase that reads the same backward as forward. 
For example, each of the following five-digit integers is a palindrome: 12321, 55555, 45554 and 11611.
 Write a program that reads in a five-digit integer and determines whether it's a palindrome. 
[Hint: Use the division and modulus operators to separate the number into its individual digits.]*/



const prompt = require ("prompt-sync")();

let number = prompt ("Enter the Five digits :: ");

if (number < 10000 && number > 99999)
{
    console.log("Invalid numbers.Enter five digits only! ");
}
else 
{
    digit1 =Math.floor( number / 10000);
    digit2 =Math.floor( (number % 10000) / 1000);
    digit3 =Math.floor( (number % 1000) / 100);
    digit4 =Math.floor( (number % 100) / 10);
    digit5 =Math.floor( number % 10);
}

if ( digit1 === digit5 && digit2 === digit4)
{
    console.log ("The number is palindrome :: ",number);
}
else 
{
    console.log("The number is not a palindrome :: ",number);
}