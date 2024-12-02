/*The South Punjab sales division of a company generates 62 percent of total sales. Based on that percentage, 
write a program that will predict how much the South Punjab division will
 generate if the company has Rs. 680 million in sales this year.*/



totalSales = 680;
southPunjabPercentage = 62;
southPunjabSales = (southPunjabPercentage / 100) * totalSales;
console.log(southPunjabSales);