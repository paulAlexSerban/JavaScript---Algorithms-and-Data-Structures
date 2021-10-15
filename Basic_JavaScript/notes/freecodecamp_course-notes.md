# FreeCodeCamp - JavaScript Algorithms and Data Structures

## Basic JavaScript

JavaScript is a high-level programming language that all modern web browsers support. It is also one of the **core technologies** of the web along with HTML and CSS.

### Comment your JavaScript code

- comments are lines of code that JavaScript will intentionally ignore;
- comments are a great way to leave notes to yourself and to other people who will later need to figure out what that code does

```javascript
// inline comment
/* this a
multiline comment */
```

**Best Practice**

- as you write code, you should regularly add comments to clarify the function of parts of your code

### Variables

- variables allow computers to store and manipulate data in a dynamic fashion, they do this by using a 'label' to point to the other data rather to the data itself

#### The Assignment Operator

- the _assignment operator_ is used to store values in variables;
- the _assignment operator_ goes from **right** to **left**, everything to the right of the `=` is resolved before the value is assigned to the variable to the left of the operator;

```javascript
var myVar = 5;
var myNum = myVar;
```

##### Note

- when JS variables are declared, they have the initial value of `undefined` - if you do a mathematical operation on an `undefined` variable, your result will be `NaN` which means `Not a Number`;
- if you concatenate a string with an `undefined` variable, you will get a string of `undefined`;
- all variables and function names are case-sensitive;

**Best Practice**

- use _camelCase_ to write variable names in JavaScript

#### Use Bracket Notation to find a character in a string

- _bracket notation_ is a way to get a character at a specific _index_ within a string;
- most modern programming languages, like JavaScript, don't stat counting at 1 like humans, they start at 0, this is referred to as _zero-based_ indexing;

### Arrays

- with JavaScript `arrays` variables, we can store several pieces of data in one place;
- to start an `array` declaration with an opening square bracket, end it with a closing square bracket, and put a comma between each entry;

```javascript
let sandwich = ["peanut butter", "array", "bread"];
```

#### Nest one array within another array

- you can also create _multi-dimensional array_

```javascript
let multiArray = [
  ["the universe", 42],
  ["everything", 101010],
];
```

#### Access Array Data with Indexes

- we can access the data inside arrays using indexes and the bracket notation;

```javascript
let array = [50, 70, 80];
array[0]; // equals 50
let data = array[1]; // equals 60
```

- accessing multi-dimensional arrays

```javascript
let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];
arr[3];
arr[3][0];
arr[3][0][1];
```

##### Note

- there should not be any spaces between the array name and the square brackets;
- unlike strings, the entries of arrays are _mutable_ and can be changed freely;

#### Manipulate Arrays

- `push()` - used to _append_ data to the end of an array;
- `pop()` - used to _pop_ a value off the end of an array;
- `shift()` - used _remove_ the first element of an array;
- `unshift()` - used to _add_ an element at the beginning of the array;

### Functions

- in JavaScript, we can divide up our code into reusable parts called `function`;

```javascript
function functionName() {
  console.log("Hello World");
}
```

- to call or invoke the function you have to use its name followed by parentheses, like this: `functionName()`

#### Passing values to functions with arguments

- _parameters_ are variables that act as placeholders for the values that are to be input to a function when it is called;
- the actual values that are input (or 'passed') into a function when it is called are known as arguments;

```javascript
function funcArguments(paramOne, paramTwo) {
  console.log(paramOne, paramTwo);
}
```

#### Global Scope and Functions

- in JS, _scope_ refers to the visibility of variables;
- variables which are defined outside of a function block have _global scope_ - this means they can be seen everywhere in you JS code;
- variables which are declared within a function, as well as the functions parameters have local scope - this means, they are only visible within that function

```javascript
function localScope() {
  let loc = "foc";
  console.log(loc);
}
localScope(); // logs 'foo'
console.log(loc); // loc is not defined
```

