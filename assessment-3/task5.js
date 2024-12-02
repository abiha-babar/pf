/*Write an if/else statement that assigns 0.10 to the commisionRate unless 
sales is greater than or equals to 50,000, in which case it assigns 0.20 to commissionRate.*/
let commisionRate = 0;
let sales = 4000;
if (sales < 50000 )
{
    commisionRate = 0.10;
}
else if (sales >= 50000)
{
    commisionRate = 0.20;
} 
console.log(commisionRate.toFixed(2));




