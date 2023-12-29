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
      type: "text",
      name: "color",
      message: "Text a color(or hexadecimal)!",
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
      type: "text",
      name: "shapeColor",
      message: "Enter color(or hexadecimal) would you like your shape in?",
    },
  ])
  .then(({ text, color, logoshape, shapeColor }) => {
    let logo = "";
    switch (logoshape) {
      case "circle":
        const circleLogo = new circle();
        circleLogo.setColor(shapeColor);
        circleLogo.setTextColor(color);
        circleLogo.setText(text);
        logo = circleLogo.render();
        break;
      case "square":
        const squareLogo = new square();
        squareLogo.setColor(shapeColor);
        squareLogo.setTextColor(color);
        squareLogo.setText(text);
        logo = squareLogo.render();
        break;
      case "triangle":
        const triangleLogo = new triangle();
        triangleLogo.setColor(shapeColor);
        triangleLogo.setTextColor(color);
        triangleLogo.setText(text);
        logo = triangleLogo.render();
        break;
      default:
        console.error("No shape selected");
    }
    console.log(`\n${logo}\n`);

    let svgPath = "";
    svgPath =
      '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    let shapePick;
    if (logoshape === "triangle") {
      shapePick = new triangle();
      svgPath += `<poly points="150, 18 244, 182 56, 182" fill="${shapeColor}"/>`;
    } else if (logoshape === "sqaure") {
      shapePick += new square();
      svgPath += `<rect x="73" y="40" width="160" height="160" fill="${shapeColor}"/>`;
    } else {
      shapePick += new circle();
      svgPath += `<circle cx="150" cy="115" r="80" fill="${shapeColor}"/>`;
    }
    svgPath += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${color}">${text}</text>`;
    svgPath += `</svg>`;
    //WHEN I have entered input for all the prompts
    // THEN an SVG file is created named `logo.svg.
    // AND the output text "Generated logo.svg" is printed in the command line.
    fs.writeFileSync("./tests/logo.svg", svgPath);
    console.log("\x1b[32m%s\x1b[0m", "Generated logo.svg");
  });
