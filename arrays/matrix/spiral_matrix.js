/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let [rowStart, rowEnd] = [0, matrix.length - 1];
  let [colStart, colEnd] = [0, matrix[0].length - 1];
  const totalElementCount = matrix.length * matrix[0].length;
  const order = [];

  console.log(totalElementCount)

  while (order.length < totalElementCount) {
      // left -> right
      for (let col = colStart; col <= colEnd; col++) {
          order.push(matrix[rowStart][col]); // start with row 0
      }
      rowStart++; // move down to next row 

      if (order.length === totalElementCount) break;

      // top -> bottom
      // rowStart is now 1
      for (let row = rowStart; row <= rowEnd; row++) {
          order.push(matrix[row][colEnd]); // we move down thru rows, col stays the same
      }
      colEnd--; // move inward from end

      if (order.length === totalElementCount) break;

      // right > left
      for (let col = colEnd; col >= colStart; col--) {
          order.push(matrix[rowEnd][col])
      }
      rowEnd--; // bring it up

      if (order.length === totalElementCount) break;

      // bottom > top
      for (let row = rowEnd; row >= rowStart; row--) {
          order.push(matrix[row][colStart])
      }
      colStart++; // move inward from start
  }

  return order;
};