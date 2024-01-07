// GREEDY
// TWO-POINTER PASS

// Complexity Analysis

// Time complexity: O(n)O(n)O(n). Single pass.

// Space complexity: O(1)O(1)O(1). Constant space is used.

/**
 * @param {number[]} height
 * @return {number}
 */

 
 var maxArea = function(height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
      const width = right - left;
      const area = Math.min(height[left], height[right]) * width;
      maxArea = Math.max(area, maxArea);

      if (height[left] <= height[right]) {
          left++;
      } else {
          right--;
      }
  }
  return maxArea;
};