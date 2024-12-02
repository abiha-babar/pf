/*A soft drink company recently surveyed 12,467 of its customers and found that approximately 14 percent of those surveyed purchase one or more energy drinks 
per week. Of those customers who purchase energy drinks, approximately 64 percent of them prefer citrus flavored energy drinks.
 Write a program that displays the following:

The approximate number of customers in the survey who purchase one or more energy drinks per week
The approximate number of customers in the survey who prefer citrus flavored energy drinks*/




let recentlySurveyed = 12467;
let  energyDrinks = 0.14;
let citrusDrinks = 0.64 ;

customersOfEnergyDrinks = recentlySurveyed * energyDrinks ;
customerOfFlavoredDrinks = customersOfEnergyDrinks * citrusDrinks;

console.log ("The approximate number of customers in the survey who purchase energy drinks :: ",customersOfEnergyDrinks);
console.log("The approximate number of customers in the survey who prefer citrus  drinks :: ", customerOfFlavoredDrinks);