/**
 * @param {number} n
 * @return {number}
 * 
 * As combinatorial problem, it is 2^n time 
 * Getting "all combinations" is considered brute force!
 * 
 * 
Approach 2: Recursion with Memoization (LINEAR!)
Algorithm

In the previous approach we are redundantly calculating the result for every step. Instead, we can store the 
result at each step in memo array and directly returning the result from the memo array whenever that function is called again.
In this way we are pruning recursion tree with the help of memo array and reducing the size of recursion tree up n.


REMEMBER "pruning recursion tree with the help of memo array"
 * 
 Complexity Analysis

Time complexity : O(n). Size of recursion tree can go up to n

Space complexity : O(n). The depth of recursion tree can go up to n.


 * 
 */
var climbStairs = function (n) {
  // let result = 0;
  const memo = [];
  const res = helper(0, '');
  return res;

  // when using memo, seems we have to return from recursive function, not use global result counter
  function helper(steps) {
      // if we've gone too far, return 0
      if (steps > n) return 0;
      // if we've hit n, we have an answer
      if (steps === n) {
          console.log('returning first time', {steps, memo})
          return 1;
      }
      if (memo[steps]) {
          console.log('returning from memo', {steps, memo})
          return memo[steps];
      }

      let one = helper(steps + 1, memo); //0,1,2,3
      let two = helper(steps + 2, memo);
      memo[steps] = one + two;
      console.log('memo set', {steps, one, two, memo})
      return memo[steps];
  }
};


// TWO TREES
// i is steps (don't confuse steps with LEVELS in this TREE)
// i
//0   1 or     
//    /\
//1   1  2.  SUM here is 3, return and memoize
//   /
//2  1 SUM here is 3, return and memoize

// or
// i
// 0   2
//   /
//1  1
          // 0. 1.  2
// { memo: [ 3, 2, 1 ] }


// 2(choices) _ _ _ _ _ ...n
// 2^n





// combinations/permutations with backtracking
// 0(2^n) but optimized. maybe memoization?
// add 1 or add 2 for each "slot"
// 1 2 3

//    1 or       
//    /\
//   1  2
//   /
//  1

//   2
//   /\
//  1. 2(invalid because > 3)

