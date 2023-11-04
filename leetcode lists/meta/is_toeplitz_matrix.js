/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
  for (let row = 0; row < matrix.length - 1; row++) {
      for (let col = 0; col < matrix[0].length - 1; col++) {
          
          

          if (matrix[row][col] !== matrix[row + 1][col + 1]) {
              return false;
          }
      }
  }
  return true;
};


// TIME O(mxn in matrix). Linear for grid is like that
// // SPACE O(1)
// [
// [1,2,3,4],
// [5,1,2,3],
// [9,5,1,2]
// ]


// // compare
// // marix[i][j]
// // with
// // matrix[i+1][j+1]


// // have to stay in bound
// // i must be less
// // i < matrix.length -1

// // j must be less
// // j < matrix[0].length-1



// 0,0
// 1,1
// 2,2


// 0,1
// 1,2
// 2,3