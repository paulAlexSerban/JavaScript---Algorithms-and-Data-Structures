/**
 * returns the digit in a num at the given place value
 */

const getDigit = (num, i) => {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};

// console.log(getDigit(12345, 0));
// console.log(getDigit(12345, 1));
// console.log(getDigit(12345, 2));
// console.log(getDigit(12345, 3));
// console.log(getDigit(12345, 4));
// console.log(getDigit(12345, 5));

/**
 * returns the number of digits in num
 */
const digitCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

// console.log(digitCount(1));
// console.log(digitCount(25));
// console.log(digitCount(314));

/**
 * given an array of numbers, returns the number of digits in the largest numbers in the list
 */

const mostDigits = (nums = []) => {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
};

// console.log(mostDigits([1234, 56, 7]));
// console.log(mostDigits([1, 1, 11111, 1]));
// console.log(mostDigits([12, 43, 56, 78]));

module.exports = { getDigit, digitCount, mostDigits };
