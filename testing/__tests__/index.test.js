const { sum } = require("..");

describe("Index page test", () => {
  describe("Sum function test", () => {
    it("Should return correct result if both the arguments are number", () => {
      const expectedResult = 3;
      const result = sum(1, 2);

      expect(result).toBe(expectedResult);
    });

    it("Should throw an error if one of the number is string", () => {
      try {
        const result = sum(1, "2");
        expect(result).toBeUndefined();
      } catch (err) {
        expect(err).toBeDefined();
      }
    });
  });
});
