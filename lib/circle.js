import Shapes from "./shapes.js";

class Circle extends Shapes {
  constructor(color, text, textColor) {
    super(color, text, textColor);
  }
  render() {
    console.log("Circle");
    return `
      <svg
        version="1.1"
        width="300"
        height="200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="150" cy="100" r="80" fill="${this.color}" />
        <text
          x="150"
          y="125"
          font-size="60"
          text-anchor="middle"
          fill="${this.textColor}"
        >
          ${this.text}
        </text>
      </svg>`;
  }
}

export default Circle;
