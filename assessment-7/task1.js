/*Write a program that simulates a n X n treasurer map:

a) Request a map size between 5 and 9

Verify size with a validation loop
If size is incorrect, output an error and request new values
b) Request a starting row / Column for the treasurer location on map

Validate row and column to insert that they are within borders of the map
If values are incorrect, output an error and request new values
c) Use a nested loop to display the map (see output example)

X and Y labels should be displayed
Treasurer Location should be marked with an 'X'
Blank Coordinate should be marked with a '-'*/

const prompt = require ("prompt-sync")();

let mapSizeX = parseInt(prompt("Enter the number of rows ::"));
let mapSizeY = parseInt(prompt("Enter the number of columns :: "));

if(mapSizeX <= 5 && mapSizeY <= 9)
{
    console.log("Validation passed.");
}
else{
    console.log("Validation Failed.Enter the number between 5 and 9.")
    let mapSizeX = parseInt(prompt("Enter the number of rows ::"));
    let mapSizeY = parseInt(prompt("Enter the number of columns :: ")); 
}
