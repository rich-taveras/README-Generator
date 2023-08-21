
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const inquirer = require("inquirer");

const questions = [
  // Your questions here
    {
      type: "input",
      message: "What is the project title?",
      name: "title",
    },
    {
      type: "editor",
      message: "What is the project description?",
      name: "description",
    },
    {
        type: "input",
        message: "Do you have any contribution?",
        name: "contribution",
      },
      {
        type: "input",
        message: "Did you tested?",
        name: "test",
      },
      {
        type: "editor",
        message: "Add steps for installation",
        name: "installation",
      },
      {
        type: "editor",
        message: "Add steps how to use",
        name: "usage",
      },
    {
      type: "list",
      message: "Choose the following license:",
      choices: ["MIT", "IBM", "Apache", "No License"],
      name: "license",
    },
    
    {
      type: "input",
      message: "What is your github username?",
      name: "username",
    },
    {
      type: "input",
      message: "What is your email?",
      name: "email",
    },
  ];

// Create a function to generate the license badge
function renderLicenseBadge(license) {
    if(license==="MIT"){
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    }
    else if(license==="IBM"){
      return`[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
    }
    else if(license==="Apache"){
      return`[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    }
    else if(license==="No License"){
      return`[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
    }
  }

function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), err => {
    if (err) {
      throw err;
    }
    console.log("File has been written successfully!");
  });
}

function init() {
    inquirer.prompt(questions).then((data) => {
      writeToFile("./output/README.md", data);
    });
  }
  
  init();
  