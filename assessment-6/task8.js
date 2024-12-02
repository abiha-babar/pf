/*Write a program that asks for the number of calories and fat grams in a food.
 The program should display the percentage of calories that come from fat.
  If the calories from fat are less than 30% of the total calories of the food,
 it should also display a message indicating that the food is low in fat.

One gram of fat has 9 calories, so:

Calories from fat = fat grams * 9
The percentage of calories from fat can be calculated as:

Calories from fat divided by total calories
Input Validation: Make sure the number of calories and fat grams are not less than 0.
 Also, the number of calories from fat cannot be greater than the total number of calories.
  If that happens, display an error message indicating either the calories or fat grams were incorrectly entered.*/

const prompt = require("prompt-sync")();

let numberOfCalories = prompt("Enter the number of calories :: ");

let fatGrams = prompt ("Enter the FatGrams in a food ::  ");
let caloriesfromfat ;
let percentageFatCalories;

if(numberOfCalories < 0 ||  fatGrams < 0)
{
    console.log("Make sure the number of calories and fat grams are not less than 0.");
}
else {
     caloriesfromfat = fatGrams * 9;
}

    if(caloriesfromfat > numberOfCalories)
    {
        console.log("calories or fat grams were incorrectly entered.");
    }
    else{
        percentageFatCalories = (caloriesfromfat / numberOfCalories) * 100 ;
        console.log("CALORIES IN PERCENTAGE :: ",percentageFatCalories,"%");
    }

        if(percentageFatCalories < 30)
        {
            console.log("Food is low in fat ");
        }