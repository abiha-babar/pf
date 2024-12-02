/*
A country club, Which currently charges Rs. 2500 per year for a membership, has announced
 it will increase its membership 4% each year for the next six years.
 Write a program that uses while loop to display projected rates for the next six years.*/

currentlyCharge = 2500;

years =6;
year = 1;
increasePer = 0.04;

 while (year <= years)
 {
    currentlyCharge +=Math.floor( currentlyCharge * 0.04);
    console.log("The current Year is :: ",year, "And the charge is :: ",currentlyCharge);
    year ++;
 }

