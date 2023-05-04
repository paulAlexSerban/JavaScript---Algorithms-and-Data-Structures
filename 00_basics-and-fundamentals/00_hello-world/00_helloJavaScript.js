// This is a simple JavaScript function called `functionName`.
// The function takes a single argument `str`, which has a default value of "JavaScript".
// If no argument is passed to the function, it will use the default value.
function functionName(str = "JavaScript") {
  // The function concatenates "Hello " with the argument `str` and logs the result to the console.
  console.log("Hello " + str);
}

// Call the `functionName` function without passing any argument.
// Since no argument is provided, it will use the default value of "JavaScript" for `str`.
functionName(); // Output: Hello JavaScript

// Call the `functionName` function, passing the string "super JavaScript" as an argument.
// This time, the function will use the provided argument instead of the default value.
functionName("super JavaScript"); // Output: Hello super JavaScript
