
// 162. Find Peak Element
// Solved
// Medium
// Topics
// Companies
// A peak element is an element that is strictly greater than its neighbors.

// Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

// You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.

// You must write an algorithm that runs in O(log n) time.

 

// Example 1:

// Input: nums = [1,2,3,1]
// Output: 2
// Explanation: 3 is a peak element and your function should return the index number 2.
// Example 2:

// Input: nums = [1,2,1,3,5,6,4]
// Output: 5
// Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.


// . In this case, we use a modification of this simple Binary Search to our advantage. We start off by finding the middle element, midmidmid from the given numsnumsnums array. If this element happens to be lying in a descending sequence of numbers. or a local falling slope(found by comparing nums[i]nums[i]nums[i] to its right neighbour), it means that the peak will always lie towards the left of this element. Thus, we reduce the search space to the left of midmidmid(including itself) and perform the same process on left subarray.

// If the middle element, midmidmid lies in an ascending sequence of numbers, or a rising slope(found by comparing nums[i]nums[i]nums[i] to its right neighbour), it obviously implies that the peak lies towards the right of this element. Thus, we reduce the search space to the right of midmidmid and perform the same process on the right subarray.



/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  // brute force: loop thru each element, return first that is greater than both neighbors

  // divide and conquer
  // binary search?
  // look for a "mid" that is greater than both neighbors, or greater than one neighbor but at the edge
  // but how do we know whether to recurse left or right??

  // MAYBE preprocess original array
  // THEN make a SORTED COPY
  // map of 
  // {
  //     index: value
  // }

  // descending slope go left
  // ascending slope go right - 
  // if you're in a valley - both sides are higher - just pick one
  // given a point we have to decide if we are ascending or descending slope

  // [3,2,1, 1 ,5,6,10]
  // [2,5,9,1,2,3,7,3]

  return binarySearch(0, nums.length - 1);

  function binarySearch(start, end) {
      // if (start > end) {
      //     return -1;
      // }
      const mid = Math.floor((start + end) / 2);
      const midValue = nums[mid];
      const beforeValue = nums[mid - 1] || -Infinity;
      const afterValue = nums[mid + 1] || -Infinity;
      if (midValue > beforeValue && midValue > afterValue) { // peak
          return mid;
      } else if (midValue < afterValue) {
          // ascending or a valley, go to right
          return binarySearch(mid + 1, end);
      } else { // if (midValue > beforeValue) 
          // descending, go to left
            return binarySearch(start, mid - 1);
      }

  }
};

// Example 1:

// {
//     0: 1,
//         1: 2,
//             2: 3
//     3: 1
// }

// Input: nums = [1,2,3,1]
// Output: 2
// Explanation: 3 is a peak element and your function should return the index number 2.
//  SORTED ~ [1,1,2,3]


//{ '0': 1, '1': 2, '2': 1, '3': 3, '4': 5, '5': 6, '6': 4 }
// Example 2:
// Input: nums = [1,2,1, 3 ,5,6,4]
//                       ^
// Output: 5
// Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.
// SORTED ~ [1, 1, 2, 3, 4, 5, 6]
//                    ^
// look in map
// map[index - 1] = 1
// map[index + 1] 



// OTHER EXAMPLE
// [4,2,3]
// output: 4, or 3