import Shapes from "./shapes.js";

class Triangle extends Shapes {
  constructor(data) {
    super(data);
  }
  render() {
    console.log("Triangle");
    return `
    <svg
        version="1.1"
        width="300"
        height="200"
        xmlns="http://www.w3.org/2000/svg"
      >
      <polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />
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

export default Triangle;
