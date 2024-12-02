/*A bank charges Rs. 50 per month plus the following cheque fees for a commercial checking account:

Rs. 10 each for fewer than 20 cheques
Rs. 08 each for 20-39 cheques
Rs. 06 each for 40 to 59 cheques
Rs. 04 each for 60 or more cheques
The bank also charges an extra Rs. 100 if the balance of the account falls below Rs. 15000 (Before any cheque fee applied).
 Write a program that asks for the beginning balance and number of cheques written. Compute and displays the bank service fee for the month.

Input Validation: Do not accept a negative value for the number of cheques written. 
If a negative value is given for beginning balance, display an urgent message that an account is overdrawn. 
If after applying service charges the beginning balance becomes negative, display*/

/*const prompt = require ("prompt-sync")();


let beginningBalance = prompt ("Enter the Beginning  balance :: ");
let numberOfCheques = prompt("Enter the number of cheques :: ");

if (numberOfCheques < 0)
{
    console.log("Negative Value not accepted ");
}
else if (beginningBalance < 0)
{
    
    console.log("Account is overdrawn ");
}
else 
{
    chargeMonthly = 50;
    chequeFees = 0;
    if(numberOfCheques < 20)
    {
        chequeFees = numberOfCheques * 10;
    }
    else if (numberOfCheques >= 20 && numberOfCheques <=39)
    {
        chequeFees = numberOfCheques * 8;
    }
    else if (numberOfCheques >=40 && numberOfCheques <= 59 )
    {
        chequeFees = numberOfCheques * 6;
    }
    else
    {
        chequeFees = numberOfCheques *4;
    }

}
