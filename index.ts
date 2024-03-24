#! /usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
//1 computer 'll generate a number
// 2. user input for guessing number
// 3. compare user input with computer generated number & show result


//const randomNumber = Math.floor(Math.random() * 6+1);
const randomNumber = 9
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: chalk.green('Please guess a number 1 to 9'),
    }
]);
if(answers.userGuessedNumber === randomNumber) {
console.log(chalk.yellowBright('Congratulations! You guessed right number.'));
} else {
    console.log(chalk.redBright('Sorry! you guessed wrong number. '));
};

