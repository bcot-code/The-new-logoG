// Runs the application using imports from lib/
import inquirer from "inquirer";
import fs from "fs";
// import { generatedShape } from "../The-new-logoG/lib/generateLoSh.js";
import { circle } from "./lib/shapes.js";
import { triangle } from "./lib/shapes.js";
import { square } from "./lib/shapes.js";

// WHEN I am prompted for text
// THEN I can enter up to three characters
inquirer
  .prompt([
    {
      type: "input",
      name: "text",
      message: "Enter a character or two.",
      validate(value) {
        if (value.length < 1 || value.length > 3) {
          return false;
        } else {
          return true;
        }
      },
    },
    // WHEN I am prompted for the text color
    // THEN I can enter a color keyword (OR a hexadecimal number)
    {
      type: "list",
      name: "color",
      message: "Choose a color!",
      choices: ["red", "blue", "green", "#FF0000"],
    },
    // WHEN I am prompted for a shape
    // THEN I can choose between circle, square, and triangle
    {
      type: "list",
      name: "logoshape",
      message: "What kind of shape?",
      choices: ["Circle", "Square", "Triangle"],
    },
    // WHEN I am prompted for the shape's color
    //THEN I can enter a color keyword (OR a hexadecimal number)
    {
      type: "list",
      name: "shapeColor",
      message: "Which color would you like your shape in?",
      choices: ["red", "blue", "green", "#FF0000"],
    },
  ])
  .then(({ text, color, logoshape, shapeColor }) => {
    let generatedLogo;
    switch (logoshape) {
      case "Circle":
        const circleLogo = new circle();
        circleLogo.setColor(shapeColor);
        circleLogo.setTextColor(color);
        circleLogo.setText(text);
        generatedLogo = circleLogo.render();
        break;
      case "Square":
        const squareLogo = new square();
        squareLogo.setColor(shapeColor);
        squareLogo.setTextColor(color);
        squareLogo.setText(text);
        generatedLogo = squareLogo.render();
        break;
      case "Triangle":
        const triangleLogo = new triangle();
        triangleLogo.setColor(shapeColor);
        triangleLogo.setTextColor(color);
        triangleLogo.setText(text);
        generatedLogo = triangleLogo.render();
        break;
      default:
        console.error("No shape selected");
    }

    const svgPath = "./tests/generatedLogo.svg";

    fs.writeFileSync(svgPath, generatedLogo, (err) =>
      err ? console.log(err) : console.log("Generated logo.svg")
    );
  })
  .catch((err) => console.error(err));

//WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg.
// AND the output text "Generated logo.svg" is printed in the command line.
