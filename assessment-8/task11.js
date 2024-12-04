/*Write a program that calculates the occupancy rate for a hotel.
 The program should start by asking the user how many floors the hotel has.
  A loop should then iterate one for each floor. In each iteration, the loop 
  should ask the user for the number of rooms on the floor and how many of them are occupied.
   After all the iterations, the program should display how many rooms the hotel has and the 
   percentage of rooms that are occupied.

Input validation:

The program should not accept the number less than 1 for the number of floors
Do not accept a number less than 10 for number of rooms on each floor
*/
const prompt = require("prompt-sync")();
let hotel;
do {
    hotel = parseInt(prompt("How many floors does the hotel have? :: "));
    if (hotel < 1) {
        console.log("The hotel must have at least 1 floor!");
    }
} while (hotel < 1);
let numberOfRooms = 0;
let roomsOccupied = 0;

for (let floor = 1; floor <= hotel; floor++) {
    let rooms;
    do {
        rooms = parseInt(prompt("Enter the number of rooms on floor :: ",floor));
        if (rooms < 10) {
            console.log("Rooms cannot be less than 10 on a floor!");
        }
    } while (rooms < 10);

    let occupied;
    do {
        occupied = parseInt(prompt("Enter the number of rooms that are occupied on floor :: ",floor))
        if (occupied < 0 || occupied > rooms) {
            console.log("Occupied rooms cannot be less than 0 or more than the number of rooms on this floor!");
        }
    } while (occupied < 0 || occupied > rooms);

    numberOfRooms += rooms;
    roomsOccupied += occupied;
}


let occupancyRate = (roomsOccupied / numberOfRooms) * 100;


console.log("\nHotel Occupancy Summary:");
console.log("Total Rooms in the Hotel:", numberOfRooms);
console.log("Rooms that are Occupied:", roomsOccupied);
console.log("Percentage of Rooms that are Occupied:", occupancyRate.toFixed(2) + "%");