##### Note

    - variables which are used without the `var` keyword are automatically created in the *global* scope - this can create unintended consequences elsewhere in your code or when running a function again;
    - **Global** VS **Local** - it is possible to have both local and global variables with the same name - when you do this, the *local* variables takes a precedence over the *global* variable

#### Return a value from a function with Return

- you can use a `retrun` statement to send a value back out of a function;

```javascript
function plusThree(num) {
  return num + 3;
}
let answer = plusThree(5); // 8
```

- `undefined` value returned from a function - in the case that a function does not have a `return` statement, when you call it, the function processes the inner code but returned value is `undefined`;

```javascript
let sum = 0;
function addSum() {
  sum = sum + num;
}
addSum(3); // sum will be modified but returned value is undefined
```

- recalling the fact that everything that is on the right of the assignment sign is resolved before the value is assigned - this means we can take the return value of a function and assign ot to a variable;

```javascript
let changed = 0;
function change(num) {
  return (num + 5) / 3;
}
changed = change(10);
```

#### Return Early Pattern for Functions

- when a `return` statement is reached, the execution of the current function stops and control returns to the calling location;

```javascript
function myFun() {
  console.log("Hello");
  return "World";
  console.log("bye-bye"); // 'bye-bye' is never output because ht4e function exists at the `return` statement;
}
myFun(); // calling the function;
```

### Conditional Logic

#### Comparison operators

- `==` - _equality_ - compares two values and returns `true` or `false`;
- `===` - _strict equality_ - unlike the _equality_ operator which attempts to convert both values being compared to a common type, the _strict equality_ operator does not perform a type conversion;
- `!=` - _inequality_ -it is the opposite of the equality operator - it means 'not equal';
- `!==` - _strict inequality_ - is the logical opposite of the _strict equality_ - it means 'strictly not equal`;
- `>` - _greater than_ - compares the values of two numbers;
- `>=` - _greater than or equal to_ - compares the values of two numbers;
- `<` - _less than_ -
- `<=` - _less than or equal to_ -

#### Logical operators

- logical operators are used to test more than one thing at time;
- `&&` - _and_ - returns `true` if and only if the operands to the left and right of it are true;

```javascript
if (num > 5 && num < 10) {
  return "Yes";
}
return "No";
```

- `||` - _or_ - returns `true` if either of the operands is `true`;

```javascript
if (num > 10 || num > 5) {
  return "No";
}
return "Yes";
```

#### If Statements

- `if` statements are used to make decisions in code;
- the keyword `if` tells JavaScript to execute the code in the curly braces under certain conditions, defined in the parentheses - these conditions are known as `boolean` condition and they may only `true` or `false`;

```javascript
function test(myCondition) {
  if (myCondition) {
    return "It was true";
  }
  return "It was false";
}
test(true); // returns 'It was true'
test(false); // returns 'It was false'
```

#### Else Statements

- when a condition for an `if` statement is `true`, the block of code following is executed - with and `else` statement, an alternate block of code can be executed;

```javascript
if (num > 10) {
  return "Bigger than 10";
} else {
  return "10 or Less";
}
```

#### Else...If Statements

- for multiple conditions that need to be addressed, you can chain `if` statements together with `else if` statements;

```javascript
if (num > 15) {
  return "Bigger than 15";
} else if (num < 5) {
  return "Smaller than 5";
} else {
  return "Between 5 and 15";
}
```

#### Conditional (ternary) operator

- The conditional operator, also called the ternary operator, can be used as a one line if-else expression.
  `condition ? statement-if-true : statement-if-false;`

```javascript
function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater";
}
```

- Multiple conditional (ternary) operators can be used

```javascript
function findGreaterOrEqual(a, b) {
  return a === b
    ? "a and b are equal"
    : a > b
    ? "a is greater"
    : "b is greater";
}
```

```javascript
function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}
checkSign(10);
```

### Switch Statements

