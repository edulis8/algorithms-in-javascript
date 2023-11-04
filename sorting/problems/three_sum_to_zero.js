
// Determine if any 3 integers in an array sum to 0.

// [3, 5, 8, 10, -9, -11, 16, 2] => true // [3, 8, -11]
// [3, 5, 4, 9, -16, -10] => false
// [3, -3, 4, 8, -13] => false
// [-2, -3, 5] => true

// I WAS TRYING TO MAKE THIS A  PERMUTATIONS PROBLEM WHICH IS EXPONETNTIAL
// [_,_] they sum to 0 exactly
// BRUTE FORCE IS 3 LOOPS OR O(n^3)

// decrease and conquer - 
// 3 [...search for 2 integers that sum to -3]

// for every element , are there 2 other elements that sum to negative

// search data strucuture - hash tables, BST

// hash table
// keys -> either numbers, indices, 
// if 5 exists in array

// put all sums of 2 items in array into into Set

// just put elements themselves into Set
// look at all pairs, sum them, does item exist in Set added to that = 0 

// quadratic best


function hasZeroSumTriplets(arr) {
  const n = arr.length;
  const numSet = new Set(arr);

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      const complement = -arr[i] - arr[j];
      
      if (numSet.has(complement)) {
        return true; // Found a triplet with a sum of 0
      }
    }
  }

  return false; // No triplet with a sum of 0 was found
}