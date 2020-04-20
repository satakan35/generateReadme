const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const api = require("./utils/api");
const generateMarkdown = require("./utils/generateMarkdown");
const questions = [
    //edit name and message for other questions
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },
    {
        type: "input",
        name: "URL to Project",
        message: "What is the URL to your project?"
    },
    {
        type: "input",
        name: "title",
        message: "What is your project title?"
    },
    {
        type: "input",
        name: "description",
        message: "What is your project description?"
    },
    {
        type: "input",
        name: "password",
        message: "What is your password?"
    },
    {
        type: "input",
        name: "usage",
        message: "What is your usage command?"
    },
    {
        type: "input",
        name: "licence",
        message: "What is your licences?"
    },
    {
        type: "input",
        name: "tests",
        message: "What is your test command?"
    },
    {
        type: "input",
        name: "contributes",
        message: "What is your contribution?"
    }    
];

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        writeToFile("README.md", generateMarkdown({...inquirerResponses}));
    })
}

init();

/*
1) rewrite questions
2) Look for bugs
3) run in the terminal - npm i
4) run in the terminal - node index.js
*/

/*
We prompt the user to answer questions
We then take those reponses and use them to generate markdown via generateMarkdown
We then use that markdown to write our readme file
*/