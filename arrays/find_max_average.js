/**
 * 
 * TIME: LINEAR
 * SPACE: CONSTANT
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  // put initial k into array, compute init windowsum
  // loop from k to end
  // windowsum : add new val, subtract discarded val
  // keep track of max global window sum
  // return max /k

  let windowSum = 0;
  let maxWindowSum = 0;
  for (let i = 0; i < k; i++) {
      windowSum += nums[i];
  }
  maxWindowSum = windowSum; // init max

  for (let j = k; j < nums.length; j++) {
      windowSum += nums[j]; // add new
      windowSum -= nums[j-k]; // discard old
      maxWindowSum = Math.max(maxWindowSum, windowSum); // keep global max
  }

  return maxWindowSum / k;
};