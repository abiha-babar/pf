/*Kathryn bought 600 shares of stock at a price of Rs. 21.77 per share. 

She must pay her stock broker a 2 percent commission for the transaction. 
Write a program that calculates and displays the following:

The amount paid for the stock alone (without the commission)
The amount of the commission
The total amount paid (for the stock plus the commission)*/


let stocksShare = 600;
let stockPrice = 21.77;
let commissionValue = 0.02;
stockAlone =stocksShare * stockPrice ;
console.log ("Amount paid for the stock alone :: ", stockAlone );

commission = stockAlone * commissionValue ;
console.log ("The Comission Value :: ",commission);
totalCost = stockAlone + commission;
console.log ("Amount paid with commission :: ", totalCost);