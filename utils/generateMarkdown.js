// This function will be called to write the README in this format so template literal is used
function generateMarkdown(data) {
  return ` <a name="readme-top"></a>

  # ${data.title} [<img align="right" src="https://img.shields.io/badge/license-${data.license}-00beef"></img>](LICENSE)

  ### Description
  
  ${data.description}

  <p align="right"><a href="#readme-top">(Return to top)</a></p>

  ## Table of Contents
  [Description](#description)
  
  [Demo](#demo)

  [Installation](#installation)

  [Usage](#usage)

  [Technologies](#technologies)

  [Contribution](#contribution)

  [Testing](#test)

  ### Demo

  ${data.demo}

  <p align="right"><a href="#readme-top">(Return to top)</a></p>
  
  ### Installation

  ${data.installation}

  <p align="right"><a href="#readme-top">(Return to top)</a></p>

  ### Usage

  ${data.usage}

  <p align="right"><a href="#readme-top">(Return to top)</a></p>

  ### Technologies

  ${data.tech}

  <p align="right"><a href="#readme-top">(Return to top)</a></p>

  ### Contribution

  ${data.contribution}

  <p align="right"><a href="#readme-top">(Return to top)</a></p>

  ### Testing

  ${data.test}

  <p align="right"><a href="#readme-top">(Return to top)</a></p>

  #### Links

  To see more of my work check my [Github](https://github.com/${data.github}). For futher questions you can reach me at ${data.email}.
  
  <p align="right"><a href="#readme-top">(Return to top)</a></p>
`;
}

module.exports = generateMarkdown;
