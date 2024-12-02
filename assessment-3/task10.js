/*Rewrite the following if/else statements using conditional operator:

// Statement 1
if (x > y)
    max = x;
else
    max = y;

// Statement 2
if (age >= 18)
    status = "Adult";
else
    status = "Minor";

// Statement 3
if (score >= 60)
    result = "Pass";
else
    result = "Fail";
*/

x = 20;
y = 10;
let statement1 = x > y ?  x  :  y ;
console.log(statement1); 




age = 18;
let statement2 = age >= 18 ? "Adult": "Minor";
console.log(statement2);


score = 50;
let statement3 = score >= 60 ? "Pass": "Fail";
console.log(statement3);