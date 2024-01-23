const calculator = require("../calculator");

test("Adds a + b to equal 3", () => {
  expect(calculator.sum(5, 3)).toBe(8);
});

test("substracts a - b", () => {
  expect(calculator.substract(10, 4)).toBe(6);
});

// test("multiplies a * b", () => {
//   //
// });

// test("divides a / b", () => {
//   // Consider decimals
// });

// test("Raises to power a ^ b", () => {
//   //
// });
