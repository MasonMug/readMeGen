//Packages required for the application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

//Call this function to initialize
init();

//Initializes the application
function init() {
    questionInput();
}

//List of question inputs for the README
function questionInput(){
    inquirer
        .prompt ([
            {type: 'input', name: 'title', message: 'Input ReadMe Title:'},
            {type: 'input', name: 'description', message: 'Input the ReadMe Discription:'},
            {type: 'input', name: 'installation', message: 'Input the command to run the code:'},
            {type: 'input', name: 'usage', message: 'Add example screenshot of use:'},
            {type: 'input', name: 'tests', message: 'Add tests for your code:'},
            {type: 'input', name: 'contribution', message: 'Provide guidelines for contributors:'},
            {type: 'input', name: 'userName', message: 'Input github username: '},
            {type: 'input', name: 'email', message: 'Input an email for user to ask questions with'},
            {type: 'list', name: 'license', message: 'Select the License used:', choices: ['None','Apache License 2.0','GNU General Public License v3.0','MIT License','BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v3.0', 'Mozilla Public License 2.0', 'The Unlicense']}
        ])
        .then((response) => {
            console.log(`This is your responses:`);
            console.log(`ReadMe Title: ${response.title}`);
            console.log(`Description: ${response.description}`);
            console.log(`Installation: ${response.installation}`);
            console.log(`Usage: ${response.usage}`);
            console.log(`Tests: ${response.tests}`);
            console.log(`Contributing: ${response.contribution}`);
            console.log(`Username: ${response.userName}`);
            console.log(`Email: ${response.email}`);
            console.log(`License: ${response.license}`);
            writeToFile('ReadMe.md', response);
        })  
        .catch((error) => {
            console.error('Error has occurred: ', error);
        });
}

//Creates the README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        if (err) {
            console.error('An error has occured when writing file: ', err);
        } else {
            console.log(`Created file ${fileName} successfully.`);
        }
    });
}