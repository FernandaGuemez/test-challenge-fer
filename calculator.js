const calculator = {
  sum(a, b) {
    return a + b;
  },
  substract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
  divide(a, b) {
    return a / b;
  },
  power: (a, b) => a ^ b,
};

console.log("Suma: " + calculator.sum(5, 3)); // Imprime "Suma: 8"
console.log("Resta: " + calculator.substract(10, 4)); // Imprime "Resta: 6"
console.log("Multiplicación: " + calculator.multiply(2, 6)); // Imprime "Multiplicación: 12"
console.log("División: " + calculator.divide(20, 5)); // Imprime "División: 4"
console.log("Potencia: " + calculator.power(2, 3)); // Imprime "Potencia: 8"

module.exports = calculator;
