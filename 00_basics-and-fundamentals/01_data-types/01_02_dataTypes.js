/**
 * TASK
 * Convert  to an integer (Number type), then sum it with  and print the result on a new line using `console.log()`
 * Convert  to a floating-point number (Number type), then sum it with  and print the result on a new line using `console.log()`
 * Print the concatenation of  and  on a new line using console.log. Note that  must be printed first.
 *
 * (1) Declare a variable named 'integer' and initialize with integer value 4
 * (2) Declare a variable named 'decimal' and initialize with floating-point value 4.0.
 * (3) Declare a variable named 'string' and initialize with the string "HackerRank".
 * (4) Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number type) on a new line.
 * (5) Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number type) on a new line.
 * (6) Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The variable 'firstString' must be printed first.
 *
 * @param { Integer } integer
 * @param { Decimal } decimal
 * @param { String } string
 */

function performOperation(secondInteger, secondDecimal, secondString) {
    const integer = 4; // (1)
    const decimal = 4.0; // (2)
    const string = "HackerRank "; // (3)

    console.log(integer + parseInt(secondInteger)); // (4)
    console.log(decimal + parseFloat(secondDecimal)); // (5)
    console.log(string + secondString); // (6)
}

performOperation(12, 4.32, "is the best place to learn and practice coding!");
