


// BRUTE FORCE, QUADRATIC
function maxSubArray(nums) {
    let maxSum = nums[0];
    for (let i = 0; i < nums.length; i++) {
      let sum = nums[i];
      maxSum = Math.max(maxSum, sum);
      for (let j = i + 1; j < nums.length; j++) {
        sum += nums[j];
        maxSum = Math.max(maxSum, sum);
      }
    }
    return maxSum;
  };



