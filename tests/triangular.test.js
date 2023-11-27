import Shape from "../lib/shapes.js";
import Triangle from "../lib/triangular.js";

describe("Shape", () => {
  describe("Triangular", () => {
    it("Should it be rendered cirlce string", () => {
      const triangle = new Triangle();
      triangle.setColor(color);
      expect(triangle.render(Shape));
    });
  });
});

export default Triangle;
