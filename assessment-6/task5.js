/*Write a program that asks the user to enter a number of seconds.

There are 60 seconds in a minute. If the number of seconds entered by the user is greater than or equals to 60, 
the program should display the number of minutes in that many seconds.
There are 3600 seconds in an hour. If the number of seconds entered by the user is greater than or equals to 3600, 
the program should display the number of hours in that many seconds.
There are 86400 seconds in a day. If the number of seconds entered by the user is greater than or equals to 86400,
 the program should display the number of days in that many seconds.*/

 const prompt = require("prompt-sync")();

 let numberOfSeconds = prompt("Enter a number of seconds :: ");

 if (numberOfSeconds >= 86400)
 {
    let days = Math.floor(numberOfSeconds/86400);
    console.log("Number of day in that many seconds is :: ",days);
 }
else if(numberOfSeconds >= 3600)
{
    let hours =Math.floor(numberOfSeconds/3600);
    console.log("Number of hours in that many seconds is :: ",hours);
}
else if(numberOfSeconds >= 60)
{
    let minutes =Math.floor( numberOfSeconds /60);
    console.log("Number of minutes in that many seconds is :: ",minutes);
}
else
{
    console.log("The seconds you enter is less than 60 ");
}