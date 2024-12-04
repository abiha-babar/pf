/*Write a program that generate two random numbers and ask the users to write the sum 
of two numbers. You have to write a program that uses a do while loop to allow user to test his/her
 addition skills as long as he/she wants to. When the loop end the program must tell the user that
  how many answers were correct out of asked question.*/

const prompt = require("prompt-sync")();

let correctAnswer = 0;
let totalQuestion = 0;
let continueTesting;

do {
    let num1 = Math.floor(Math.random() * 100) + 1;
    let num2 = Math.floor(Math.random() * 100) + 1;

    let userAnswer = prompt(`What is the sum of ${num1} and ${num2}? `);

    if (parseInt(userAnswer) === num1 + num2) {
        console.log("Correct!");
        correctAnswer++;
    } else {
        console.log(`Wrong. The correct answer is ${num1 + num2}.`);
    }

    totalQuestion++;

    continueTesting = prompt("Do you want to try another question? (Y/N): ");

} while (continueTesting === 'y');  


console.log(`You answered ${correctAnswer} out of ${totalQuestion} questions correctly!`);
