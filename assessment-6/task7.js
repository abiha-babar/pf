/*A shipping company charges the following rates:

Weight of package (in Kilograms)	Rate per 500 Kilometer Shipped
2 Kg or less	Rs. 50
Over 2 Kg but not more than 6 Kg	Rs. 100
Over 6 Kg but not more than 10 Kg	Rs. 150
Over 10 Kg but not more than 20 Kg	Rs. 200
Write a program that asks for the weight and the distance it is to be shipped, and then displays the charges.
 Do not accept the weights of less than 0 and more than 20. Do not accept the distance of less than 10 and more than 3000 kilometer.
 */

 const prompt = require("prompt-sync")();

 let weight = prompt ("Enter the weight of the package :: ");
 let distance = prompt("Enter the distance to be shipped :: ");

if ( weight <= 0 && weight >=20 || distance <=10 && distance >=3000)
{
    console.log("WEIGHT AND DISTANCE IS ACCEPTED ");
}
else{
    console.log("WEIGHT AND DISTANCE IS OUT OF RANGE ");
}

let rate;

if (weight <=2 )
{
    rate = 50;
    console.log("Rate Rs.",rate);
}
else if (weight > 2 && weight <=6)
{
    rate = 100;
    console.log("Rate Rs.",rate);
}
else if (weight > 6 && weight <=10)
{
    rate = 150;
    console.log("Rate Rs.",rate);
}
else if(weight > 10 && weight <= 20)
{
    rate = 200;
    console.log("Rate Rs.",rate);
}
else 
{
    console.log("Weight is more than 20 kg");
}



let ratePerKilometer = (distance / 500);
if (distance % 500 !== 0)
{
    ratePerKilometer +=1;
}
let totalCharge = ratePerKilometer * rate ;
console.log("Rate per 500 Kilometer Shipped :: ", totalCharge);