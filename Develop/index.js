// TODO: Include packages needed for this application
const inquirer = require('inquirer')

// TODO: Create an array of questions for user input
const questions = ['What is the project title?',
    'What is the description?',
    'What are the installation instructions?',
    'Any information on usage?',
    'What are the contribution guidelines?',
    'What are the testing instructions?',
    'What is your github username?',
    'What is your email?'];


const license_choices = ['License1', 'License2']

const get_answers = () => {
inquirer
.prompt([
    {
        name: 'project_title',
        type: 'input',
        message: questions[0]
    },
    {
        name: 'description',
        type: 'input',
        message: questions[1]
    },
    {
        name: 'install_instructions',
        type: 'input',
        message: questions[2]
    },
    {
        name: 'usage_info',
        type: 'input',
        message: questions[3]
    },
    {
        name: 'contribution_guidelines',
        type: 'input',
        message: questions[4]
    },
    {
        name: 'testing_instructions',
        type: 'input',
        message: questions[5]
    },
    {
        name: 'github_username',
        type: 'input',
        message: questions[6]
    },
    {
        name: 'email',
        type: 'input',
        message: questions[7]
    },
])
.then(answer => {
    console.log('Complete');
    writeToFile('testfile', answer)
    return answer
})
.catch((error) => {
    console.log('Error:' + error);
})
}

get_answers()


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    var text = `Auto Generated Readme
    Project Title: ${data.project_title}
    Description: ${data.description}
    Installation instructions: ${data.install_instructions}
    General usage instructions: ${data.usage_info}
    Guidelines to contribute; ${data.contribution_guidelines}
    Instructions to test: ${data.testing_instructions}
    
    Additional questions and/or comments? Contact me below
    Github URL: github.com/${data.github_username}
    Email: ${data.email}`
    console.log(text);
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


