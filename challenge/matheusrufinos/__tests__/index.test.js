const shift = require("../index");

test("should get first array element", () => {
  expect(shift(["avocado", "dog", "cat"])).toBe("avocado");
});

test("should decrease the array length", () => {
  let array = ["soap", "beer", "barbecue"];
  expect(array).toHaveLength(3);
  shift(array);
  expect(array).toHaveLength(2);
});

test("should receive undefined when array is empty", () => {
  expect(shift([])).toBe(undefined);
});
