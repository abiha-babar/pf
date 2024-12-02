/*Write a program that displays the following menu:

1. Calculate the area of a circle
2. Calculate the area of a Rectangle
3. Calculate the Area of a Triangle
4. Calculate the area of a Cylinder
5. Calculate the area of Trapezoid
6. Quit
If the user enters 1, the program should ask for the radius of the circle and then display its area. Use the following formula:

Area = π r² where π = 3.14159
If the user enters 2, the program should ask for length and width of rectangle and display the area of rectangle using following formula:

Area = length * width
If the user enters 3, the program should ask for the length of triangle's base, and its height, and then display its area. Use the following formula:

Area = base * height * 0.5
If the user enters 4, the program should ask for the height and radius of the cylinder and display the area of cylinder using following formula:

Area = 2 * π * r² + h (2 * π * r)
If user enters 5, the program should ask for base a and base b and height h and compute the area of Trapezoid using the following formula:

Area = h * ((a + b) / 2)
If the user enters 6, the program should end.

Input Validation: Display an error message when user enters a number outside the range of 1 through 6 when selecting an item from the menu.
 Do not accept negative values for the circle's radius, the rectangle's length or width, or triangle's and Trapezoid's base or height.*/
 

const prompt = require ("prompt-sync")();
console.log("1. Calculate the area of a circle ");
console.log("2. Calculate the area of a Rectangle");
console.log("3. Calculate the Area of a Triangle");
console.log("4. Calculate the area of a Cylinder");
console.log("5. Calculate the area of Trapezoid");
console.log("6. Quit");

let enter =parseInt( prompt("Enter the option you want :: "));
if(enter > 1 && enter < 6 )
{
    console.log("Enter right value!");
}
else
{
    console.log("Enter the value within the range  ");
}
if( enter === 1)
{
    let radius =parseFloat(prompt("Enter the radius of a circle :: "));
    let area = Math.floor(3.14159 * (radius)**2);
    console.log("The area of a Circle is :: ",area); 
}
else if (enter === 2)
{
    let length =parseFloat( prompt ("Enter the lenght of the rectangle :: "));
    let width = parseFloat(prompt("Enter the width of the rectangle :: "));
    let area = Math.floor(length * width);
    console.log("The area of the rectangle is :: ",area);
}
else if (enter === 3)
{
    let base = parseFloat(prompt ("Enter the lenght of triangle base ::"));
    let height = parseFloat(prompt ("Enter the height of the triangle :: "));
    let area =Math.floor(( base * height )* 0.5);
    console.log("the Area of a Triangle ::  ",area);
}
else if (enter === 4)
{
    let height = parseFloat(prompt("Enter the height of the cylinder :: "));
    let radius = parseFloat(prompt("Enter the radius of the cylinder ::"));
    let area =Math.floor( 2 * 3.14159 * radius**2 + height (2 * 3.14159 * radius));
    console.log("the Area of a Cylinder ::",area);

}
else if (enter === 5)
{
    let baseA = prompt("Enter the Base A ::");
    let baseB = prompt("Enter the Base B ::");
    let height = prompt("Enter the height of Trapezoid :: ");
    let area = Math.floor(height *((baseA + baseB) / 2)); 
    console.log(" Calculate the area of Trapezoid ::",area);
}
else 
{
    console.log("QUIT");
}