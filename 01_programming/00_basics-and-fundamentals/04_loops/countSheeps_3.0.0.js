const countSheep = (length) => Array.from({ length }, (_, i) => ++i + " sheep...").join("");

// tests
console.log(countSheep(1));
console.log(countSheep(2));
console.log(countSheep(3));
