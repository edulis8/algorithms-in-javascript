/**
 * GRAPH BFS
 * 
 * 
 * 
 * 
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function (board) {
  const nSquared = board.length * board.length;
  console.log('nSquared', nSquared)
  //console.log(board)
  // can the data structure/board be modeled as a graph? yes, bc its a matrix.
  // source is 1. distance is a "map" of hops away from source
  const distance = {};
  const visited = {};
  const boardMap = buildBoardMap(board)
  const adjacencyList = buildAdjacencyList(nSquared)
  console.log('boardMap', boardMap)
  console.log('adjacencyList', adjacencyList)

  // model board as an adjacencyList
  // process with BFS
  bfs(1);
  console.log('visited', visited)
  console.log('distance', distance)
  return distance[nSquared] || -1; // => min number of die rolls or levels or concentric circles from source which is 1

  function buildAdjacencyList(nSquared) {
    // adjacency list - model of a graph.
    // for each i in 1 to (board.length * board.length)
    // add up to 6 edges
    // for die in 1 to 6
    // if die < 100
    // push into adjacencyList
    // adjacencyList.push(hmap[ i+ die]) 

    // {
    //     1: [15,3,4,5,6,7]
    // }
    const adjacencyList = {};
    for (let i = 1; i < nSquared; i++) {
      adjacencyList[i] = []
      for (let die = 1; die <= 6; die++) {
        if (die + i <= nSquared) {
          let cellValue = boardMap[i + die];
          adjacencyList[i].push(cellValue)
        }
      }
    }
    return adjacencyList;
  }
  function buildBoardMap(board) {
    // boardCounter 1 to goes to n^2
    // outer loop from 5 to 0
    // inner loop from col 0 to 5
    // if rowIndex is odd from 0->5 
    // if rowIndex is even from 5->0


    const boardMap = {};
    let boardCounter = 1;
    // from row0 to row5
    let reverse = false;
    for (let row = board.length - 1; row >= 0; row--) {
      for (let col = 0; col < board[0].length; col++) {
        let column = col;
        if (reverse) {
          column = board.length - col - 1;
        }

        let cellValue = board[row][column];
        if (cellValue === -1) {
          // regular cell
          boardMap[boardCounter] = boardCounter;
        } else {
          // snake or ladder
          boardMap[boardCounter] = cellValue;
        }
        boardCounter++;
      }
      reverse = !reverse;
    }
    return boardMap;
  }

  function bfs(source) {
    // source=1
    visited[source] = true;
    distance[source] = 0;
    let queue = [];
    queue.push(source);
    while (queue.length) {
      let current = queue.shift();
      let neighbors = adjacencyList[current];
      if (!neighbors) return;
      console.log('current', current, 'neighbors', neighbors)
      for (let neighbor of neighbors) {
        // If we visited this node before we must have reached it with
        // fewer dice rolls than we have done now. We recorded its distance earlier. No need to consider it again. 
        if (!visited[neighbor]) {
          queue.push(neighbor);
          visited[neighbor] = true;
          distance[neighbor] = distance[current] + 1
        }
      }
    }
  }
};

[
  [-1, -1],
  [-1, 3]
]

// directed graph. -->
// unweighted.
// shortest path problem
// -> BFS.
// -> "how diseases spread in a population"
// node start -> level 1 -> level 2 - concentric circles
// 



/*
board = [
  [-1, -1, -1, -1, -1, -1], // 0
  [-1, -1, -1, -1, -1, -1], // 1
  [-1, -1, -1, -1, -1, -1], // 2
  [-1, 35, -1, -1, 13, -1], // 3
  [-1, -1, -1, -1, -1, -1], // 4
  [-1, 15, -1, -1, -1, -1]  // 5
]
*/

// the board is converted into a hashmap
// key : 1...n^2. Index + 1
// value : if -1, same, else the value in that cell.



// rowLength is 6

// boardCounter 1 to goes to n^2
// outer loop from 5 to 0
// inner loop from column 0 to 5
// if rowIndex is odd from 0->5 
// if rowIndex is even from 5->0
/*
// row 0  [0,0],[0,0],[0,0],[0,3],[0,0],[0,5]
36.   35.   34.   33.   32.   31.    //down l->r
// row 1  [1,0],[1,1],[1,1],[1,3],[1,1],[1,5].
25.    26.  27.    28.   29.  30.   // up
// row 2  [2,0],[2,1],[2,2],[2,3],[2,2],[2,5]
24     23     22    21    20    19
// row 3  [3,0],[3,1],[3,2],[3,3],[3,4],[3,5]
13.   14.  15.   16.   17.   18
// row 4  [4,0],[4,1],[4,2],[4,3],[4,4],[4,5]
12    11      10    9     8    7
// row 5  [5,0],[5,1],[5,2],[5,3],[5,4],[5,5]
1.    2.    3.    4.    5.    6
*/
// output 4, 4 die rolls.

// [
//     [1,1,-1],
//     [1,1,1],
//     [-1,1,1]
// ]

// [
//   [-1,-1,19,10,-1],
//   [2,-1,-1,6,-1],
//   [-1,17,-1,19,-1],
//   [25,-1,20,-1,-1],
//   [-1,-1,-1,-1,15]
// ]

// expected 2
// we outputting 1