/*Write a program that works in the same fashion as a message composer in mobile phones, using the following keypad layout:

1       2       3
        ABC     DEF

4       5       6
GHI     JKL     MNO

7       8       9
PQRS    TUV     WXYZ

*       0       #
Program Requirements
Write a program that composes messages in the same fashion as using the above keypad. The program must:

Receive integer input
When user enters 2:
First press: outputs letter 'A'
Second press (quick): 'A' disappears, 'B' appears
Third press (quick): 'B' disappears, 'C' appears
To enter 'AA', press number '2' twice with a delay between presses
Delay must be as small as it is usually in mobile phones
To implement the timing functionality, use:

Date.now()
This function returns the current timestamp in milliseconds. You can compute the time difference between key presses by getting time at both key press events and test for a fixed time delay to determine whether the key presses are consecutive or not.

To clear the console output, you can use:

console.clear()
Similarly, implement the associated letters with numbers as shown in the keypad layout above.*/



