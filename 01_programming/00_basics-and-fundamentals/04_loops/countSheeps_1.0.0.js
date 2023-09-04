const countSheep = (num) => {
  let result = "";
  for (let i = 1; i <= num; i++) {
    result += `${i} sheep...`;
  }
  return result;
};

// tests
console.log(countSheep(1));
console.log(countSheep(2));
console.log(countSheep(3));
