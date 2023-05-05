/**
 * The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci
 * sequence, such that each number is the sum of the two preceding ones,
 * starting from 0 and 1. That is,
 *
 * F(0) = 0, F(1) = 1
 * F(n) = F(n - 1) + F(n - 2), for n > 1.
 * Given n, calculate F(n).
 *
 * Example 1:
 * Input: n = 2
 * Output: 1
 * Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
 *
 * Example 2:
 * Input: n = 3
 * Output: 2
 * Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
 *
 * Example 3:
 * Input: n = 4
 * Output: 3
 * Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
 *
 * Constraints:
 * 0 <= n <= 30
 */

/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    // If n is 0 or 1, return n
    if (n <= 1) {
        return n;
    }

    // Create an array to store the Fibonacci numbers
    const fibNumbers = [0, 1];

    // Loop through the number of times specified by n.
    for (let i = 2; i <= n; i++) {
        // Add the last two numbers in the array and store the result in the array
        fibNumbers[i] = fibNumbers[i - 1] + fibNumbers[i - 2];
    }

    // Return the last number in the array
    return fibNumbers[n];
};

// Test cases:
console.log(fib(2)); // Output: 1
console.log(fib(3)); // Output: 2
console.log(fib(4)); // Output: 3


/**
 * This code defines a function fib that takes a non-negative integer n and 
 * returns the nth Fibonacci number. The function uses dynamic programming to 
 * build an array of Fibonacci numbers fibNumbers iteratively, starting from 
 * F(0) and F(1). It then returns the nth Fibonacci number from the fibNumbers 
 * array.
 */

/**
 * MERN Project Ideas
 * 
 * Math Learning Platform:
 * Develop an online math learning platform where users can learn about various 
 * mathematical concepts, including sequences and series. Implement the Fibonacci 
 * code to generate Fibonacci numbers on demand, helping users visualize and 
 * understand the Fibonacci sequence.
 * 
 * Financial Planning Tool:
 * Create a financial planning tool that helps users project their savings, 
 * investments, or debts over time. Use the Fibonacci code to model growth patterns 
 * that follow the Fibonacci sequence, allowing users to explore alternative investment
 * or saving strategies.
 * 
 * Art and Design Application:
 * Build an art and design application that allows users to create patterns or designs 
 * based on mathematical concepts, such as the Fibonacci sequence, the golden ratio, or 
 * fractals. Implement the Fibonacci code to generate Fibonacci numbers and apply them 
 * to create visually appealing designs.
 * 
 * Nature Exploration App:
 * Develop an app that educates users about the natural world and the mathematical 
 * patterns found in it. Use the Fibonacci code to showcase examples of the Fibonacci 
 * sequence in nature, such as the arrangement of leaves on a stem, the spiral patterns 
 * in sunflowers or pine cones, and the growth patterns of rabbit populations.
 * 
 * Algorithm Visualization Tool:
 * Create an algorithm visualization tool that helps users understand the inner workings 
 * of various algorithms, including those based on the Fibonacci sequence. Implement the 
 * Fibonacci code and allow users to visualize the dynamic programming approach used in the 
 * solution, helping them grasp the concept more easily.
 */

