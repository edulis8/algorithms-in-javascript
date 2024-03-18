



/**
 * 
 * https://leetcode.com/problems/01-matrix/
 * 
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (matrix) {
  //const result = [];
  const visited = new Set() // "row-col"
  const zeros = findZeros(matrix);
  const q = [...zeros]; // put all 0s in queue
  let distance = 0; // !!
  while (q.length) {
      // console.log({q})

      const node = q.shift(); // grab a 0
      // console.log({node})
      visited.add(node.join('-').toString()) // make sure we mark it visited
      const [row, col] = node; // get coords
      matrix[row][col] = distance; // set matrix at those coords to distance
      for (let _node of getNeighbors(node)) { // get neighbors
          const [nrow, ncol] = node;
          if (matrix[nrow][ncol] !== 0 && !visited.has(node.join('-').toString())) {
              // iterate thru neighbors
              q.push(_node);
          }
      }
      // at end of while loop iteration, we've gone through one layer of distance, one "concentric circle" in a BFS graph
      distance += 1;
  }

  return matrix;

  function getNeighbors([row, col]) {
      // returns array of rows/cols
      // num rows = matrix.length
      // num cols = matrix[0].length
      const result = [];
      if (row + 1 < matrix.length) result.push([row + 1, col])
      if (row - 1 >= 0) result.push([row - 1, col])
      if (col + 1 < matrix[0].length) result.push([row, col + 1])
      if (col - 1 >= 0) result.push([row, col - 1])

      return result;
  }

  function findZeros(matrix) {
      const output = []
      for (let row = 0; row < matrix.length; row++) {
          for (let col = 0; col < matrix[0].length; col++) {
              if (matrix[row][col] === 0) {
                  output.push([row, col]);
              }
          }
      }
      return output;
  }
};


// no diagonal
// if 0 -> 0
// if 1 next to a to -> 1
// if 1 non-adjacent to a zero -> 2+ (based on num of hops)
// no up-down-right-left neighbors are 0s, 
// at least one 0 in matrix


// if a node has 1 as a neighb, then we know one more hop to get to 0 (assuming we've visited that neigh)
// smalllest neighb tells us quickest path to a zero
// node should be 1 + smallest neighb

// start any 0
// *BFS* vs DFS
// BFS: good fof process all neighbs in one go



// [0, 1, 0],
//     [1, 1, 1], [
//         1, 1, 1]
//     ]
// Output: [
//     [0, 0, 0],
//     [1, 2, 1],
//     [2, 3, 2]
// ]


// [4, 3, 2],
//     [3, 2, 1],
//     2, 1, 0]

// Output: [
//     [4, 3, 2],
//     [3, 2, 1],
//     [2, 1, 0]
// ]


// mine, corrected by chat gpt
/**
 * @param {number[][]} matrix - The input binary matrix.
 * @return {number[][]} - The matrix with distances of the nearest 0 for each cell.
 */
var updateMatrix = function (matrix) {
  // Edge case: if the input matrix is empty or has no columns, return an empty array.
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) return [];

  // Set to keep track of visited cells.
  const visited = new Set();
  // Find all zero cells and initialize the queue with them.
  const zeros = findZeros(matrix);
  const q = [...zeros]; // Initialize the queue with zero cells.
  // Initialize a new matrix to store distances, initially filled with maximum safe integer.
  const newMatrix = Array.from({ length: matrix.length }, () => Array(matrix[0].length).fill(Number.MAX_SAFE_INTEGER));

  // BFS traversal to find the distance of the nearest 0 for each cell.
  while (q.length) {
      // Dequeue a cell from the queue.
      const node = q.shift();
      // Mark the cell as visited.
      visited.add(node.join('-').toString());
      const [row, col] = node; // Get the coordinates of the current cell.
    
      // If the current cell is a zero cell, set its distance to 0.
      if (matrix[row][col] === 0) {
          newMatrix[row][col] = 0;
      }
    
      // Iterate through the neighbors of the current cell.
      for (const neighbor of getNeighbors(node)) {
          const [nrow, ncol] = neighbor;
          // Calculate the new distance.
          const newDist = newMatrix[row][col] + 1;
          // Update the distance in the new matrix if the new distance is smaller.
          newMatrix[nrow][ncol] = Math.min(newMatrix[nrow][ncol], newDist);
          // Enqueue the neighbor if it's not visited and not a zero cell.
          if (matrix[nrow][ncol] !== 0 && !visited.has(neighbor.join('-').toString())) {
              q.push(neighbor);
          }
      }
  }

  return newMatrix;

  // Function to get the neighbors of a given cell.
  function getNeighbors([row, col]) {
      const result = [];
      if (row + 1 < matrix.length) result.push([row + 1, col]);
      if (row - 1 >= 0) result.push([row - 1, col]);
      if (col + 1 < matrix[0].length) result.push([row, col + 1]);
      if (col - 1 >= 0) result.push([row, col - 1]);
      return result;
  }

  // Function to find the zero cells in the matrix.
  function findZeros(matrix) {
      const output = []
      for (let row = 0; row < matrix.length; row++) {
          for (let col = 0; col < matrix[0].length; col++) {
              if (matrix[row][col] === 0) {
                  output.push([row, col]); // Store the coordinates of zero cells.
              }
          }
      }
      return output;
  }
};




// chat gpt orig

var updateMatrix = function(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const q = [];
  
  // Initialize distances and add all zeros to the queue
  const dist = Array.from({ length: rows }, () => Array(cols).fill(Number.MAX_SAFE_INTEGER));
  for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
          if (matrix[r][c] === 0) {
              dist[r][c] = 0;
              q.push([r, c]);
          }
      }
  }
  
  const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  
  // Perform BFS
  while (q.length) {
      const [row, col] = q.shift();
      for (const [dr, dc] of dirs) {
          const newRow = row + dr;
          const newCol = col + dc;
          if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
              const newDist = dist[row][col] + 1;
              if (newDist < dist[newRow][newCol]) {
                  dist[newRow][newCol] = newDist;
                  q.push([newRow, newCol]);
              }
          }
      }
  }
  
  return dist;
};


