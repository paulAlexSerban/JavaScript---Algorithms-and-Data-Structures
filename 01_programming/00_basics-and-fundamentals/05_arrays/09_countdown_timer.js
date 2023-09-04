/**
 * Write a recursive function that returns an array containing the numbers 1 through n. 
 * This function will need to accept an argument, n, representing the final number. 
 * Then it will need to call itself with progressively smaller values of n until it reaches 1.
 * 
 * @param {Number} n 
 * @returns 
 */

// function countdown(n) {
//   if (n < 1) {
//     return [];
//   } else {
//     const arr = countdown(n - 1);
//     arr.unshift(n);
//     return arr;
//   }
// }

/**
 * function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.splice(0, 0, n);
    return arr;
  }
}
 */



 /**
  * function countdown(n){
   return n < 1 ? [] : [n].concat(countdown(n - 1));
}
  */



function countdown(n){
   return n < 1 ? [] : [n, ...countdown(n - 1)];
}
 
console.log(countdown(5)); // [5, 4, 3, 2, 1]