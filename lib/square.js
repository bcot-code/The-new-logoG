import Shapes from "./shapes.js";

class Square extends Shapes {
  constructor(data) {
    super(data);
  }
  render() {
    console.log("Square");
    return ` 
    <svg
        version="1.1"
        width="300"
        height="200"
        xmlns="http://www.w3.org/2000/svg"
      >
      <rect width="100%" height="100%" fill="${this.color}" />
    <text
          x="150"
          y="125"
          font-size="60"
          text-anchor="middle"
          fill="${this.textColor}"
        >
        </svg>`;
  }
}

export default Square;
