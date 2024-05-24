// Find the number of unique shapes inside a grid of matrix

// Example

// 0 0 0 1
// 1 1 0 1
// 0 1 0 0
// 1 0 0 1
// 1 0 0 1 

// Total number of unique shapes - 2





// Find the number of unique shapes inside a grid of matrix

// Example

// 0 0 0 1
// 1 1 0 0
// 0 1 0 0
// 1 0 0 1
// 1 0 0 1 

// Total number of shapes - 3
// Total number of unique shapes - 2

// diagonals are connected

/*
11
 1
1
1

 1
 1

01
00 ->1

101
101 ->1

101
101 ->1

0 [[0 1 0]
0 [1 1 1]
0 [0 1 0]
0 [0 1 0]]

// leftmost 1,

// depth first search, similar to "count islands", find connected component, we add to set,

[[1]
[1]] -> stringify put in a set

1
1

1
1
1

1
1

0000
0000

 input = matrix, array of arrays, 1s and 0s, 1s are the shapes 
 uniqueness = congruency
*/

function solution(matrix) {
  const numRows = matrix.length;
  const numCols = matrix[0].length;

  const uniqueShapes = new Set();


  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      // starting for dfs to explore one shape
      // if !'V' and '1'

      if (!v and !1)
      const shapes = []
      dfs(row, col, shapes);
      const [firstX, firstY] = shapes[0];
      let shapeStr = '';
      shapes.forEach((x,y) => {
        const newX = x - firstX;
        const newY = y - firstY;
        shapeStr += newX + '-' + newY+',';
      })
      uniqueShapes.add(shapeStr);
    }
  }

  // m x n grid
  // Space Complexity - aux arrays and strings, length proportionate to items in all shapes
  // Time Complexity - O(m*n)

  // O(m*n is numnodes * 8)


// move shapes to top left
// subtract first coordinate (x,y) from all coordinates (pairwise subtraction)

// 0 0 0 0  --- change to '0,0','0,1'
// 0 0 1 1  --- '1,2', '1,3'
// 0 0 0 0
// 0 0 1 1 ---  '3,2', '3,3'
                //  (x,y)

// Initially -> '3,2', '3,3' -> 0,0 0,1
// Initially -> '1,2', '1,3' -> 0,0 0,1

  return uniqueShapes.size;

  function dfs(row, col, coords) {
    // see if top/left/etc
    matrix[row][col] = 'V';
    coords.push([row, col]);

    for (const [nRow, nCol] of getNeighbors(row, col)) {
      if (matrix[nRow][nCol] !== 'V' &&  matrix[nRow][nCol] !== 0) {
        dfs(nRow, nCol, coords);
      }
    }
  }

  function getNeighbors() {
    
  }
}



// CHAT GPT

// Function to find unique shapes in a grid
function uniqueShapes(grid) {
  // Initialize a set to store unique shapes
  let uniqueShapes = new Set();

  // Iterate over each cell in the grid
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      // If the cell is part of an unvisited island
      if (grid[row][col] !== 'V' && grid[row][col] == "1") {
        // Initialize an array to store the shape
        let shape = [];
        // Start a DFS traversal from the cell
        dfs(row, col, shape);
        // Add the shape to the set of unique shapes
        uniqueShapes.add(shape.join(''));
      }
    }
  }

  // Return the number of unique shapes
  return uniqueShapes.size;

  // Helper function to perform DFS traversal
  function dfs(x, y, shape) {
    // Mark the cell as visited
    grid[x][y] = "V";
    // Add the cell to the shape
    shape.push(x + '' + y);
    // Iterate over each neighbor of the cell
    for (let [neighborRow, neighborCol] of getNeighborsWithDiagonals(grid, x, y)) {
      // If the neighbor is part of an unvisited island
      if (grid[neighborRow][neighborCol] !== 'V' && grid[neighborRow][neighborCol] == "1") {
        // Continue the DFS traversal from the neighbor
        dfs(neighborRow, neighborCol, shape);
      }
    }
  }

  // Helper function to get all valid neighbors of a cell, including diagonals
  function getNeighborsWithDiagonals(grid, row, col) {
    const result = [];
    const rowOffsets = [0, -1, -1, -1, 0, 1, 1, 1];
    const colOffsets = [-1, -1, 0, 1, 1, 1, 0, -1];

    // Iterate over each direction
    for (let i = 0; i < 8; i++) {
      const neighborRow = row + rowOffsets[i];
      const neighborCol = col + colOffsets[i];
      // If the neighbor is within the grid
      if (neighborRow >= 0 && neighborRow < grid.length && neighborCol >= 0 && neighborCol < grid[0].length) {
        // Add the neighbor to the result
        result.push([neighborRow, neighborCol]);
      }
    }

    // Return the result
    return result;
  }
}