- for many options to choose from, use a _switch statement_;
- a _switch_ statement tests a value and can have many `case` statements which defines various possible values;
- statements are encountered from the first matched `case` value until a `break` is encountered;
- in a switch statement you may NOT be able to specify all possible values as `case` statements -but you can add a `default` statement which will be executed if no matching `case` statements are found (think of it as the final `else statement in an `if/else` chain);

```javascript
switch (lowercaseLetter) {
  case "a":
    console.log("A");
    break;
  case "b":
    console.log("B");
    break;
  default:
    console.log("default");
    break;
}
```

- `case` values are tested with \*strict equality (===) - the `break` tells JS to stop executing statements, if the `break` is omitted, the next statement will be executed;
- if the `break` statement is omitted from a `switch` statement's `case`, the following `case` statement(s) are executed until a `break` is encountered - this is useful if you have multiple inputs with the same output;

### JavaScript Objects

- objects are similar to `arrays`, except that instead of using indexes to access and modify their data, you access the data in objects through wat are called `properties`;
- objects are useful for storing data in a structured way, and ca represent real world objects, like a cat.

```javascript
var cat = {
  name: "Whiskers",
  legs: 4,
  tails: 1,
  enemies: ["water", "dogs"],
};
```

**Note**

- if your object has any non-string properties, JavaScript will automatically typecast them as string;

#### Accessing Object Content

##### Properties with Dot Notation

- we use he dot notation when you want to access a property of which you know the name you are trying to access ahead of time;

```javascript
var myObj = {
  prop1: "val1",
  prop2: "val2",
};
var prop1val = myObj.prop1; // val1
var prop2val = myObj.prop2; // val2
```

##### Properties with Bracket Notation

- another way to access the properties of an object is _bracket notation_ ([]);
- if the name you are trying to access has a space in its name, you will need ot use bracket notation;

```javascript
var myObj = {
  "space name": "Kirk",
  "more space": "Spock",
  noSpace: "USS Enterprise",
};
var spaceName = myObj["space name"]; // Kirk
var moreSpace = myObj["more space"]; // Spock
var noSpace = myObj["noSpace"]; // USS Enterprise
```

**Note**

- property names with spaces in them must be in quotes (single or double);

##### Properties with Variables

- another use of bracket notation on objects is to access a property which is stored oas the value of a variable - this can be very useful for iterating through an object's properties or when accessing a lookup table;

```javascript
let dogs = {
  Fido: "Mutt",
  Hunter: "Doberman",
  Snoopier: "Beagle",
};
let myDog = "Hunter";
let myBreed = dogs[myDog];
console.log(myBreed); // Doberman
```

- another way to use this concept is when the property's name is collected dynamically during the program execution, as follows:

```javascript
let someObj = {
  propName: "John",
};

function propPrefix(str) {
  var s = "prop";
  return s + str;
}

let someProp = propPrefix("Name"); // someProp now holds the value 'propName'
console.log(someObj[someProp]); // 'John'
```

**Note**

- we do not use quotes around the variable name when using it to access the property because we are using the value of the variable, not the name;

##### Accessing nested objects

- the sub-properties of objects can be accessed by chaining together the dor or bracket notation;

```javascript
var ourStorage = {
  desk: {
    drawer: "stapler",
  },
  cabinet: {
    "top drawer": {
      folder1: "a file",
      folder2: "secrets",
    },
    "bottom drawer": "soda",
  },
};
ourStorage.cabinet["top drawer"].folder2; // "secrets"
ourStorage.desk.drawer; // "stapler"
```

##### Accessing nested arrays

- array bracket notation can be chained to access nested arrays

```javascript
var ourPets = [
  {
    animalType: "cat",
    names: ["Meowzer", "Fluffy", "Kit-Cat"],
  },
  {
    animalType: "dog",
    names: ["Spot", "Bowser", "Frankie"],
  },
];
ourPets[0].names[1]; // "Fluffy"
ourPets[1].names[0]; // "Spot"
```

#### Updating Object Properties

- you can also update an objects properties at any time just like you would update any other variable - you can use either dot notation or bracket notation to update;

```javascript
var ourDog = {
  name: "Camper",
  legs: 4,
  tails: 1,
  frinds: ["everythoing!"],
};
ourDog.name = "Happy Camper";
// OR
ourDog["name"] = "Happy Camper";
```

#### Add new properties to a JavaScript Object

- you can add new properties to existing JavaScript objects the same way you would modify them;

```javascript
let myDog = {
  name: "Happy Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
};
myDog.bark = "woof";
```

#### Delete properties from a JavaScript Object

- we can also delete properties from objects like this:

```javascript
let ourDog = {
  name: "Camper",
  legs: 4,
  tails: 1,
  friends: ["everything!"],
  bark: "bow wow",
};
delete ourDog.bark;
```

#### Using Objects for Lookups

- objects can be thought of as **key/value** storage, like a dictionary;
- if you have tabular data, you can use an object to 'lookup' values rather than a `switch` statement or an `if/else` chain;
- this is useful when you know that you input data is limited to a certain range;

```javascript
function phoneticLookup(val) {
  var result = "";
  var lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank",
  };
  result = lookup[val];
  return result;
}

