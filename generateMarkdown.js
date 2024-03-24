// Function to render license badge
function renderLicenseBadge(license) {
  // Will return corresponding badge URL to chosen license in ReadMe Generator.
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

// renders license link
function renderLicenseLink(license) {
  if (license) {
    // Returns the license link based on the license type.
    return `https://opensource.org/licenses/${license}`;
  } else {
    return '';
  }
}

// renders license section
function renderLicenseSection(license) {
  if (license) {
    // Return the license section text based on the license type
    return `This project is licensed under the [${license}](${renderLicenseLink(license)}) license.`;
  } else {
    return '';
  }
}

// generates markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

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

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

For questions about the project, please contact [${data.author}](mailto:${data.email}).
`;

}

module.exports = generateMarkdown;
