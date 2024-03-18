const inquirer = require('inquirer');
const fs = require('fs');

// Array of questions for users to use.
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Can you provide a brief description of your project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How should users install or set up your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How should users use your project? Include examples if possible.',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Are there any guidelines for contributing to your project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How can users test your project? Provide details on running tests, if applicable.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license do you want to apply to your project?',
        choices: ['MIT', 'Apache', 'GPL', 'None'],
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address for additional questions?',
    }
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('README.md file has been successfully generated!');
    });
}

// Function to generate license badge
function renderLicenseBadge(license) {
    // Based on the license type, return the corresponding badge URL
    // You can find badge URLs for licenses on shields.io or similar services
    // For simplicity, we'll assume the badge URLs for each license
    switch (license) {
        case 'MIT':
            return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
        case 'Apache':
            return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        case 'GPL':
            return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
        default:
            return '';
    }
}

// Function to generate markdown for README
function generateMarkdown(data) {
    return `
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseBadge(data.license)}  
This application is covered under the ${data.license} license.

## Contributing
${data.contribution}

## Tests
${data.tests}

## Questions
For questions or inquiries, please contact:
- GitHub: [${data.githubUsername}](https://github.com/${data.githubUsername})
- Email: ${data.email}
`;
}

// Function to initialize app
function init() {
    // Prompt the user with questions
    inquirer.prompt(questions)
        .then(answers => {
            // Generate README content using user's answers
            const readmeContent = generateMarkdown(answers);

            // Write README file
            writeToFile('README.md', readmeContent);
        })
        .catch(error => {
            console.error('Error occurred:', error);
        });
}

// Call the init function to start the application
init();
