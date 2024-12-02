/*Last month Kathryn purchased some stocks in ACME Software. Here are the details of the purchase:

The number of shares that Kathryn purchased was 1000
When Kathryn purchased the stock, she paid Rs. 32.87 per share
She also paid broker a commission that amounted 2% of the amount she paid for the stock
Two weeks later Kathryn sold the stock. Here are the details of the sale:

The number of shares that Kathryn sold was 1000
She sold the stock for Rs.33.92 per share
She paid her stock broker another commission that amounted to 2% of the amount she received for the stock
Write a program that displays the following information:

The amount of money Kathryn paid for the stock
The amount of commission Kathryn paid her broker when she bought the stock
The amount that Kathryn sold the stock for
The amount of commission Kathryn paid her broker when she sold the stock
Display the amount of profit that Kathryn made after selling her stock and paying the two commissions to her broker.
 (If the amount is in negative then it means Kathryn lost money on transaction)*/


let purchasedShares = 1000; 
let perSharePurchasePrice = 32.87; 
let perShareSalePrice = 33.92; 
let commissionPercentage = 2 / 100; 

console.log("Purchased Shares: ", purchasedShares);
console.log("Price Per Share (Purchase): ", perSharePurchasePrice);
console.log("Sold Shares: ", purchasedShares);
console.log("Price Per Share (Sale): ", perShareSalePrice);

let totalPurchaseAmount = purchasedShares * perSharePurchasePrice;
console.log("Total Purchase Amount: Rs. ", totalPurchaseAmount);

let brokerCommissionPurchase = totalPurchaseAmount * commissionPercentage;
console.log("Broker Commission (Purchase): Rs. ", brokerCommissionPurchase);

let totalSaleAmount = purchasedShares * perShareSalePrice;
console.log("Total Sale Amount: Rs. ", totalSaleAmount);

let brokerCommissionSale = totalSaleAmount * commissionPercentage;
console.log("Broker Commission (Sale): Rs. ", brokerCommissionSale);


let profitOrLoss = totalSaleAmount - totalPurchaseAmount - brokerCommissionPurchase - brokerCommissionSale;
profitOrLoss = profitOrLoss.toFixed(2);
console.log("Profit or Loss After Paying Commissions: Rs. ", profitOrLoss);
