import Shape from "../lib/shapes.js";

describe("Shape", () => {
  describe("Circle", () => {
    it("Should it be rendered cirlce string", () => {
      const circle = new Circle();
      circle.setColor(color);
      expect(circle.render(Shape));
    });
  });
});

export default Circle;
