/**
 * 
 * https://leetcode.com/problems/search-insert-position/description/
 * 35. Search Insert Position
Solved
Easy
Topics
Companies
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.



 * @param {number[]} nums
 * @param {number} target
 * @return {number}

Maniel approach (from algo discord)
the "alternative approach" to binary search according to Wikipedia
 Instead of looking for a target, lets look for a boundary

 step 1) split world into two pieces, things too big and too small
 step 2) pick which side to use for things that are "just right"
 step 3) pick an initial lo and hi that match the inequality
 */
 var searchInsert = function(nums, target) {
  // nums[lo] < target <= nums[hi] // RULE OF THE UNIVERSE, how we'll divide the world

  // these should be "out of bounds"
  let lo = -1; // lo = 0 doesn't necessarily work
  let hi = nums.length;

  while(lo + 1 != hi) {
      let mid = Math.floor((lo + hi) / 2);

        // nums[lo] < target <= nums[hi]
      if (nums[mid] < target) {
          lo = mid;
      } else {
          hi = mid;
      }
  }
  return hi;
};

function binarySearch(array, target) {
    let lo = -1;
    let hi = array.length;

    while (lo + 1 != hi) {
        const mid = Math.floor((lo + hi) / 2);

        // array[lo] < target <= array[hi]
        if (array[mid] < target) {
            lo = mid;
        } else {
            hi = mid;
        }
    }

    return hi;
}