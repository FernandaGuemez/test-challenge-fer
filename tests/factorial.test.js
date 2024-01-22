const calcularFactorial = require("../factorial");
// test("Agrega factorial de 5 es igual a 120", () => {
//   expect(calcularFactorial(7)).toBe(210);
// });

describe("Pruebas al programa factorial", () => {
  test("Agrega factorial de 5 es igual a 120", () => {
    expect(calcularFactorial(5)).toBe(120);
  });
});

describe("Prueba #2 al programa factorial", () => {
  test("Agrega factorial de 5 es igual a 120", () => {
    expect(calcularFactorial(5)).toBe(120);
  });
});
