/*
* Asymptotic complexity in terms of number of unfilled cells `k` and number of rows(or columns) in `board` `n`:
* Time: O(9^k).
* Auxiliary space: O(k).
* Total space: O(n^2).
*/

function solveSudokuPuzzle(board) {
  recursiveBacktracking(board);
  return board;
}

function recursiveBacktracking(board) {
  // Look for the next unfilled cell.
  let row = 0;
  let col = 0;
  let foundUnfilledCell = false;
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] == '.') {
        // Found unfilled cell.
        row = i;
        col = j;
        foundUnfilledCell = true;
        break;
      }
    }
    if (foundUnfilledCell) {
      break;
    }
  }

  if (!foundUnfilledCell) {
    // No unfilled cells left. That means a solution is found.
    return true;
  }

  // Look for a number (1..9) that "is safe", i.e. can feasibly be placed in this unfilled cell.
  for (let num = 1; num <= 9; num++) {
    if (isSafe(board, row, col, num)) {
      // Found a safe number, put it to the board.
      board[row][col] = num + '';

      // Recurse to find and fill next unfilled cell.
      if (recursiveBacktracking(board)) {
        return true;
      } else {
        // Placing number num to this unfilled cell does not lead to a solution.
        // So we undo placing it to the board:
        board[row][col] = '.';
        // ... and continue with the `for` loop.
        // That will lead to trying other numbers: backtracking.
      }
    }
  }

  // Starting from the state of the board passed to this call, no solution is possible.
  // This cannot be the initial call (root call in the recursion hierarchy of calls) because
  // the problem statement guarantees that a solution exists for every test board.
  // So returning false will lead to backtracking.
  return false;
}

/**
* Checks if number num is safe to place on board[row, col].
*/
function isSafe(board, row, col, num) {
  // Check if the number is already present in the row.
  // We could use a Set to get rid of the following cycle,
  // but with N=9 it's going to make things slower on many real CPUs.
  // That's worth considering for larger Sudoku boards though.
  for (let i = 0; i < 9; i++) {
    if (board[row][i] == num) {
      return false;
    }
  }

  // Check if the number is already present in the column.
  for (let i = 0; i < 9; i++) {
    if (board[i][col] == num) {
      return false;
    }
  }

  // Check if the number is already present in the corresponding 3 x 3 box.
  // See explanation below
  let boxRowStart = row - (row % 3); 
  let boxColStart = col - (col % 3);

  for (let i = boxRowStart; i < boxRowStart + 3; i++) {
    for (let j = boxColStart; j < boxColStart + 3; j++) {
      if (board[i][j] == num) {
        return false;
      }
    }
  }

  return true;
}
/*
Here, row % 3 calculates the remainder when row is divided by 3, and similarly, col % 3 calculates the remainder when col is divided by 3. 
This effectively finds the position of the cell within its respective 3x3 subgrid.

For example, if row is 5 and col is 7:

row % 3 would be 2 (because 5 divided by 3 leaves a remainder of 2).
col % 3 would be 1 (because 7 divided by 3 leaves a remainder of 1).
So, boxRowStart would be row - 2 (5 - 2 = 3), and boxColStart would be col - 1 (7 - 1 = 6). This gives you the starting position (top-left corner) of the 3x3 subgrid 
to which the cell at (row, col) belongs.

In Sudoku, each 3x3 subgrid starts at multiples of 3, and this calculation ensures that you find the top-left corner of the corresponding subgrid, 
allowing you to check the presence of a number in that subgrid.

The modulo operation (%) will give you the remainder when dividing a number by 3. In the context of the Sudoku grid, this will result in values 0, 1, or 2. Here's how it works:

If row is a multiple of 3 (divisible by 3), then row % 3 will be 0.
If row leaves a remainder of 1 when divided by 3, then row % 3 will be 1.
If row leaves a remainder of 2 when divided by 3, then row % 3 will be 2.
The same logic applies to the col variable. This calculation is used to determine the starting index of the 
3x3 subgrid to which the cell at (row, col) belongs. The goal is to identify the top-left corner of the subgrid within which the cell is located.


Top-Left Subgrid:

boxRowStart = 0
boxColStart = 0
Top-Center Subgrid:

boxRowStart = 0
boxColStart = 3
Top-Right Subgrid:

boxRowStart = 0
boxColStart = 6
Middle-Left Subgrid:

boxRowStart = 3
boxColStart = 0
Middle-Center Subgrid:

boxRowStart = 3
boxColStart = 3
Middle-Right Subgrid:

boxRowStart = 3
boxColStart = 6
Bottom-Left Subgrid:

boxRowStart = 6
boxColStart = 0
Bottom-Center Subgrid:

boxRowStart = 6
boxColStart = 3
Bottom-Right Subgrid:

boxRowStart = 6
boxColStart = 6
*/