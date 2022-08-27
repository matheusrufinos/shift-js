const shift = require("../index");

test("should get first array element", () => {
  expect(shift(2)).toBe(2);
});
