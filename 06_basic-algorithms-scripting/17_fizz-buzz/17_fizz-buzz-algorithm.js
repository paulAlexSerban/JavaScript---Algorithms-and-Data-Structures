const fizzBuzz = (input) => {
  if (typeof input !== "number") return "Not a number";
  if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";
  if (input % 3 === 0) return "Fizz";
  if (input % 5 === 0) return "Buzz";
  return input;
};

// if number is divisible by 3 => Fizz
console.log(fizzBuzz(6));
// if number is divisible by 5 => Buzz
console.log(fizzBuzz(5));
// if number is divisible by 3 and 5 => FizzBuzz
console.log(fizzBuzz(15));

// if number is NOT divisible by 3 NOR 5 => the input number
console.log(fizzBuzz(7));

// if a string is passed => 'Not a number'
console.log(fizzBuzz("7"));
