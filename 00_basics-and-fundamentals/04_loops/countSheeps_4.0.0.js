function countSheeps(arrayOfSheeps) {
  let count = 0;
  for (let i = 0; i < arrayOfSheeps.length; i++) {
    if (arrayOfSheeps[i] === true) {
      count++;
    }
  }
  return count;
}

console.log(
  countSheeps([
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
  ])
); // Output: 17
console.log(
  countSheeps([
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
  ])
); // Output: 22
console.log(
  countSheeps([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ])
); // Output: 0
