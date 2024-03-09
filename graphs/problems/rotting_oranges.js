/**
 * bfs_solution.cpp
The approach that we followed in the above solution was also based on BFS. In brief, the approach that we followed above was:

We started with all the cells that could rot the oranges in their adjacent cells.
For all those cells, we checked if any adjacent orange has the possibility of getting rotten or not.
Then, we started with the newly rotted oranges and considered their further adjacent oranges to find the ones that were going to rot next and so on.
Note that:

Initially, all of the cells marked with 2 have the probability of rotting the oranges in their adjacent cells. Let us call this set of cells set1.
We will now rot all of the adjacent oranges of the cells in set1. After this, we will no longer need the cells in set1 as they can no longer rot their adjacent oranges (as all of their adjacent fresh oranges have already rotted by now).
Now, only the newly rotted oranges have the probability to rot their adjacent oranges. Let us call the set of these newly rotted cells set2.
We will now rot all of the adjacent oranges of the cells in set2. After this, we will no longer need the cells in set2. Now we will only need the cells rotted by cells in set2 and so on.
In the above solution, we were iterating through the complete grid for rotting each set of oranges in the i-th minute. However, from the above discussion, it is evident that

We do not need to iterate through any cell which does not belong to set1.
Once we have iterated through the cells in set1, we no longer need to check its adjacent cells again. Similarly, once we have iterated the cells in set2, we will no longer need to check its adjacent cells again.
In this solution, we will follow a queue-based BFS process so that at any moment, we know which of the cells having the rotten oranges have the probability to rot their adjacent oranges.

Overall, our approach will be:

Push the indices of all of the cells marked with 2 into a queue. We do this because initially, all of the cells marked with 2 have the probability to rot their adjacent oranges.
Initiate a BFS-based process where the i-th iteration of the BFS will rot the oranges in the i-th minute.
Increment the result by one and then, one-by-one pop-out the cells that could rot the oranges in their adjacent cells in the current minute. If any of their adjacent cells is marked as 1, mark it as 2 and push it into the queue.
Note that, at the end of this iteration of the BFS, the queue will contain only the cells that could rot the oranges in the next iteration.
The process terminates once the queue becomes empty.

After the termination of BFS, we will finally traverse all of the cells present in the grid to check if there is any cell left that is marked as 1. If we find any, we will return -1.
Otherwise, we will return result - 1 (minus 1 because there will be an extra iteration of BFS once all of the fresh oranges get marked as 2).

Time Complexity
O(n * m).

The BFS will visit all the cells at most once.

Auxiliary Space Used
O(n * m).

The size of the queue will be O(n * m) in the worst-case.

Space Complexity
O(n * m).

Space used for input: O(n * m).
Auxiliary space used: O(n * m).
Space used for output: O(1).
So, total space complexity: O(n * m).
 * 
 * 
 * 
 * 
 * @param {list_list_int32} grid
 * @return {int32}
 */
function rotting_oranges(grid) {

  // bfs solution
  // count layers, each layer is a minute
  // any 1 neighbor of a 2 changes to 2
  // ignore 0s
  // if a 1 has only 0 neighbors, return -1

  let layers = 0;

  const queue = [];

  // put all rotten oranges (2s) in the queue first
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 2) {
        queue.unshift([row, col]); // 
      }
    }
  }


  bfs();

  // find any fresh oranges
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 1) {
        return -1;
      }
    }
  }


  return Math.max(0, layers - 1); // minus 1 because there will be an extra iteration of BFS once all of the fresh oranges get marked as 2).
  // If the result is 0, it means that there were not fresh oranges in the grid initially. We want to return 0 in that case, not -1;

  function bfs() {
    while (queue.length) {
      let l = queue.length;
      while (l--) { // a layer/minute - when this is done we know we've finished a layer/minute
        // all rotten 2s processed
        let [row_, col_] = queue.shift();
        let neighbors = getNeighbors(grid, row_, col_)

        for (const [nRow, nCol] of neighbors) {
          // all neighbors of 2s, if 1s, turned into 2, pushed into queue for next iteration
          if (grid[nRow][nCol] === 1) {
            grid[nRow][nCol] = 2;
            queue.push([nRow, nCol]);
          }
        }
      }
      layers++;
    }
  }
}

function getNeighbors(grid, row, col) {
  const result = [];
  const numRows = grid.length;
  const numCols = grid[0].length;

  // Horizontal and Vertical neighbors
  if (row + 1 < numRows) result.push([row + 1, col]); // top
  if (row - 1 >= 0) result.push([row - 1, col]); // down
  if (col + 1 < numCols) result.push([row, col + 1]); // right
  if (col - 1 >= 0) result.push([row, col - 1]); // left

  return result;
}

console.log('\n******************** OUTPUT ************\n');
let input = {
  "grid": [
    [2, 1, 1],
    [1, 0, 0],
    [1, 1, 0]
  ]
}
let result = rotting_oranges(input.grid);
console.log('result:', result)
console.log('\n******************** ************\n')

// int rotting_oranges(vector<vector<int>> &grid) {
//   // We will use these direction arrays to move from any cell at (i, j) to its
//   // adjacent cells (i + 1, j), (i - 1, j), (i, j + 1) and (i, j - 1).
//   int dx[] = {+1, -1, +0, +0};
//   int dy[] = {+0, +0, +1, -1};

//   int n = grid.size();
//   int m = grid[0].size();

//   queue < pair < int, int > > q;

//   for (int i = 0; i < n; i++) {
//       for (int j = 0; j < m; j++) {
//           if (grid[i][j] == 2) {
//               q.push({i, j});
//           }
//       }
//   }

//   int result = 0; // This will represent the number of times we have iterated in the while-loop below.

//   int r, c;
//   while (!q.empty()) {
//       // "size" is the number of rotten oranges that could rot the adjacent fresh oranges
//       // in the current iteration.
//       int size = q.size();
//       result++;

//       for (int j = 0; j < size; j++) {
//           auto cur = q.front();
//           q.pop();

//           r = cur.first;
//           c = cur.second;

//           for (int i = 0; i < 4; i++) {
//               if (r + dx[i] >= 0 and r + dx[i] < n and
//                       c + dy[i] >= 0 and c + dy[i] < m and
//                       grid[r + dx[i]][c + dy[i]] == 1) {

//                   grid[r + dx[i]][c + dy[i]] = 2;
//                   q.push({r + dx[i], c + dy[i]});
//               }
//           }
//       }
//   }

//   // If we are still left with any fresh orange, it means that rotting of all of the oranges
//   // is not possible. So we will return -1 in this case.
//   for (int i = 0; i < n; i++) {
//       for (int j = 0; j < m; j++) {
//           if (grid[i][j] == 1) {
//               return -1;
//           }
//       }
//   }

//   // If the result is 0, it means that there were not fresh oranges in the grid initially.
//   return max(0, result - 1);
// }

