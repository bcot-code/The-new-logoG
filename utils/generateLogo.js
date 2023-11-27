// Exports `Triangle`, `Circle`, and `Square` classes
//function called index.js to shape the class to make new shapes
import Square from "../lib/square.js";
import Circle from "../lib/circle.js";
import Triangle from "../lib/triangular.js";

function generateLogo(data) {
  let shape = ``;
  if (data.shape === "Square") {
    shape = new Square(data.color, data.text, data.textColor);
  } else if (data.shape === "Circle") {
    shape = new Circle(data.color, data.text, data.textColor);
  } else {
    shape = new Triangle(data.color, data.text, data.textColor);
  }
  return shape.render();
}
export default generateLogo;
