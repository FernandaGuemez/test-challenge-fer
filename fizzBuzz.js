/* Develop a function that accepts a number and evaluates the following conditions:
          - If divisible by 3, return 'Fizz'.
          - If divisible by 5, return 'Buzz'.
          - If divisible by both 3 and 5, return 'FizzBuzz'.
          - Otherwise, return the original number.*/

function evaluaNumero(n) {
  if (n % 3 === 0 && n % 5 === 0) {
    return "FizzBuzz";
  } else if (n % 3 === 0) {
    return "Fizz";
  } else if (n % 5 === 0) {
    return "Buzz";
  } else return n;
}

console.log(evaluaNumero(9));

module.exports = evaluaNumero;
