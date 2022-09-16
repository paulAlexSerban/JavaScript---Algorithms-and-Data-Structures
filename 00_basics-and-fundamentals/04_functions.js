/* -------------------------------------------------- *\
 FUNCTIONS
\* -------------------------------------------------- */

/**
 * Functions:
 *  - are the fundamental building blocks in JS
 *  - performs a task and returns a value
 *  - functions can have inputs and these inputs can change how the functions behave,
 * these inputs are named parameters
 * - functions can have multiple parameters separated bu comas
 */

// Performing a task
function greet(name, lastName) {
  console.log(`Hello ${name} ${lastName}`);
}

greet("John");

/**
 * Nota Bene:
 *  - name is a parameter of the function
 *  - "John" is the argument passed to the function
 *  - the ARGUMENT is the actual value of the supplied parameter
 */

// Calculating and returns a value
function square(number) {
  return number * number;
}

console.log(square(3));