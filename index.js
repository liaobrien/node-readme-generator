// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
      {
            type: "input",
            message: "What is your GitHub username?",
            name: "name",
      },
      {
            type: "input",
            message: "What is your email address?",
            name: "email",
      },
      {
            type: "input",
            message: "What is your project's name?",
            name: "title",
      },
      {
            type: "input",
            message: "Please write a short description of your project.",
            name: "description",
      },
      {
            type: "list",
            message: "What kind of license should your project have?",
            name: "license",
            choices: ["MIT", "Apache2.0", "GPL3.0", "BSD3", "None"],
      },
      {
            type: "input",
            message: "What command should be run to install dependencies?",
            default: "npm i",
            name: "installCommand",
      },
      {
            type: "input",
            message: "What command should be run to run tests?",
            default: "npm test",
            name: "testCommand",
      },
      {
            type: "input",
            message: "What does the user need to know about using the repo?",
            name: "usage",
      },
      {
            type: "input",
            message: "What does the user need to know about contributing to the repo?",
            name: "contribute",
      },
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
      fs.writeFile(fileName, data, (err) => {
            err ? console.log(error) : console.log("Success!");
      })
}

// TODO: Create a function to initialize app
function init() {
      inquirer
            .prompt(questions)
            .then((answers) => {
                  writeToFile("README1.md", generateMarkdown(answers));
            })
}

// Function call to initialize app
init();
