
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## License 
  ![License](https://img.shields.io/badge/license-${data.license}-00beef)

  ## Table of Contents
  [Description](#description)

  [Installation](#installation)

  [Usage](#usage)

  [Contribution](#contribution)

  [Testing](#test)
  
  [License](#license)

  ### Description

  ${data.description}

  ### Installation

  ${data.installation}

  ### Usage

  ${data.usage}

  ### Contribution

  ${data.contribution}

  ### Testing

  ${data.test}

  #### Links

  To see more of my work check my [Github](https://github.com/${data.github}). For futher questions you can reach me at ${data.email}.
`;
}

module.exports = generateMarkdown;
