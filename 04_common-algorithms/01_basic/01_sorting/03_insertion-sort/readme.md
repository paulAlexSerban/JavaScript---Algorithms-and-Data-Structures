# Insertion sort
- it build up the sort by gradually creating a larger half which is always sorted

## Pseudocode
- sort by picking the second element in the array
- now compare the second element with the one before and swap if necessary
- continue to the next element and if it is in the incorrect order, iterate the sorted potion (i.e. the left side) to place the element in the correct place
- repeat until the array is sorted

## Time Complexity
- generally it is `O(n^2)`