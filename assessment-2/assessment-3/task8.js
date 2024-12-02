/*The following code is used in a book store program to determine how many discount coupons a customer gets.
 What are the number of coupons if a customer purchase 1,3,4,5,7 or 10 books.*/

let books = 5;

if (books >= 1 && books < 3)
    coupons = 1;
else if (books >= 3 && books < 5)
    coupons = 2;
else if (books >= 5)
    coupons = 3;
else
    coupons = 0;
console.log(coupons);

/*
For 1 book-----> Coupons =1; 
FOr 3 books ---->Coupons = 2;
For 4 books ---->Coupons = 2;
For 5 books ---->Coupons= 3;
For 7 books ---->Coupons = 3;
For 10 Books---->Coupons = 3;
*/ 