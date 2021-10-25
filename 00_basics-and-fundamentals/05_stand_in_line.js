/**
 * Manipulate Arrays
 * `push()` - ADD data at the end of the array
 * `pop()` - REMOVE an element of the END pf an array
 * `shift()` - REMOVE the FIRST element of an array
 * `unshift()` - ADD an element at the START of an array
 * 
 * In Computer Science a queue is an abstract Data Structure where items are kept in order. 
 * New items can be added at the back of the queue and old items are taken off from the front of the queue.
 * 
 * CODE EXPLANATION
 * (1) Push item at the end of arr.
 * (2) Call the shift() method on arr to get the first item and store it in removed.
 * (3) Return removed.
 * 
 * @param  {Array } arr 
 * @param { Number } item 
 * @returns 
 */

function nextInLine(arr, item) {
  arr.push(item); // (1)
  let removed  = arr.shift(); // (2)
  return removed; // (3)
}

let testArray = [1,2,3,4,5];

console.log(nextInLine(testArray, 6));

/**
 * Example Run
 * - Test nextInLine([2,1]); runs.
 * - The nextInLine function is called. arr becomes [2]. item becomes 1.
 * - arr.push(item); Pushes 1 to [2]. So arr is now [2,1].
 * - var removed = arr.shift(); removes the first element. So arr is now [1]. 2 has been removed and is stored in removed.
 * - return removed; 2 is returned.
 *  Note: 
 *    - You don’t actually need the variable removed. The element removed can be returned directly using return arr.shift();.
*/