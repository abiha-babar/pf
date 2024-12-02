/*A movie theater only keeps 20 percent of the revenue earned from ticket sale.
 The remainder goes to the movie distributor. Write a prog ram that calculates a theater's
  gross and net box office profit for a night. The program should ask for:

Name of the movie
How many adult and child tickets were sold
If an adult is above sixty then a further 10 percent discount is offered
The price of adult ticket is Rs. 500 and for child is Rs. 250
The program should display report similar to:

Movie Name "Action"
Adult Tickets Sold 382
Child Ticket Sold 127
Adults Above 60 10
Gross Box Office Profit Rs.
Net Box Office Profit Rs.
Amount Paid to Distributor Rs.*/




const prompt = require ("prompt-sync")();

let movieName =   prompt("Enter the Name of the movie  :: ");
let adultTicket = prompt("Enter the Adult Tickets Sold :: ");
let childTicket = prompt("Enter the CHild Tickets Sold :: ");
let above60  =    prompt("Enter the number of adults above 60 ::  ");

priceOfAdultTicket = 500;
priceOfChildTicket = 250;
priceOfAbove60  = priceOfAdultTicket -  priceOfAdultTicket * 0.10;

revenueAbove60 = above60 * priceOfAbove60;

grossProfit = (priceOfChildTicket * childTicket) + (priceOfAdultTicket * adultTicket) + (priceOfAbove60 * above60);
netProfit = grossProfit * 0.2;
distributorAmount = grossProfit - netProfit;


console.log("Movie Name :: ",movieName);
console.log("Adult Tickets :: ",adultTicket);
console.log("Child Tickets :: ",childTicket);
console.log("Adult above 60 :: ",above60);
console.log("GROSS BOX OFFICE PROFIT :: ",grossProfit); 
console.log("NET BOX OFFICE PROFIT RS.  :: ",netProfit);
console.log("Amount Paid to Distributor Rs. :: ",distributorAmount); 