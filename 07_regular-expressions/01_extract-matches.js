/**
 * You can extract the actual matches you found with the `.match()` method
 */

function extractMatch(string, regex) {
  return string.match(regex);
}

// Example 1
const helloString = "Hello, World!";
const helloRegExp = /Hello/;

console.log(extractMatch(helloString, helloRegExp));

// Example 2
const codingString = "Extract the word 'coding' from this string.";
const codingRegex = /coding/;
console.log(extractMatch(codingString, codingRegex));