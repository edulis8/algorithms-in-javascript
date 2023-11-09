
function createMatrix(n) {
  // one liner:
  return Array.from({ length: n }, () => Array.from({ length: n }, () => '-'));

  // CLASSIC:
  // const matrix = [];
  // for (let i = 0; i < n; i++) {
  //   const row = [];
  //   for (let j = 0; j < n; j++) {
  //     row.push('-');
  //   }
  //   matrix.push(row);
  // }
  // return matrix;
}

var TicTacToe = function (n) {
  this.board = createMatrix(n);
  this.players = {
    1: new Player(1, 'X', false),
    2: new Player(2, 'O', false)
  }
};

/** 
 * @param {number} row 
 * @param {number} col 
 * @param {number} player
 * @return {number}
*/
TicTacToe.prototype.move = function (row, col, player) {
  const playerMoving = this.players[player];
  playerMoving.turn = true; // not 100% necessary but might be nice to know

  if (playerMoving.turn) {
    this.board[row][col] = playerMoving.piece; 
    playerMoving.turn = false;
  }

  return this.determineWinner(playerMoving, row , col);
};

TicTacToe.prototype.determineWinner = function (currentPlayer, row, col) {
  if (this.board[row].every(el => el === currentPlayer.piece)) {
    return currentPlayer.name;
  }  

  if (this.board.every(_row => _row[col] === currentPlayer.piece)) {
    return currentPlayer.name;
  }

  if (row - col === 0) {
    let forwardDiagonalCounter = 0;
    // we're on a forward diagonal
    for(let i = 0; i < this.board.length; i++) {
      if(this.board[i][i] === currentPlayer.piece) {
        forwardDiagonalCounter++;
      } else {
        break;
      }
    }
    if (forwardDiagonalCounter === this.board.length) return currentPlayer.name;
  }

  if (row + col === this.board.length - 1) {
    // we're on a backward diagonal
    let backwardDiagonalCounter = 0;
    // we're on a forward diagonal
    for(let i = 0; i < this.board.length; i++) {
      if(this.board[i][this.board.length - 1 - i] === currentPlayer.piece) {
        backwardDiagonalCounter++;
      } else {
        break;
      }
    }
    if (backwardDiagonalCounter === this.board.length) return currentPlayer.name;
  }
  return 0;
}

var Player = function (name, piece, turn) {
  this.name = name;
  this.piece = piece;
  this.turn = turn;
}


// ASANA DOC NOTE:
// Tic-Tac-Toe
// Implement a simple Tic-Tac-Toe game for a board of arbitrary size. It should be able to receive user input, i.e., where a user token (‘X’ or ‘O’) has been put, and return the state of the game as a result:  did any of the players win, is it a draw, or is the game still ongoing?
// Solution hints:
// A good design will most likely encapsulate the game state in a class and expose a method or two to allow placing tokens and retrieving game status.
// An example can be a class with a single public method “placeToken(token, row, column)” that returns a string from the set (“FIRST PLAYER WON”, “SECOND PLAYER WON”, “DRAW”, “ONGOING”).
// Think about handling exceptions - what if the user provides an invalid token, or places it outside the board or over a previous token? Do you raise an error (a.k.a throwing an exception), or return a different result?
// What if the user provides the same token twice in a row - does your design treat this as an exception, or do you leave the question of turn integrity to the user? Note that it’s perfectly okay for the solution not to handle this scenario as an error, as long as the decision was made consciously.

