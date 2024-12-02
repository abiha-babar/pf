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
Blank Coordinate should be marked with a '-'
d) Use a switch statement within a while loop to display Menu options:

Update treasurer coordinates (row/column)
Shift X left or right
Shift X up or down
Exit Program
e) If 1 is selected

Request row and column coordinate information
Validate input with an error loop (similar to step b)
Display the updated map and menu option
f) If 2 is selected

Request a (-/+) horizontal offset. Negative right, Positive Left
Validate proposed location with an error loop. If location cannot exist on the current map, output and error and repeat request
Display the updated map and menu
g) If 3 is selected

Request a (-/+) Vertical offset. Negative up, Positive down
Validate proposed location with an error loop. If location cannot exist on the current map, output and error and repeat request
Display the updated map and menu
h) If 4 is selected

Exit the menu while loop and output 'Exiting Program'
*/