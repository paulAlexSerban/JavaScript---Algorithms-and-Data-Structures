// const factorial = (num) => {
//   let total = 1;
//   for (let i = num; i > 1; i--) {
//     total *= 1;
//   }
//   return total;
// };

const factorial = (num) => {
  if (num === 1) return 1; // define the base case - WARNING: if missing you get into an infinite loop
  return num * factorial(num - 1);
};

console.log(factorial(6));
