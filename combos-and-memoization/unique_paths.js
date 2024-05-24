/**
 * There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). 
 * The robot can only move either down or right at any point in time.

Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

The test cases are generated so that the answer will be less than or equal to 2 * 109.

 

Example 1:


Input: m = 3, n = 7
Output: 28
Example 2:

Input: m = 3, n = 2
Output: 3
Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Down -> Down
2. Down -> Down -> Right
3. Down -> Right -> Down
 

Constraints:

1 <= m, n <= 100
 * 
 * 
 * 

 At each position (row, col), the function checks if the result has been previously
  computed and stored in the cache object. If the result is found in the cache, it is directly returned, otherwise, it is computed recursively and stored in the cache for future use.

The number of unique positions in the grid is m * n. Since each position is 
visited only once and the result is cached for future use, the time complexity of computing the unique paths is proportional to the number of unique positions in the grid.

Therefore, the time complexity of the provided solution is approximately O(m * n), 
where m is the number of rows and n is the number of columns in the grid.
 * 
 * 
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// var uniquePaths = function(m, n) {
//     // m rows
//     // n columns

//     // two options, down or right (helper to determine if in bounds);
//  if (m === 1 || n === 1) {
//         return 1;
//     }
//     // making board smaller by one row or col:
//     return uniquePaths(m - 1, n) + uniquePaths(m, n - 1)

// };

// counting combinations, what are options in every step, there's only two options (could be a an array of options; use a for loop)
// you need to add them, check base case, base will return one or 0

// down or right at any point in time.                                                                                    
var uniquePaths = function (m, n) {
  const cache = {};

  return helper(0, 0);

  function helper(row, col) {
      if (row === m - 1 || col === n - 1) {
          // end of board
          return 1;
      }
      const key = `${row}-${col}`;
      if (cache[key]) {
          return cache[key];
      }

      const answer = helper(row + 1, col) + helper(row, col + 1);
      cache[key] = answer;
      return answer;
  }
}

// subproblem, slate