phoneticLookup("charlie");
```

#### Testing objects for properties

- sometimes it is useful to check if the property of a given object exists or not;
- we use `.hasOwnProperty(propertyName)` method of an object to determine if that object has the given property name;
- `.hasOwnProperty()` returns `true` or `false` if the property is found or not;

```javascript
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh",
};
function checkObj(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
}
```

#### Manipulating Complex Objects

- JavaScript objects is one way to handle flexible data - they allow for arbitrary combinations of strings, numbers, booleans, arrays, functions, and objects

```javascript
let myMusic = [
  {
    artist: "Daft Punk",
    title: "Homework",
    release_year: 1997,
    formats: ["CD", "Cassette", "LP"],
    gold: true,
  },
];
/*
- this is an array which contains an object inside it
- the object has various pieces of metadata about an album
- it also has a nested "formats" array
*/
```

**Note**

- objects hold data in a key-value formats
- JavaScript Object Notation or JSON is a related data interchange format to store data
- remember to place a comma after every object in the array, unless it is athe ;last object in the array

### Loops

- you can run the same code multiple times by using a loop

#### While Loops

- are called "while" loops because the loop runs "while" a specified condition is true and stops once that condition s no longer true;

```javascript
var ourArray = [];
var i = 0;
while (i < 5) {
  ourArray.push(i);
  i++;
}
/*
in the example above, the WHILE loop will execute 5 times and append the numbers 0 through 4 to ourArray;
*/
```

```javascript
var myArray = [];
let i = 5;
while (i >= 0) {
  myArray.push(i);
  i--;
}
/*
- add the numbers 5 through 0 (inclusive) in descending order to myArray using a while loop;
*/
```

#### For Loops

- the most common type of JavaScript loop is called a for loop because it runs "for" a specific number of times;

```javascript
for ([initialization]; [condition]; [final-expression])
/*
- initialization - statement to execute one time before the loop starts - it is typically used to define and setup your loop variable;

- condition - statement to evaluate at the beginning of every loop iteration and will continue as long as it evaluates to true - when condition is false at the start of the iteration, the loop will stop executing - this means if condition starts as false, your loop will never execute

- final-expression - statement that is executed at the end of every loop iteration, prior to the next condition check;
*/
```

```javascript
var ourArray = [];
for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}
/*
- the example will initialize i = 0 and iterate while out condition i < 5 is true
- will increment i by 1 in each loop iteration with i++ as our final-expression
*/
```

```javascript
// Push the odd numbers from 1 through 9 to myArray using a for loop
let myArray = [];
for (let i = 1; i <= 9; i += 2) {
  myArray.push(i);
}
```

```javascript
// Push the odd numbers from 9 through 1 to myArray using a for loop.
let myArray = [];
for (let i = 9; i >= 1; i -= 2) {
  myArray.push(i);
}
```

##### Iterate Through an Array with a For Loop

```javascript
// Use a for loop to add the value of each element of the myArr array to total
let myArr = [2, 3, 4, 5, 6];
let total = 0;
for (let i = 0; i < myArr.length; i++) {
  total = total + myArr[i];
}
```

```javascript
// This code will output each element of the array arr to the console
var arr = [10, 9, 8, 7, 6];
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

