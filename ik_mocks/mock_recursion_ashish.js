/*

Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 

Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 300
grid[i][j] is '0' or '1'.

 */

/**


Linear Time
O(m * n)

Space
1) save on space do it in place : tradeoff - mutate input
2) don't mutate input - clone the grid, use O(n*m) space

 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    
    let islands = 0;
    const numRows = grid.length;
    const numCols = grid[0].length;
    for(for row = 0; row < numRows; row++) {
       for(for col = 0; col < numCols; col++) {
           if (grid[row][col] == 1) {
               // explore entire island
              island++;
              dfs(row, col); // turn this island into 'V's
           }
       }
    }
    
    return islands;
    
    function dfs(row, col) {
        if(grid[row][col] == 1) {
            grid[row][col] = 'V';
        }
        let nbrs = getNeighbors(row, col);
        for (const [rowN, colN] of nbrs) {
            if (grid[rowN, colN] != 'V' && grid[rowN, colN] != 0 ) {
                dfs(rowN, colN);
            }
        }
            
    }
 
    
    function getNeighbors(row, col) {
        // returns array of neighbors, ignores overflow.
        
    }    
};

console.log(numIslands)


// graph, DFS solution
// have to find number of components
// getNeighbors(row, col) return all neighbors
// double iteration over the grid
    // counter that increments after a DFS call has finished
// if find 1, turn it into a 'V', get its neighbors




// discuss solution more
// return fib(n-1) + fib(n-2);


// TIME COMPLEXITY
// NOT THIS:
// n! + n!

// THIS:
// since each recurse generates 2 branches, this is a tree, which is 2^n, exponential
var hashmap = {}

var fib = function(n) {
    // base case
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    
    if (hashmap[n]) {
        return hashmap[n];
    }
   
        
    // 3 
    let answer = fib(n-1) + fib(n-2);
    // only add to hashmap if not there already
    
    hashmap[n] = answer;
    
    return answer;
    
};


// 
let result = fib(1000)
console.log(result);





