
/**
 * @param {list_list_int32} grid
 * @return {int32}
 */
function max_island_size(grid) {
  // dfs

  // loop over grid
  // dfs if we find a 1 that isn't already visited
  // increment a localCount inside the dfs function
  // inside the loop, keep the max of localCount and globalCount after each DFS traversl is done
  let globalCount = 0;
  let localCount = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      let cell = grid[row][col];
      globalCount = Math.max(localCount, globalCount);
      localCount = 0;
      if (cell == 1 && cell != 'V') {
        dfs(row, col) // in here we will increment localCount
      }
    }
  }

  return globalCount;

  function dfs(row, col) {
    grid[row][col] = 'V';
    localCount++;
    // get neighbors
    // recurse if a neghbor is not visited and is part of an island (1)
    for (let [rowNeighb, colNeighb] of getNeighbors(row, col)) {
      if (grid[rowNeighb][colNeighb] == 1 && grid[rowNeighb][colNeighb] != 'V') {
        dfs(rowNeighb, colNeighb);
      }
    }

  }



  function getNeighbors(row, col) {
    // given a row and a column
    // return an array of arrays, each array containing [row, col] of a neighbor. up to 4.
    const result = [];
    const numRows = grid.length;
    const numCols = grid[0].length;

    if (row + 1 < numRows) result.push([row + 1, col])
    if (row - 1 >= 0) result.push([row - 1, col])
    if (col + 1 < numCols) result.push([row, col + 1])
    if (col - 1 >= 0) result.push([row, col - 1])
    // diags

    // if (row + 1 < numRows && col + 1 < numCols) result.push(row + 1, col + 1)
    // if (row - 1 >= 0 && col - 1 >= 0) result.push(row - 1, col - 1)
    // if (row + 1 < numRows && col - 1 >= 0) result.push(row + 1 , col - 1)
    // if (row - 1 >= 0 && col + 1 < numCols) result.push(row - 1, col + 1)
    return result;
  }
}

let grid = [
  [0, 0, 0, 1],
  [1, 1, 1, 0],
  [0, 1, 1, 0]
]

console.log('\n******************** OUTPUT ************\n');


let result = max_island_size(grid);
console.log('result:', result)
console.log('\n******************** ************\n')

