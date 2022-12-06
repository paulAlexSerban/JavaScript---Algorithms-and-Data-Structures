const helpers = require("./radixHelpers");

const radixSort = (nums = []) => {
  let maxDigitCount = helpers.mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = helpers.getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
};

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));
