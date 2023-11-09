
/**
 * 
 * 219. Contains Duplicate II
Easy
5.6K
2.9K
company
Facebook
company
Adobe
company
Amazon
Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

 

Example 1:

Input: nums = [1,2,3,1], k = 3
Output: true
Example 2:

Input: nums = [1,0,1,1], k = 1
Output: true
Example 3:

Input: nums = [1,2,3,1,2,3], k = 2
Output: false
 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
0 <= k <= 105



 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 * 
 * LINEAR TIME, LINEAR SPACE
 */
var containsNearbyDuplicate = function (nums, k) {
  // sliding window with set
  // window will contain k numbers
  // if a dup is found within that window, return true
  const window = new Set();
  for (let i = 0; i < nums.length; i++) {
    // window will only have valid numbers of distance k from curr element
    if (window.has(nums[i])) {
      return true; // dup found
    }
    window.add(nums[i]);
    if (window.size > k) {
      // maintain window at correct size, which is k
      window.delete(nums[i - k])
    }
  }
  return false;
};

// Input: nums = [1,2,3,1], k = 3
// Output: true

// window
// 1
// 1,2
// 1,2,3
// 1,2,3,1 // dup found!

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false

// window
// 1
// 1,2
// 1,2,3 -> size greater than k which is 2
// 2,3 removal at i - k, which is 2-2=0
// 2,3,1 -> 
// 3,1 removal at i-k, which is 3-2=1
// 3,1,2 ->
// 1,2 removal at i-k, which is 4-2=2
// 1,2,3 -> 
// 2,3 removal at i-k, which is 5-2=3