// Test the function
let grid = [
  ['0', '0', '0', '1'],
  ['1', '1', '0', '1'],
  ['0', '1', '0', '0'],
  ['1', '0', '0', '1'],
  ['1', '0', '0', '1']
];

console.log(uniqueShapes(grid)); // Output: 2










// interviewing.io guy using top left bottom right , create matrix.





// Find the number of unique shapes inside a grid of matrix

// Example

// 0 0 0 1
// 1 1 0 0
// 0 1 0 0
// 1 0 0 1
// 1 0 0 1 

// Total number of shapes - 3
// Total number of unique shapes - 2

// diagonals are connected

/*
11
 1
1
1

 1
 1

01
00 ->1

101
101 ->1

101
101 ->1

0 [[0 1 0]
0 [1 1 1]
0 [0 1 0]
0 [0 1 0]]

// leftmost 1,

// depth first search, similar to "count islands", find connected component, we add to set,

[[1]
[1]] -> stringify put in a set

1
1

1
1
1

1
1

0000
0000

 input = matrix, array of arrays, 1s and 0s, 1s are the shapes 
 uniqueness = congruency
*/

function solution(matrix) {
  const numRows = matrix.length;
  const numCols = matrix[0].length;

  const uniqueShapes = new Set();
  const top, left, bottom, right


  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      // starting for dfs to explore one shape
      // if !'V' and '1'

      if (!v and !1)
      top = row, bottom = row, left = col, right = col
      const shapes = []
      dfs(row, col, shapes);
      // extractShape() {
        matrix = new [bottom-top][right - left]
        for (r from top to bottom) {
          for (c in left to right) {
            newmatrix[r-top][c-left] = matrix[r][c]
          }
        }
        return newMatrix
      }


      const [firstX, firstY] = shapes[0];
      let shapeStr = '';
      shapes.forEach((x,y) => {
        const newX = x - firstX;
        const newY = y - firstY;
        shapeStr += newX + '-' + newY+',';
      })
      uniqueShapes.add(shapeStr);
    }
  }

  // m x n grid
  // Space Complexity - aux arrays and strings, length proportionate to items in all shapes
  // Time Complexity - O(m*n)

  // O(m*n is numnodes * 8)


// move shapes to top left
// subtract first coordinate (x,y) from all coordinates (pairwise subtraction)

// 0 0 0 0  --- change to '0,0','0,1'
// 0 0 1 1  --- '1,2', '1,3'
// 0 0 0 0
// 0 0 1 1 ---  '3,2', '3,3'
                //  (x,y)

// Initially -> '3,2', '3,3' -> 0,0 0,1
// Initially -> '1,2', '1,3' -> 0,0 0,1

  return uniqueShapes.size;

  function dfs(row, col, coords) {
    // see if top/left/etc
    matrix[row][col] = 'V';
    coords.push([row, col]);
    top = Math.min (row, top)
    bottom = Math.max (row, bottom)

    for (const [nRow, nCol] of getNeighbors(row, col)) {
      if (matrix[nRow][nCol] !== 'V' &&  matrix[nRow][nCol] !== 0) {
        dfs(nRow, nCol, coords);
      }
    }
  }

  function getNeighbors() {
    
  }
}