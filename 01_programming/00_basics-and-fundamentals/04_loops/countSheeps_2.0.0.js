countSheep = (n) => [...Array(n).keys()].map((x) => `${x + 1} sheep...`).join``;

// tests
console.log(countSheep(1));
console.log(countSheep(2));
console.log(countSheep(3));
