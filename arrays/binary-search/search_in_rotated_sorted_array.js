/**
 * 

33. Search in Rotated Sorted Array
Medium
Topics
Companies
There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.



 THE ELEGANT ONE BINARY SEARCH SOLUTION
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// The main function that initiates the binary search in a rotated sorted array.
// It takes an array (nums) and a target value as input.
// Returns the index of the target if found, or -1 if not found.
function search(nums, target) {
  // It calls the helper function with the initial bounds of the array (0 and nums.length - 1).
  return helper(nums, target, 0, nums.length - 1);
}

// The helper function performs the actual binary search.
// It takes an array, a target value, and the start and end indices of the search space.
function helper(nums, target, start, end) {
  // Base case: if the start index is greater than the end index, the target is not in the array.
  if (start > end) {
    return -1; // Element not found
  }

  // Calculate the middle index.
  let mid = Math.floor((start + end) / 2);

//   Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// [4,5,6,7,0,1,2],
// [4,5,6,7,0,1,2],

  // If the element at the middle index is the target, return the middle index.
  if (nums[mid] === target) {
    return mid; // Element found at index `mid`
  }

  // If the left half of the array is sorted
  if (nums[start] <= nums[mid]) {
    // If the target is in the range of the left half, search the left half
    if (target >= nums[start] && target < nums[mid]) {
      return helper(nums, target, start, mid - 1);
    } 
    // Otherwise, search the right half
    else {
      return helper(nums, target, mid + 1, end);
    }
  } 
  // If the right half of the array is sorted
  else {
    // If the target is in the range of the right half, search the right half
    if (target > nums[mid] && target <= nums[end]) {
      return helper(nums, target, mid + 1, end);
    } 
    // Otherwise, search the left half
    else {
      return helper(nums, target, start, mid - 1);
    }
  }
}




// my initial attempt:
var search = function (nums, target) {
  if (nums[0] > nums[nums.length - 1]) {
     return binarySearch(numms, target)
  } 

  const k = findPivot(nums[nums.length -1], target);
  // this is the pivot, num[k] is lowest value

  if (nums[k] === target) {
      return k;
  }

  const result = binarySearch(arr.slice(k + 1), target);
  if (result) return result;
  return binarySearch(arr.slice(0, k), target);

};

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



// could just be sorted
// do binary search.

// could be rotated.
// we know if there is ever a value smaller than

// possibly rotate at unknown pivot index k
// 0,1,2,4,5,6,7] might be rotated at pivot index 3 and become 

// [4,5,6,7,0,1,2].
//          ^

// output: the index.
// Input: nums = [4,5,6,7,0,1,2], target = 0
//                         k
//                         4
// Output: 4
// 
//
// 



// nums = [0,1,2,3,4], target = 0

// [1,2,3,4,  0]
//      ^

// maybe we can find out if rotated just by looking at first and last index
// first value
// we go left if target < than nums[0]

// BS1
// what if we binary search for the pivot
// a value i, where i - 1 is greater than i
// find K

// BS2
// if we have K, we know k --> end is smaller, so we search there if value is smalller
// at some point we know to search -----> in start to k-1 OR k+1 to end



// find pivot
// finds leftmost el that <= to the last element of nums

function findPivot(lastEl, nums) {
  // [4,5,6,7,0,1,2],
  // check midpoint, if value there > lastEl
  // check right
  // 
  // [4,0,1,2,3]

  binarySearch1(0, nums.length - 1)

  function binarySearch1(start, end) {
      const mid = Math.floor((start - end) / 2);

      // finding the target
      if (nums[mid] < nums[mid - 1]) {
          return mid;
      }

      if (nums[mid] > lastEl) {
          // check right
          return binarySearch(mid + 1, end)
      } else {
          // check left
          return binarySearch(start, mid - 1)
      }
  }
}


// then binary search