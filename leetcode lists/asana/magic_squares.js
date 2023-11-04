
// A 3 x 3 magic square is a 3 x 3 grid filled with distinct numbers from 1 to 9 such that each row, column, and both diagonals all have the same sum.

// Given a row x col grid of integers, how many 3 x 3 "magic square" subgrids are there?  (Each subgrid is contiguous).


/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function (grid) {
  let result = 0;
  const rowLength = grid.length;
  const colLength = grid[0]?.length;
  if (rowLength < 3 || colLength < 3) return 0;
  for (let row = 1; row < rowLength; row++) {
    for (let col = 1; col < colLength; col++) {
      if (hasEightDistinctValidNeighbors(row, col, grid)) {
        if (checkIfMagicSquare(row, col, grid)) {
          result++;
        }
      }
    }
  }
  return result;
};

const lowerLimit = 1;
const higherLimit = 9;

function hasEightDistinctValidNeighbors(row, col, grid) {
  let result = 0;
  // two arrays to represent all neighbor coords 
  const addRow = [-1, -1, -1, 0, 0, 1, 1, 1];
  const addCol = [-1, 0, 1, 1, -1, -1, 0, 1];
  const set = new Set([grid[row][col]]);

  for (let i = 0; i < 8; i++) {
    const rowToCheck = row + addRow[i];
    const colToCheck = col + addCol[i];
    if (
      rowToCheck >= 0 &&
      rowToCheck < grid.length &&
      colToCheck >= 0 &&
      colToCheck < grid[0].length
    ) {
      const el = grid[rowToCheck][colToCheck];
      if (!set.has(el) && el >= lowerLimit && el <= higherLimit) {
        result++;
        set.add(el);
      }
    }
  }
  return result === 8;
}

function checkIfMagicSquare(row, col, grid) {
  const expectedSum = grid[row][col] + grid[row][col - 1] + grid[row][col + 1];

  // Check the sums of all three rows
  for (let rowMod = -1; rowMod <= 1; rowMod++) {
    let rowSum = 0;
    for (let colMod = -1; colMod <= 1; colMod++) {
      rowSum += grid[row + rowMod][col + colMod];
    }
    console.log('rowSum', rowSum)
    if (rowSum !== expectedSum) return false;
  }

  // Check the sums of all three columns
  for (let colMod = -1; colMod <= 1; colMod++) {
    let colSum = 0;
    for (let rowMod = -1; rowMod <= 1; rowMod++) {
      colSum += grid[row + rowMod][col + colMod];
    }
    console.log('colSum', colSum)
    if (colSum !== expectedSum) return false;
  }

  // Check the sum of the main diagonal (top-left to bottom-right)
  let diagonalSum1 = 0;
  for (let i = -1; i <= 1; i++) {
    diagonalSum1 += grid[row + i][col + i];
  }
  if (diagonalSum1 !== expectedSum) return false;

  // Check the sum of the other diagonal (top-right to bottom-left)
  let diagonalSum2 = 0;
  for (let i = -1; i <= 1; i++) {
    diagonalSum2 += grid[row + i][col - i];
  }
  if (diagonalSum2 !== expectedSum) return false;

  console.log(expectedSum, diagonalSum1, diagonalSum2)
  return true;
}

const grid = //[[4,3,8,4],[9,5,1,9],[2,7,6,2]];
  // const grid = [
  //   [5,5,5],
  //   [5,5,5],
  //   [5,5,5]
  // ]
  [
    [10, 3, 5],
    [1, 6, 11],
    [7, 9, 2]
  ]
let answer = numMagicSquaresInside(grid);

console.log('answer', answer)






///// CHAT GPT SOLUTION /////////
var numMagicSquaresInside = function (grid) {

  const isMagicSquare = (subgrid) => {
    const digits = new Set();
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (subgrid[i][j] < 1 || subgrid[i][j] > 9 || digits.has(subgrid[i][j])) {
          return false; // Each number should be 1-9 and distinct.
        }
        digits.add(subgrid[i][j]);
      }
    }

    // Check the sum of rows, columns, and diagonals.
    const rowSums = [0, 0, 0];
    const colSums = [0, 0, 0];
    let diagSum1 = 0;
    let diagSum2 = 0;

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        rowSums[i] += subgrid[i][j];
        colSums[j] += subgrid[i][j];
        if (i === j) diagSum1 += subgrid[i][j];
        if (i + j === 2) diagSum2 += subgrid[i][j];
      }
    }

    const targetSum = rowSums[0]; // Since all rows, columns, and diagonals have the same sum.

    return rowSums.every(sum => sum === targetSum) &&
      colSums.every(sum => sum === targetSum) &&
      diagSum1 === targetSum &&
      diagSum2 === targetSum;
  };

  const rows = grid.length;
  const cols = grid[0].length;
  let count = 0;

  for (let i = 0; i <= rows - 3; i++) {
    for (let j = 0; j <= cols - 3; j++) {
      const subgrid = [
        grid[i].slice(j, j + 3),
        grid[i + 1].slice(j, j + 3),
        grid[i + 2].slice(j, j + 3)
      ];
      if (isMagicSquare(subgrid)) {
        count++;
      }
    }
  }

  return count;
};


//// CHAT GPT REVISING ALGO FOR n by n square.
var numMagicSquaresInside = function (grid, n) {

  const rows = grid.length;
  const cols = grid[0].length;
  let count = 0;

  for (let i = 0; i <= rows - n; i++) {
    for (let j = 0; j <= cols - n; j++) {
      const subgrid = [];
      for (let k = 0; k < n; k++) {
        subgrid.push(grid[i + k].slice(j, j + n));
      }
      if (isMagicSquare(subgrid)) {
        count++;
      }
    }
  }

  return count;


  function isMagicSquare(subgrid) {
    const targetSum = (n * (n * n + 1)) / 2; // Sum for rows, columns, and diagonals.
    // Check if all numbers are distinct and in the range [1, n^2].
    const digits = new Set();
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (subgrid[i][j] < 1 || subgrid[i][j] > n * n || digits.has(subgrid[i][j])) {
          return false; // Each number should be 1 to n^2 and distinct.
        }
        digits.add(subgrid[i][j]);
      }
    }

    // Check the sum of rows, columns, and diagonals.
    for (let i = 0; i < n; i++) {
      let rowSum = 0;
      let colSum = 0;
      for (let j = 0; j < n; j++) {
        rowSum += subgrid[i][j];
        colSum += subgrid[j][i];
      }
      if (rowSum !== targetSum || colSum !== targetSum) {
        return false;
      }
    }

    let diagSum1 = 0;
    let diagSum2 = 0;
    for (let i = 0; i < n; i++) {
      diagSum1 += subgrid[i][i];
      diagSum2 += subgrid[i][n - i - 1];
    }

    return diagSum1 === targetSum && diagSum2 === targetSum;
  }
};