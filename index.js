// Runs the application using imports from lib/
import inquirer from "inquirer";
import fs from "fs";
import generateLogo from "./utils/generateLogo.js";

//application that accepts user input
const qs = [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "Logo",
    message: "What is the name of your logo?",
    validate: function (input) {
      if (input.length > 3) {
        return true;
      } else {
        return "Please enter a logo with more than 3 characters.";
      }
    },
  },
  {
    // WHEN I am prompted for a shape
    type: "list",
    name: "shape",
    message: "What shape would you like your logo to be?",
    choices: ["Circle", "Square", "Triangle", "Heart"],
  },
  {
    // WHEN I am prompted for the shape's color
    type: "input",
    name: "shape_color",
    message: "What color would you like your logo to be?",
  },
  {
    type: "input",
    name: "text_color",
    message: "What color would you like the text to be?",
  },
];

//entered input for all the prompts
function writeToFile(fileName, data) {
  var svg = generateLogo(data);
  fs.writeFile(fileName, svg, function (err) {
    if (err) {
      return console.log(err);
    }
    //AND the output text "Generated logo.svg"
    console.log("Generated logo.svg");
  });
}

function init() {
  inquirer.prompt(qs).then(function (data) {
    console.log(data);
    // THEN an SVG file is created named `logo.svg`
    var fileNm = "logo.svg";
    writeToFile(fileNm, data);
  });
}
init();
