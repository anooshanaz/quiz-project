import inquirer from "inquirer";
import chalk from "chalk";
let answer = await inquirer.prompt([
    {
        name: "Question1",
        type: "list",
        message: chalk.greenBright("Typescript is the superset of"),
        choices: ["A:Javascript", "B:HTML", "C:CSS"],
    }
]);
if (answer.Question1 === "A:Javascript") {
    console.log("true");
}
else {
    console.log("false");
}
;
let answer1 = await inquirer.prompt([
    {
        name: "Question2",
        type: "list",
        message: chalk.greenBright("support static typing"),
        choices: ["A:c++", "B:ts", "C:js"],
    }
]);
if (answer1.Question2 === "B:ts") {
    console.log("true");
}
else {
    console.log("false");
}
;
let answer2 = await inquirer.prompt([
    {
        name: "Question3",
        type: "list",
        message: chalk.greenBright("is compile language"),
        choices: ["A:html", "B:js", "C:ts"],
    }
]);
if (answer2.Question3 === "C:ts") {
    console.log("true");
}
else {
    console.log("false");
}
;
let answer3 = await inquirer.prompt([
    {
        name: "Question4",
        type: "list",
        message: chalk.greenBright("tsc developed and maintained by"),
        choices: ["A:microsoft", "B:google", "C:meta"],
    }
]);
if (answer3.Question4 === "A:microsoft") {
    console.log("true");
}
else {
    console.log("false");
}
let answer4 = await inquirer.prompt([
    {
        name: "Question5",
        type: "list",
        message: chalk.greenBright("string,boolean and void support"),
        choices: ["A:css", "B:js", "C:ts"],
    }
]);
if (answer4.Question5 === "C:ts") {
    console.log("true");
}
else {
    console.log("false");
}
;
let answer5 = await inquirer.prompt([
    {
        name: "Question6",
        type: "list",
        message: chalk.greenBright("What is the primary purpose of the TypeScript compiler (tsc)"),
        choices: ["A:To compile TypeScript code into machine code",
            "B:To compile TypeScript code into JavaScript",
            "C:To convert TypeScript code into HTML"],
    }
]);
if (answer5.Question6 === "B:To compile TypeScript code into JavaScript") {
    console.log("true");
}
else {
    console.log("false");
}
;
let answer6 = await inquirer.prompt([
    {
        name: "Question7",
        type: "list",
        message: chalk.greenBright("Which of the following is a valid TypeScript data type?"),
        choices: ["A: integer",
            "B: boolean",
            "C: decimal"
        ]
    }
]);
if (answer6.Question7 === "B: boolean") {
    console.log("true");
}
else {
    console.log("false");
}
;
let answer7 = await inquirer.prompt([
    {
        name: "Question8",
        type: "list",
        message: "Which of the following is not a primitive type in TypeScript?",
        choices: [
            "A: string",
            "B: number",
            "C: object"
        ]
    }
]);
if (answer7.Question8 === "C: object") {
    console.log("true");
}
else {
    console.log("false");
}
;
let answer8 = await inquirer.prompt([
    {
        name: "Question9",
        type: "list",
        message: "What is the output type of the following TypeScript code? `let x: number = 5;`",
        choices: [
            "A: string",
            "B: boolean",
            "C: number",
        ]
    }
]);
if (answer8.Question9 === "C: number") {
    console.log("true");
}
else {
    console.log("false");
}
;
let answer9 = await inquirer.prompt([{
        name: "Question10",
        type: "list",
        message: "Which type can hold any value in TypeScript?",
        choices: [
            "A: any",
            "B: void",
            "C: unknown",
        ]
    }]);
if (answer9.Question10 === "A: any") {
    console.log("true");
}
else {
    console.log("false");
}
;
