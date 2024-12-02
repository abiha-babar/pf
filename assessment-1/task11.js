/*Design an algorithm to calculate the sales tax and price of an item sold in a particular state. The sales tax is calculated as follows. The sate's portion of sales tax is 4% and the city's portion of sales tax is 1.5%.
 if cost of item is more than 50000 then a luxury tax of 10% is applicable.*/
const prompt = require("prompt-sync")();
 let salesTax =0;
 let priceOfItems = prompt("Enter the Price of Item :: ");

if (priceOfItems <= 50000)
{
    salesTax = 0;
    console.log("The cost of item is less than 50000 No tax applicable ");
}
else 
{
    console.log("The cost of Item is more than 50000 SO 10% tax applicable :: ");
    salesTax = priceOfItems / 10;
    console.log (salesTax);

}