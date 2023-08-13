/**
 * Insertion Sort

 */

function insertionSort(arr, comparator = (a, b) => a - b) {
    for (let i = 1; i < arr.length; i++) {
        let currVal = arr[i];
        let j = i - 1;
        // check if j >=0 first or it will break the comparator!!
        while (j >= 0 && comparator(arr[j], currVal) > 0) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = currVal;
    }
    return arr;
}


insertionSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
insertionSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
insertionSort([1, 2, 3]); // [1, 2, 3]
insertionSort([]);
 
var nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
insertionSort(nums); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]
 
var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
 
function strComp(a, b) {
  if (a < b) { return -1;}
  else if (a > b) { return 1;}
  return 0;
}
 
insertionSort(kitties, strComp); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]
 
var moarKittyData = [{
  name: "LilBub",
  age: 7
}, {
  name: "Garfield",
  age: 40
}, {
  name: "Heathcliff",
  age: 45
}, {
  name: "Blue",
  age: 1
}, {
  name: "Grumpy",
  age: 6
}];
 
function oldestToYoungest(a, b) {
  return b.age - a.age;
}
 
insertionSort(moarKittyData, oldestToYoungest); // sorted by age in descending order

/**
 * This function uses the insertion sort algorithm to sort an array of values. The algorithm works 
 * by starting at the second element in the array and comparing it to the elements before it. 
 * If the current element is smaller (according to the comparator function) than the previous element, 
 * it "inserts" the current element in the correct place in the sorted portion of the array by shifting 
 * the larger values to the right. This process is repeated for each element in the array.
 * 
 * The time complexity of insertion sort is O(n^2) in the worst-case scenario (when the array is sorted 
 * in descending order), as for every iteration of the outer loop, we may have to compare and move each of 
 * the already sorted elements. However, insertion sort has a best-case time complexity of O(n) when the 
 * array is already sorted, making it an efficient algorithm for sorting nearly-sorted arrays.
 * 
 * The space complexity is O(1), as it only uses a fixed amount of additional space to store the 
 * current value and the index for the inner loop.
 */