
/**
 * TASK
 * (1) Implement a function named factorial that has one parameter: an integer
 * (2) The function must return the value of `n!` (i.e.,  factorial).
 * @param {Number} n
 * @returns the value of n factorial
 */
function factorial(n) {
  return (n > 1) ? n * factorial(n - 1) : 1;
}

console.log(`The factorial is ${factorial(3)}`);