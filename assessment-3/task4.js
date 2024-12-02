/*Write an if statement that performs the following logic:

if the variable sales is greater than 50,000 then assign 0.25 
to the variable commissionRate and assign 250 to the variable bonus.*/

const prompt = require("prompt-sync")();


let sales = prompt("Enter the Sales :: ");
let comissionRate = 0;
let variableBonus =0 ;


if (sales >= 50000)
{
  comissionRate = 0.25;
  variableBonus = 250;
  console.log ("SALES IS GREATER THAN 50000");
  console.log ("Commission Rate :: ", comissionRate);
  console.log ("VariableBonus :: ",variableBonus);

}
else {
    console.log("Sales is Smaller than 50000")
}