const inquirer = require('inquirer');
const Choices = require('inquirer/lib/objects/choices');
const prepend = require('prepend')


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
  }
  else if (license == 'apache'){
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]'
  }
  else if (license == 'boost') {
    return '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)]'
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
  inquirer
  .prompt([
    {
      name: 'license',
      type: 'list',
      message: 'Which license do you want?',
      choices: ['MIT', 'apache', 'boost']
    }
  ])
  .then(answer => {
    license = renderLicenseBadge(answer.license)
    prepend('autoREADme.md', '\n\nLicense\n' + license, () => {})
  })
  .catch(error => {
    console.log('Error: ' + error);
  })
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  renderLicenseLink()
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  var text = `Auto Generated Readme
  ## Project Title
  ${data.project_title}\n
  ## Description
  ${data.description}\n
  ## Installation instructions
  ${data.install_instructions}\n
  ## General usage instructions
  ${data.usage_info}\n
  ## Guidelines to contribute
  ${data.contribution_guidelines}\n
  ## Instructions to test
  ${data.testing_instructions}\n
  \n
  ## Contact
  Additional questions and/or comments? Contact me below\n
  Github URL: github.com/${data.github_username}\n
  Email: ${data.email}\n`
  return text;
}

function table_contents() {
  const text = `
  ## Table of Contents\n
  [Project Title](#project-Title)\n
  [Description](#Description)\n
  [Installation instructions](#Installation-instructions)\n
  [General usage instructions](#General-usage-instructions)\n
  [Guidelines to contribute](#Guidelines-to-contribute)\n
  [Instructions to test](#Instructions-to-test)\n
  [Contact](#Contact)\n
  ## Demo!\n
  ![Demo Video](demo.gif)\n\n\n\n`
  prepend('autoREADme.md', text, () => {})
}

module.exports = {generateMarkdown, renderLicenseSection, table_contents};
