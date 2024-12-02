/*Develop a program that will determine whether a department-store customer has exceeded the credit limit on a charge account.
 For each customer, the following facts are available: a) Account number (an integer) b) Balance at the beginning of the month
 c) Total of all items charged by this customer this month d) Total of all credits applied to this customer's account this month
  e) Allowed credit limit

The program should input each of these facts, calculate the new balance (= beginning balance + charges – credits)
 and determine whether the new balance exceeds the customer's credit limit. For those customers whose credit limit is exceeded, 
 the program should display the customer's account number, credit limit, new balance and the message "Credit Limit Exceeded."*/

const prompt = require ("prompt-sync")();

 let accountNumber = parseInt( prompt ("Enter the Account Number ::  "));
 let beginningBalance = parseFloat(prompt ("Enter the balance at the beginning of the month :: "));
 let charges = parseFloat (prompt ("Enter the all items charged by this customer this month :: "));
 let credits = parseFloat( prompt ("Enter the total of all credits applied :: "));
 let limit =  parseFloat(prompt ("Enter the Allowed credit limit :: "));
 
 
 calculateNewBalance = beginningBalance + charges - credits ;

 
 if( calculateNewBalance > limit )
{      
    console.log("Account Number :: ",accountNumber);
    console.log("Credit Limit :: ",limit);
    console.log("New Balance :: ",calculateNewBalance);
    console.log("Credit Limit Exceeded ");
 }
 else 
 {
    console.log("Credit limit is within the allowed range.");
 }