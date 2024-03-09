const rotateMatrix = (matrix) => {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const rotatedMatrix = [];

  for (let col = 0; col < cols; col++) {
    const newRow = [];
    for (let row = rows - 1; row >= 0; row--) {
      newRow.push(matrix[row][col]);
    }
    rotatedMatrix.push(newRow);
  }

  return rotatedMatrix;
};

// Test cases
const matrix1 = [
  [1, 2],
  ["c", 4],
  [5, "f"],
];

const matrix2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const matrix3 = [[1]];

// console.log("Original Matrix:");
// printMatrix(matrix1);
// console.log("\nRotated Matrix:");
// printMatrix(rotateMatrix(matrix1));

// console.log("\nOriginal Matrix:");
// printMatrix(matrix2);
// console.log("\nRotated Matrix:");
// printMatrix(rotateMatrix(matrix2));

// console.log("\nOriginal Matrix:");
// printMatrix(matrix3);
// console.log("\nRotated Matrix:");
// printMatrix(rotateMatrix(matrix3));

// =========



const origMatrix = [
  [1, 2], // ^
  ["c", 4], // ^
  [5, "f"], // inner, (row) ^
  // --> outer (col)
];
const expected = [
  [5, "c", 1],
  ["f", 4, 2],
];
// result: [
//   [5, "f"],
//   ["c", 4],
//   [1, 2],
// ];

function _rotateMatrix(origMatrix) {
  const newMatrix = [];
  const colLength = origMatrix[0].length; //
  const rowLength = origMatrix.length; // 3

  // first iteration, column stays 0 while row changes
  for (let col = 0; col < colLength; col++) {
    const subarray = [];
    // up the rows:
    for (let row = rowLength - 1; row >= 0; row--) {
      subarray.push(origMatrix[row][col]); // [2][0]  aka 5
    }
    newMatrix.push(subarray);
  }
  return newMatrix;
}

const result = _rotateMatrix(origMatrix);
console.log({ result });
