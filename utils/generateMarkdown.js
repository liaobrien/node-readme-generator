// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![](https://img.shields.io/badge/license-${license}-blue?style=flat-square)`;
  }
  else {
    return ``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `* [License](#license)`;
  }
  else {
    return ``;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
    
    This project is licensed under the ${license} license.`;
  }
  else {
    return ``;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

${renderLicenseBadge(answers.license)}

## Description

${answers.description}

## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(answers.license)}
* [Contritbuting](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

    ${answers.installCommand}

## Usage

${answers.usage}

${renderLicenseSection(answers.license)}

## Contributing

${answers.contribute}

## Tests

To run tests, run the following command:

    ${answers.testCommand}

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${answers.email}. You can find more of my work at [${answers.name}](https://github.com/${answers.name}).
`;
}

module.exports = generateMarkdown;

// sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions