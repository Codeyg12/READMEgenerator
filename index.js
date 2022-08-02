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
        message: 'What are the installation instructions of your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage of your project?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How does someone contribute to your project?'
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
