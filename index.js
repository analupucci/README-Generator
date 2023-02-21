const inquirer = require('inquirer');

const fs = require('fs');

const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () =>
  inquirer.prompt([
    {
        type: 'input',
        name: 'titleProject',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'descriptionProject',
        message: 'Write a short description of your project',
    },
    {
      type: 'input',
      name: 'installationInstructions',
      message: 'Provide installation instructions for the user',
    },
    {
      type: 'input',
      name: 'usageInformation',
      message: 'Provide usage information guidelines.',
    },
    {
      type: 'input',
      name: 'license',
      message: 'Please choose your License:',
      choice: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense', 'None'],
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Please provide guidelines on how to contribute.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide testing instructions.',
      },
    {
      type: 'input',
      name: 'contributing',
      message: 'Please provide guidelines on how to contribute.',
    },
    {
        type: 'input',
        name: 'questionsGithub',
        message: 'Please provide your Github username.',
      }, 
    {
      type: 'input',
      name: 'questionsEmail',
      message: 'Please provide your email address.',
    }, 
  ]);

const generateREADME = (answers) =>


promptUser()
  .then((answers) => writeFileAsync('README.md', generateREADME(answers)))
  .then(() => console.log('Successfully wrote to README.md'))
  .catch((err) => console.error(err));