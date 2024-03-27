#! /usr/bin/env node


import inquirer from "inquirer";
import chalk from "chalk";

let myBalance = 10000;
let myPin = 1255;

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "enter your Pin",
    type: "number",
  },
]);

if (pinAnswer.pin === myPin) {
  console.log(chalk.blue("Correct Pin Code !"));

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "please select option",
      type: "list",
      choices: ["withdraw", "check balance", "fast cash"],
    },
  ]);

  console.log(operationAns);

  if (operationAns.operation === "fast cash") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "select your amount",
        type: "list",
        choices: [500, 1000, 2000, 5000],
      },
    ]);

    myBalance -= amountAns.amount;

    console.log(chalk.blue`your remaining balance is: ${myBalance}`);
  }

  if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "Please enter your amount",
        type: "number",
      },
    ]);

    if (amountAns.amount <= myBalance) {
      myBalance -= amountAns.amount;
      console.log(chalk.blue`your remaining balance is: ${myBalance}`);
    } else {
      console.log(
        chalk.red("Sorry Your Balance is Insufficient for this transaction !")
      );
    }
  } else if (operationAns.operation === "check balance") {
    console.log(chalk.blueBright`your remaining balance is: ${myBalance}`);
  }
} else {
  console.log(chalk.bgRed("Incorrect Pin Code !"));
}
