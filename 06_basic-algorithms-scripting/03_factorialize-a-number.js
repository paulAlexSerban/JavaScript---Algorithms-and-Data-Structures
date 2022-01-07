/**
 * Factorialize a Number
 * 
 * Return the factorial of the provided integer.
 * If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
 * Factorials are often represented with the shorthand notation n!
 * For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
 * Only integers greater than or equal to zero will be supplied to the function.
 */

/**
 * Solution 1
 * 
 * Since the return values for the function will always be greater than or equal to 1, product is initialized at one. 
 * For the case where the number is 0, the for loop condition will be false, but since product is initialized as 1, it will have the correct value when the return statement is executed.
 * For all numbers passed to the function which are greater than one, the simple for loop will increment i by one each iteration and recalculate product up to the value num.
 *
 * @param { Number } num 
 * @returns 
 */

 function factorialize_1(num) {
  let product = 1;
  for (let i = 2; i <= num; i++) {
    product *= i;
  }
  return product;
}
factorialize_1(5);

/**
 * Solution 2
 * => using recursion (normal)
 * 
 * Notice at the first line we have the terminal condition, i.e a condition to check the end of the recursion. 
 * If num == 0, then we return 1, i.e. effectively ending the recursion and informing the stack to propagate this value to the upper levels. 
 * If we do not have this condition, the recursion would go on until the stack space gets consumed, thereby resulting in a stack overflow.
 */

 function factorialize_2(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorialize(num - 1);
}
factorialize_2(5);

/**
 * Solution 3
 * ==> using Tail Recursion
 * 
 * In this solution, we use Tail Recursion 530 to optimize the the memory use.
 * In traditional head recursion, the typical model is that you perform your recursive calls first, and then you take the return value of the recursive call and calculate the result. In this manner, you don’t get the result of your calculation until you have returned from every recursive call.
 * In tail recursion, you perform your calculations first, and then you execute the recursive call, passing the results of your current step to the next recursive step. This results in the last statement being in the form of (return (recursive-function params)).
 * In this solution, with each evaluation of the recursive call, the factorial is updated. 
 * This is different from the head-recursive solution where all evaluation calculations are stored on the stack until the base case is reached.
 */

 function factorialize_3(num, factorial = 1) {
  if (num === 0) {
    return factorial;
  } else {
    return factorialize(num - 1, factorial * num);
  }
}
factorialize_3(5);

/**
 * Solution 4
 * 
 * In this solution, we used “reduce” function to find the factorial value of the number.
 * We have created an array which has length num. And we filled all elements of the array as undefined. In this case, we have to do this because empty arrays couldn’t reducible. You can fill the array as your wish by the way. This depends on your engineering sight completely.
 * In reduce function’s accumulator is calling product this is also our final value. We are multiplying our index value with the product to find factorial value.
 * We’re setting product’s initial value to 1 because if it was zero products gets zero always.
 * Also the factorial value can’t calculate for negative numbers, first of all, we’re testing this.
 */

 function factorialize_4(num) {
  return num < 0 ? 1 :
    new Array(num)
      .fill(undefined)
      .reduce((product, _, index) => product * (index + 1), 1);
}
factorialize_4(5);