import { circle } from "../lib/shapes";
import { triangle } from "../lib/shapes";
import { square } from "../lib/shapes";

describe("circle", () => {
  it("Should it be rendered cirlce string", () => {
    const circleTest = new circle({
      color: "red",
      text: "SVG",
      logoshape: "circle",
    });
    expect(circleTest.render()).toEqual(`
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="5" cy="5" r="100" fill="red"/>
    <text x="100" y="125" font-size="70" text-anchor="middle" fill="white">EKO</text>
    </svg>`);
  });
});

describe("square", () => {
  it("Should it be rendered square of a string", () => {
    const squareTest = new square("red", "EKO", "yellow");
    expect(squareTest.render()).toEqual(`
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" fill="red"/>
            <text x="100" y="125" font-size="70" text-anchor="middle" fill="yellow">EKO</text>
        </svg>`);
  });
});
describe("triangular", () => {
  it("Should it be rendered triangle string", () => {
    const triangleTest = new triangle("lime", "EKO", "yellow");
    expect(triangleTest.render()).toEqual(`<svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <polygon points="100, 15 200, 200 0, 200" fill="lime"/>
            <text x="100" y="125" font-size="70" text-anchor="middle" fill="yellow">EKO</text>
        </svg>`);
  });
});
