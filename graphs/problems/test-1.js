/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let islands = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] !== 'v' && grid[row][col] === "1") {
        islands++;
        dfs(row, col, grid)
      }
    }
  }

  return islands;

  function dfs(row, col, grid) {
    grid[row][col] = 'v';
    for (const [nRow, nCol] of getNeighbors(row, col, grid)) {
      if (grid[nRow][nCol] !== 'v' && grid[row][col] === "1") {
        dfs(nRow, nCol)
      }
    }
  }

  function getNeighbors(row, col, grid) {
    const result = [];
    // check if in bounds and add to result
    // 4 checks

    if (col + 1 < grid[0].length) result.push([row, col + 1])
    if (col - 1 >= 0) result.push([row, col - 1])
    if (row + 1 < grid.length) result.push([row + 1, col])
    if (row - 1 >= 0) result.push([row - 1, col])

    return result;
  }
};