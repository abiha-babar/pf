/*A team is currently scoring with the run rate of 6.25 per over. 
The team has scored 188 in the 30 over while its 4 players are back in pavilion.
 Write a program that display projected score for next 5,10,15 and 20 overs if the 
 team continue to score with current run rate or with run rate of 7,8,9 and 10. 
 Display Score in the following format. Use while loop.

Overs bowled    6.25    7    8    9    10
Projected Score
In 35 Overs
In 40 Overs
In 45 Overs
In 50 Overs
*/
let currentScore = 188;
let currentOvers = 30;

let runRate = [6.25, 7, 8, 9, 10];
let overs = [35, 40, 45, 50];



let i = 0;
while (i < overs.length) {
    let calculateOver = overs[i];
    let output = "IN " + calculateOver + " Overs"; 

    let j = 0;
    while (j < runRate.length) {
        let runs = runRate[j]; 
        let additionalScore = calculateOver - currentOvers;
        let score = currentScore + (runs * additionalScore);

        output += "\t" + Math.round(score); 
        j++;
    }
    
    console.log("Score is :",output);
    i++;
}
