/**
 * 
 * TODO FINISH AND WATCH VIDEOS
 * also https://leetcode.com/problems/k-closest-points-to-origin/
 * 
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    
};

// can't use division

// brute force quadratic
// iterate
    // iterate ignoring nums[i] and multiply all other values




left array which has each value mulitplied by last value
1,2,6,24
right array which goes backwards
24,24,12,4 


 product[i] = left[i-1] * right [i+1]

1*24...1*12...2*4...6*1 (i guess?)

 [24,12,8,6]


 // you are taking the previous number