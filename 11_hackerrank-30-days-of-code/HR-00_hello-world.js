/**
 * Basics - Hello World
 *
 * @task
 *  * Save a line of input from STDIN to a variable, print Hello, World.
 * On a single line, and finally print the value of your variable on a second line.
 * @return void
 * @print userInput and "Hello World"

 */

const processData = (inputString = "") => {
  console.log("Hello World");
  console.log(inputString);
};

const userInput = process.argv[2] || "Error: User did not input anything";
processData(userInput);
