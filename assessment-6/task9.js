/*The salespeople each receive $200 per week plus 9% of their gross sales for that week. 
For example, a salesperson who sells $5000 worth of chemicals in a week receives $200 plus 9% of $5000, or a total of $650.
 Develop a program that inputs three salesperson's gross sales for last week and calculates and displays each salesperson's earnings.
 You also have to compute average, min and max sales and print it as summary. The value of sales must not be negative.*/


const prompt = require ("prompt-sync")();

let salesperson1 = prompt("Input 1st salesperson gross sales for last week :: ");
let salesperson2 = prompt("Input 2nd salesperson gross sales for last week :: ");
let salesperson3 = prompt("Input 3rd salesperson gross sales for last week :: ");

if (salesperson1 < 0 || salesperson2 < 0 || salesperson3 <0)
{
    console.log("Values cannot be negative ");
}
else 
{
    salary = 200;
    commision = 0.09;

    salary1 = salary + (salesperson1 * commision);
    console.log("1st Salespersons  earnings :: ",salary1);
    salary2 = salary + (salesperson2 * commision);
    console.log("2nd Salespersons  earnings :: ",salary2);
    salary3 = salary + (salesperson3 * commision);
    console.log("3rd Salespersons  earnings :: ",salary3);
    

    let totalSum = salary1 + salary2 + salary3;
    average = totalSum /3; 
    console.log("The average is :: ",average);
    let min = Math.min (salesperson1 , salesperson2, salesperson3);
    console.log("Min Sales :: ",min);
    let max = Math.max (salesperson1, salesperson2,salesperson3); 
    console.log("Max sales :: ",max);
}



