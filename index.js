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
      type: 'list',
      name: 'license',
      message: 'Please choose your License:',
      choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'Mozilla Public License 2.0', 'The Unlicense', 'None'],
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
        name: 'questionsGithub',
        message: 'Please provide your Github username.',
      }, 
    {
      type: 'input',
      name: 'questionsEmail',
      message: 'Please provide your email address.',
    }, 
  ]);

  const generateREADME = (answers) => {
    return `# ${answers.titleProject}

    ## Project Description
    ${answers.descriptionProject}

    ## Table of Contents
    * Installation
    * Usage
    * License
    * Contributing
    * Tests
    * Questions
    
    ## Installation
    ${answers.installationInstructions}

    ## Usage
    ${answers.usageInformation}

    ## License
    ${licenseBadge(answers.license)}

    ## Contributing
    ${answers.contributing}

    ## Tests
    ${answers.tests}

    ## Questions
    Any questions can be forwarded to:
    Github:[${answers.questionsGithub}](https://github.com/${answers.questionsGithub})
    or 
    ${answers.questionsEmail}`

  };

    function licenseBadge(license){

        if (license === "Apache License 2.0")
        return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        
        else if (license === "GNU General Public License v3.0")
        return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    
        else if (license === "MIT License")
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT);"
        
        else if (license === 'BSD 2-Clause "Simplified" License')
        return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
    
        else if (license === 'BSD 3-Clause "New" or "Revised" License')
        return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    
        else if (license === "Boost Software License" )
        return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    
        else if (license === "Creative Commons Zero v1.0 Universal")
        return "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)";
    
        else if (license === "Eclipse Public License 2.0")
        return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
    
        else if (license === "GNU Affero General Public License v3.0")
        return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    
        else if (license === "GNU General Public License v2.0")
        return "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)" ;
        
        else if (license === 'Mozilla Public License 2.0')
        return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    
        else if (license === 'The Unlicense')
        return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
    
        else if (license === 'None')
        return "None"
    
    };


promptUser()
  .then((answers) => writeFileAsync('READMEtest.md', generateREADME(answers)))
  .then(() => console.log('Successfully wrote to README.md'))
  .catch((err) => console.error(err));