#! /usr/bin/env node

import inquirer from "inquirer";
//1 computer 'll generate a number
// 2. user input for guessing number
// 3. compare user input with computer generated number & show result
const randomNumber = Math.floor(Math.random() * 6+1);

const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number:",
    }
]);
if(answers.userGuessedNumber === randomNumber) {
console.log("Congratulations! You guessed right number.");
} else {
    console.log("Sorry! you guessed wrong number.");
};

