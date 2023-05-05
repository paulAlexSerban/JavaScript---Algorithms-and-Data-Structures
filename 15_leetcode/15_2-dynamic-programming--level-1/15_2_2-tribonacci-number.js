/**
 * The Tribonacci sequence Tn is defined as follows:
 *
 * T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.
 *
 * Given n, return the value of Tn.
 *
 * Example 1:
 * Input: n = 4
 * Output: 4
 * Explanation:
 * T_3 = 0 + 1 + 1 = 2
 * T_4 = 1 + 1 + 2 = 4
 *
 * Example 2:
 * Input: n = 25
 * Output: 1389537
 *
 * Constraints:
 * 0 <= n <= 37
 * The answer is guaranteed to fit within a 32-bit integer, ie. answer <= 2^31 - 1.
 */

/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
    // If n is 0, return 0
    if (n === 0) {
        return 0;
    // If n is 1 or 2, return 1
    } else if (n === 1 || n === 2) {
        return 1;
    }

    // Create an array with the first three tribonacci numbers
    const tribNumbers = [0, 1, 1];

    // Loop through the array from index 3 to n
    for (let i = 3; i <= n; i++) {
        // Add the previous three numbers and add it to the array
        tribNumbers[i] = tribNumbers[i - 1] + tribNumbers[i - 2] + tribNumbers[i - 3];
    }

    // Return the last number in the array
    return tribNumbers[n];
};

// Test cases:
console.log(tribonacci(4)); // Output: 4
console.log(tribonacci(25)); // Output: 1389537

/**
 * This code defines a function tribonacci that takes a non-negative integer n 
 * and returns the nth Tribonacci number. The function uses dynamic programming 
 * to build an array of Tribonacci numbers tribNumbers iteratively, starting from 
 * T(0), T(1), and T(2). It then returns the nth Tribonacci number from the 
 * tribNumbers array.
 */

/**
 * MERN Project Ideas
 * 
 * Interactive Math Learning Platform:
 * Develop an interactive math learning platform that allows users to explore various 
 * mathematical sequences and series, including the Tribonacci sequence. Implement the 
 * Tribonacci code to generate Tribonacci numbers on demand, providing visual 
 * representations and examples for users to understand the concept better.
 * 
 * Stock Market Prediction Tool:
 * Create a stock market prediction tool that uses different mathematical models to 
 * forecast future trends, including those based on the Tribonacci sequence. Implement 
 * the Tribonacci code to generate the sequence and use it as one of the inputs for 
 * the prediction algorithm, providing users with alternative analysis methods.
 * 
 * Creative Pattern Generator:
 * Build a web application that lets users create artistic patterns or designs based on 
 * mathematical sequences, such as the Tribonacci sequence, the golden ratio, or fractals. 
 * Implement the Tribonacci code to generate Tribonacci numbers and use them to create 
 * visually appealing patterns for digital art or graphic design projects.
 * 
 * Task Scheduling App:
 * Develop a task scheduling app that helps users plan their work and personal tasks more
 * efficiently. Use the Tribonacci code to generate a unique sequence of task priorities, 
 * allowing users to explore different ways to prioritize and balance their workload.
 * 
 * Algorithm Visualization Tool:
 * Create an algorithm visualization tool that helps users understand the inner workings 
 * of various algorithms, including those based on the Tribonacci sequence. Implement the 
 * Tribonacci code and allow users to visualize the dynamic programming approach used in 
 * the solution, helping them comprehend the algorithm more easily.
 */