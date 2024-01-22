const evaluaNumero = require("../fizzBuzz");

test("Si n es divisible entre 3 y 5 dame fizzbuz", () => {
  expect(evaluaNumero(15)).toBe("FizzBuzz");
});

test("Si n es divisible entre 3 y 5 dame fizzbuz, si solo es divisible en 3 fizz, y si es divisible en 5 fuzz", () => {
  expect(evaluaNumero(9)).toBe("Fizz");
});

describe("Prueba a FitzzBuzz", () => {
  test("9 es divisible entre 3, arroja Fizz", () => {
    expect(evaluaNumero(7)).toBe("Fizz"); // solo arroja informacion cuando falla
  });
});
