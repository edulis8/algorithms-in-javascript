
/**
 * N Queen Problem
Given an integer n, find all possible ways to position n queens on an n×n chessboard so that no two queens attack each other. A queen in chess can move horizontally, vertically, or diagonally.

Do solve the problem using recursion first even if you see some non-recursive approaches.
input:

{
"n": 4
}


Output:

[
["--q-",
 "q---",
 "---q",
 "-q--"],

["-q--",
 "---q",
 "q---",
 "--q-"]
]


[
 
  "q---",
  "---q",
  "-q--",
  "--q-"]
]



q _ _
- - - 
- - -


q _ _ _
- - - -
- - - -
- - - -

queens can go up, down, diagonal in any direction

slate - all possible cells at first
  - manager - make a choice
  - pass rest of board to helper
  - helper makes a choice based on constraints of new board
  - in 3x3 board, no more possibilities
  - how know if possible or not?
  - if there's a queen in a vertical, horizontal or diagonal "band"
  - "getBand" function - would look for queen forward in same array, vertically (same index, to length of matrix, and diagonally [-1,-1], [+1, +1)
subproblem


 * @param {int32} n
 * @return {list_list_str}
 */
function find_all_arrangements(n) {
  const result = [];
  const board = createBoard(n);

  // iterate over rows
  // iterat thrugh columns
  helper(0, 0, createBoard(n));


  return result;

  // can subproblem be just row, col?
  // partial solution is board...
  function helper(row, col, board) {
    // base case - we've reached a violation, return
    // base case  - we've found a solution, push to result

    // if board has n queens, push result


      // if no queens can attack it, add queen to row
      if (!queensExistInBand(row, col)) {
        board[row][col] = 'q';
      }
      // go left
      helper(row + 1, col, board);
      // go down
      helper(row, col + 1, board);
      // go diagonally down
      helper(row + 1, col + 1, board);
      // check right
      /// check up
      // check diagonall up

    

  }

  function createBoard(n) {
    return [];
  }

  function queensExistInBand(row, col) {

    return [];
  }
}





console.log('\n******************** OUTPUT ************\n');

let input = {
  "n": 4
}


let result = find_all_arrangements(input.n);
console.log('result:', result)
console.log('\n******************** ************\n')


