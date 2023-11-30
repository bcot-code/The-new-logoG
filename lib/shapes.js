class Shape {
  constructor(logoshape, color, text, shapeColor) {
    this.logoshape = logoshape;
    this.color = color;
    this.text = text;
    this.shapeColor = shapeColor;
  }

  setColor(color) {
    this.color = color;
  }
  setText(text) {
    this.text = text;
  }
  setTextColor(shapeColor) {
    this.textColor = shapeColor;
  }
}

class Circle extends Shape {
  // constructor(data) {
  //   super(data);
  // }
  render() {
    return ` <svg
        version="1.1"
        width="300"
        height="200"
        xmlns="http://www.w3.org/2000/svg"
      >
    <circle cx="150" cy="115" r="80" fill="${this.color}" />
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
class Square extends Shape {
  // constructor() {
  //   super();
  // }
  render() {
    return ` <svg
        version="1.1"
        width="300"
        height="200"
        xmlns="http://www.w3.org/2000/svg"
      >
    <rect width="200" height="200" fill="${this.color}" />
    <text
          x="100"
          y="100"
          font-size="60"
          text-anchor="middle"
          fill="${this.textColor}"
        >
        ${this.text}
        </text>
        </svg>`;
  }
}
class Triangle extends Shape {
  // constructor(data) {
  //   super(data);
  // }
  render() {
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

export const circle = Circle;
export const square = Square;
export const triangle = Triangle;
