
/**
 * 

// DFS SOLUTION

==Time Complexity===
EB Thinks
- linear time ... Time complexity of BFS or DFS is O(Vertices + Edges)
- linear aux space (neighbors arrays) -- O(v + e), or O(items in grid)
- call stack: could be as long as O(n)
==

 * @param {int32} n
 * @param {list_list_int32} edges
 * @return {int32}
 */
function islands(grid) {
  let islands = 0;

  // this makes sure you hit all unconnected pieces of the graph
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] !== 'V' && grid[row][col] == "1") {
        islands++;
        dfs(row, col);
      }
    }
  }

  return islands;

  function dfs(x, y) {
    grid[x][y] = "V";
    for (let [row, col] of getNeighborsWithMap(grid, x, y)) {
      if (grid[row][col] !== 'V' && grid[row][col] == "1") {
        dfs(row, col)
      }
    }
  }

  function getNeighbors(grid, row, col) {
    const result = []
    if (row + 1 < grid.length) result.push([row + 1, col]);
    if (row - 1 >= 0) result.push([row - 1, col]);
    if (col + 1 < grid[0].length) result.push([row, col + 1]);
    if (col - 1 >= 0) result.push([row, col - 1]);
    return result;
  }


  function __getNeighborsWithDiagonals(grid, row, col) {
    const result = [];
    const addRow = [0, -1, -1, -1, 0, 1, 1, 1];
    const addCol = [-1, -1, 0, 1, 1, 1, 0, -1];

    for (let i = 0; i < 8; i++) {
      const newRow = row + addRow[i];
      const newCol = col + addCol[i];

      if (
        newRow < 0 ||
        newRow >= grid.length ||
        newCol < 0 ||
        newCol >= grid[0].length
      ) {
        continue;
      }
      result.push([newRow, newCol]);

    }
    return result;
  }

  function _getNeighborsWithDiagonals(garden, row, col) {
    const result = [];
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) {
          // Skip over the original square
          continue;
        }
        const neighborOfI = row + i;
        const neighborOfJ = col + j;
        // Do something with neighbor_i and neighbor_j
        if (
          neighborOfI >= 0 &&
          neighborOfI < garden.length &&
          neighborOfJ >= 0 &&
          neighborOfJ < garden[0].length
        ) {
          result.push([neighborOfI, neighborOfJ])

        }
      }
    }
    return result;
  }

  function getNeighborsWithDiagonals(grid, row, col) {
    const result = [];
    const numRows = grid.length;
    const numCols = grid[0].length;

    // 8 OPTIONS +1 and -1 on row and col, if -1 we're thinking >= 0, if plus one we're thinking < numRows or < numCols
    // Horizontal and Vertical neighbors
    if (row + 1 < numRows) result.push([row + 1, col]); // top
    if (row - 1 >= 0) result.push([row - 1, col]); // down
    if (col + 1 < numCols) result.push([row, col + 1]); // right
    if (col - 1 >= 0) result.push([row, col - 1]); // left

    // Diagonal neighbors
    if (row - 1 >= 0 && col - 1 >= 0) result.push([row - 1, col - 1]); // Upper-left
    if (row - 1 >= 0 && col + 1 < numCols) result.push([row - 1, col + 1]); // Upper-right
    if (row + 1 < numRows && col - 1 >= 0) result.push([row + 1, col - 1]); // Lower-left
    if (row + 1 < numRows && col + 1 < numCols) result.push([row + 1, col + 1]); // Lower-right

    return result;
  }
}




console.log('\n******************** OUTPUT ************\n');

let grid = [
  [1, 1, 0, 0, 0],
  [0, 1, 0, 0, 1],
  [1, 0, 0, 1, 1],
  [0, 0, 0, 0, 0],
  [1, 0, 1, 0, 1]
]

// Easier to mmorize this for me:
function new_getNeighborsWithDiagonals(grid, row, col) {
  const result = [];
  // all combos of 1,0,-1, but not 0,0
  const addRow = [0, 1, 1, 0, -1, -1, 1, -1]
  const addCol = [1, 0, 1, -1, 0, 1, -1, -1];

  for (let i = 0; i < 8; i++) {
    let newRow = row + addRow[i];
    let newCol = col + addCol[i];

    if (
      newRow >= 0 &&
      newRow < grid.length &&
      newCol >= 0 &&
      newCol < grid[0].length
    ) {
      result.push([newRow, newCol])
    }
  }
  return result;
}

// console.log('orig', orig__getNeighborsWithDiagonals(grid, 2, 2))
// console.log('new', new_getNeighborsWithDiagonals(grid, 2, 2))


let result = islands(grid);
console.log('result:', result)
console.log('\n******************** ************\n')





function dfs(row, column, matrix) {
  const add_r = [0, -1, -1, -1, 0, 1, 1, 1];
  const add_c = [-1, -1, 0, 1, 1, 1, 0, -1];

  matrix[row][column] = 0;

  for (let i = 0; i < 8; i++) {
    const new_row = row + add_r[i];
    const new_column = column + add_c[i];

    if (
      new_row < 0 ||
      new_row >= matrix.length ||
      new_column < 0 ||
      new_column >= matrix[0].length
    ) {
      continue;
    }

    if (matrix[new_row][new_column] !== 0) {
      dfs(new_row, new_column, matrix);
    }
  }
}

function countIslands(matrix) {
  let islands = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] !== 0) {
        islands++;
        dfs(i, j, matrix);
      }
    }
  }

  return islands;
}

let result2 = islands(grid);
console.log('result:', result2)
console.log('\n******************** ************\n')



function getNeighborsWithMap(grid, row, col) {
  const relativeCoords = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  return relativeCoords.map(([relativeRow, relativeCol]) => {
      const r = row + relativeRow;
      const c = col + relativeCol;
      if (r < 0 || r >= grid.length) return null;
      if (c < 0 || c >= grid[0].length) return null;
      return grid[row + relativeRow][col + relativeCol];
  }).filter(coord => !!coord);
};