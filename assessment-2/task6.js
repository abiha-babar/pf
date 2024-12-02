/*Write a program that computes the tax and tip on a restaurant bill 
for a patron with a Rs. 4450 meal charge. The tax should be 6.75 percent of the meal cost.
 The tip should be 15 percent of the total after adding the tax. Display the meal cost, tax amount, tip amount, and total bill on the screen.*/



let mealCost = 4450;
console.log("MEAL COST :: ",mealCost);
taxRate = 6.75 / 100;
let taxAmount = mealCost * taxRate;
console.log("TAX AMOUNT :: ",taxAmount);
totalAfterTax = mealCost * taxAmount 
let tipRate = 15 / 100;
let tipAmount = totalAfterTax * tipRate;
console.log("TIP AMOUNT :: ",tipAmount);
totalBill = totalAfterTax + tipAmount;
console.log ("TOTAL BILL :: ",totalBill);
