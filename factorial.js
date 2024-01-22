/***Factorial Calculation:**
       - Implement a function to calculate the factorial of a number using recursion.*/

function calcularFactorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * calcularFactorial(n - 1);
  }
}

let numero = 5;
let resultado = calcularFactorial(numero);
console.log("El factorial de " + numero + " es: " + resultado);

module.exports = calcularFactorial;