##### Nesting For Loops

- for a multi-dimensional array, you can use the same logic as the prior way-point to loop through both th array and any sub-arrays

```javascript
var arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
```

```javascript
function multiplyAll(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return product;
}
multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);
//function multiplyAll so that it multiplies the product variable by each number in the sub-arrays of arr
```

#### Do...While Loops

- it is called a do...while loop because it will first do one pass of the code inside the loop no matter what, and then continue to run the loop while the specified condition evaluates to true;

```javascript
let ourArray = [];
let i = 0;
do {
  ourArray.push(i);
  i++;
} while (i < 5);
```

### Recursion

- recursion is the concept that a function can be expressed in terms of itself;

```javascript
function multiply(arr, n) {
  if (n <= 0) {
    return 1;
  } else {
    return multiply(arr, n - 1) * arr[n - 1];
  }
}
/**
 * In the base case, where n <= 0, it returns 1.
 * For larger values of n, it calls itself, but with n - 1.
 * That function call is evaluated in the same way, calling multiply again until n <= 0
 */
```

**Note**

- Recursive functions must have a base case when they return without calling the function again (in this example, when n <= 0), otherwise they can never finish executing.

```javascript
function sum(arr, n) {
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
}
/**
 * The if statement checks to see if sum is evaluating the base case, n <= 0, or not.
 * If it is, then sum returns the answer, 0 - the sum of elements from 0 to 0 inclusive.
 * Otherwise, it recurses by evaluating a simpler function call, sum(arr, n - 1).
 * Once that returns it adds a single array element, arr[n - 1], to it and returns that sum.
 */
```

### Standard Built-in objects

#### Numbers and Dates

##### Math.random()

- JavaScript has a `Math.random()` function that generates a random decimal number between 0 (inclusive) and not quite up to 1 (exclusive).
- Thus `Math.random()` can return a 0 but never quite return a 1

```javascript
function randomFraction() {
  var result = 0;
  // Math.random() can generate 0. We don't want to     return a 0,
  // so keep generating random numbers until we get one     that isn't 0
  while (result === 0) {
    result = Math.random();
  }
  return result;
}
```

```javascript
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);
function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}

/**
 * Code Explanation
 * ================
 * We need to use Math.floor() with Math.random() to generate and return a random whole number between 0 and 9.
 * Putting Math.floor() and Math.random() together;
 */
```

```javascript
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
}

/**
 * Code Explanation
 * ================
 * Math.random() generates our random number between 0 and ≈ 0.9.
 * Before multiplying it, it resolves the part between parenthesis (myMax - myMin + 1) because of the grouping operator ( ).
 * The result of that multiplication is followed by adding myMin and then “rounded” to the largest integer less than or equal to it (eg: 9.9 would result in 9)
 *
 * Example run
 * ===========
 * If the values were myMin = 1, myMax= 10, one result could be the following:
 * Math.random() = 0.8244326990411024
 * (myMax - myMin + 1) = 10 - 1 + 1 -> 10
 * a * b = 8.244326990411024
 * c + myMin = 9.244326990411024
 * Math.floor(9.244326990411024) = 9
 */
```

#### Global Function Properties

##### parseInt()

- The parseInt() function parses a string and returns an integer

```javascript
function convertToInteger(str) {
  return parseInt(str);
}
convertToInteger("56");
```

- The parseInt() function parses a string and returns an integer. It takes a second argument for the radix, which specifies the base of the number in the string. The radix can be an integer between 2 and 36.

```javascript
function convertToInteger(str) {
  return parseInt(str, 2);
}
convertToInteger("10011");
/**
 * Code Explanation
 * ================
 * The function takes str and returns an integer instead of a string but “understanding” its a binary number instead of a decimal one thanks to the radix parameter (2).
 */
```

<details>
<summary>Practice Projects</summary>
  test
  one
  bingo
</details>
