/*
704. Binary Search

Given an array of integers nums which is SORTED in ascending order, and an integer target, write a function to search target in nums. 
If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1

*/

// TIME: O(logn)
// Returns index of target or -1 if not found.
function binarySearch(arr, target) {
  return helper(arr, target, 0, arr.length - 1);
}

function helper(arr, target, start, end) {
  if (start > end) {
    return -1; // Element not found
  }

  const mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) {
    return mid; // Element found at index `mid`
  } else if (arr[mid] < target) {
    return helper(arr, target, mid + 1, end); // Search the right half. IMPORTANT add 1 to mid.
  } else {
    return helper(arr, target, start, mid - 1); // Search the left half. IMPORTANT subtract 1 from mid.
  }
}



// attempt 2, blind, i had things mixed up, be careful to think through what you're doing!
function binarySearch(arr, target) {
  return helper(0, arr.length - 1);

  function helper(start, end) {

    if (start > end) return -1;

    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      // value at mid is smaller than target, we need to search right/larger half of array
      helper(mid + 1, end);
    } else {
      // value at mid is greater than target, we need to search the left/smaller half of array
      helper(start, mid - 1);
    }
  }
}
