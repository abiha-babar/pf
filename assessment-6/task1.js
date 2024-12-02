/*Write a program that asks the user to enter a month, day and year in numeric form.
 The program should then determine whether the month times the day is equal to year.
 If so, it should display that date is magic otherwise date is not magic.*/

 const prompt = require("prompt-sync")();

 let month = parseInt(prompt ("Enter a month :: "));
 let day = parseInt( prompt ("Enter a day :: "));
 let year =parseInt( prompt ("Enter a year :: "));

 
 if ( month * day === year)
 {
    console.log("Date is magic ");
 }
 else 
 {
    console.log("Date is not magic");
 }