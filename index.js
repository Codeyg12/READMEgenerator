// Includes packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

// An array of questions the user will need to answer to generate finished README
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions of your project?',
        default: 'To install follow these steps. 1. Clone the repo using either HTTPS `` or SSH key ``\n 2. install NPM packages `npm i`'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage of your project?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How does someone contribute to your project?',
        default: 'Code can always be improved and if you have a suggestion to improve this project then fork the repo and create a pull request.'
    },
    {
        type: 'input',
        name: 'test',
        message: 'How does someone test your project?',
        default: 'npm test'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license goes with your project?',
        choices: ['MIT', 'Apache', 'GPL', 'Apache 2', 'BSD']
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your e-mail?'
    },
    {
        type: 'input',
        name: 'demo',
        message: 'Insert demo',
        default: 'Click here'
    },
    {
        type: 'input',
        name: 'tech',
        message: 'What technologies were used?',
        default: 'Below are the languages and frameworks/libraries used'
    }
];

// Uses the user inputted answers to write the README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, err => {
        if (err) {
            return console.error(err)
        } else {
            console.log('Your READEME has been created')
        }
    })
}

// Uses the writeToFile function to create the new sample
function init() {
    inquirer.prompt(questions).then(response => {
        writeToFile('sampleREADME.md', generateMarkdown(response))
    })
}

// Function call to initialize app
init();
