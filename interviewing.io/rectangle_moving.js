/*

Given an image of 1's. There is always one rectangle (represented by 0's) in it. Find it.

[
   [1, 1, 1, 1, 1, 1, 1], 
   [1, 1, 1, 1, 1, 1, 1], 
   [1, 1, 1, 0, 0, 0, 1], 
   [1, 1, 1, 0, 0, 0, 1], 
   [1, 1, 1, 1, 1, 1, 1], 
]; 

Input: 2D array, always only one rectangle of zeros, has to be rectangle
Output: 
{
  topLeft: [2,3], 
  width: 3,
  height: 2
}
*/

function findRectangle(array) {
  let foundTopLeft = false;
  const result = {
  // coords: row,col
    topLeft: [0,0],
    width: 0,
    height: 0
  }

  const numRows = array.length;
  const numCols = array[0].length;


//   [
//     [1, 1, 1, 1, 1, 1, 1], 
//     [1, 1, 1, 1, 1, 1, 1], 
//     [1, 1, 1, 0, 0, 0, 1],   topLeft: [2,3]
//     [1, 1, 1, 0, 0, 0, 1], 
//     [1, 1, 1, 1, 1, 1, 1], 
//  ]; 

  // look for top left corner of rectangle
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      if (array[i][j] === 0) {
        result.topLeft = [i, j];
        foundTopLeft = true;
        break;
      }
    }
    if (foundTopLeft) break;
  }

  // find width
  for (let j = result.topLeft[1]; j < numCols; j++) {
    if (array[result.topLeft[0]][j] === 1) {
      break;
    }
    result.width++;
  }

  // find height, iterate downwards, col stays same
  for (let i = result.topLeft[0]; i < numRows; i++) {
    if (array[i][result.topLeft[1]] === 1) {
      break;
    }
    result.height++;
  }
  return result;
}


function moveRectangle(grid, verticalOffset, horizontalOffset) {
  const rectangleInfo = findRectangle(grid);

  const newTopLeftRow = rectangleInfo.topLeft[0] + verticalOffset;
  const newTopLeftCol = rectangleInfo.topLeft[1] + horizontalOffset;

  const numRows = grid.length;
  const numCols = grid[0].length;

  // Create a new grid with the rectangle moved to the new position
  const newGrid = Array.from({ length: numRows }, () => Array(numCols).fill(1));

  for (let i = 0; i < rectangleInfo.height; i++) {
    for (let j = 0; j < rectangleInfo.width; j++) {
      const newRow = newTopLeftRow + i;
      const newCol = newTopLeftCol + j;

      // Only update the new grid if the coordinates are in bounds
      if (newRow >= 0 && newRow < numRows && newCol >= 0 && newCol < numCols) {
        newGrid[newRow][newCol] = 0;
      }
    }
  }

  // Check if no part of the rectangle remains in the grid (no "0"s in the grid)
  if (newGrid.every(row => row.every(cell => cell !== 0))) {
    throw new Error('You can not move the rectangle off the grid entirely');
  }

  return newGrid;
}

const _grid = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 0, 0, 0, 1],
  [1, 1, 1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1],
];

try {
  // verticalOffset, horizontalOffset) {
  const movedResult = moveRectangle(_grid, -2, -6);
  console.log(JSON.stringify(movedResult));
} catch (error) {
  console.error(error.message);
}

// BELOW IS CHAT GPT's SOLUTION WITH SOME PROBLEMS, threw an error if any part of rectangle went out of bounds

// const grid = [
//   [1, 1, 1, 1, 1, 1, 1], 
//   [1, 1, 1, 1, 1, 1, 1], 
//   [1, 1, 1, 1, 1, 1, 1], 
//   [1, 1, 1, 1, 1, 1, 1], 
//   [1, 1, 1, 1, 1, 1, 0], 
// ]; 
// const result = solution(grid)
// console.log(result)


//     [1, 1, 1, 1, 1, 1, 1], 
//     [1, 1, 0, 1, 1, 1, 1], []
//     [1, 1, 1, 0, 0*, 0, 1],   //newBottomRight = [2,4]
//     [1, 1, 1, 0, 0, 0, 1], 
//     [1, 1, 1, 1, 1, 1, 1], 

/*
Define a function to move that rectangle within the image. 
Rectangle can go out of bounds, but at least one pixel should be within the image (throw exception if entirely out of bounds).
We are not resizing, just moving.
Can use prior solution as a helper.

offsets define new location (of topLeft 0) based on moves away from original location
negative for vertical means down, positive means up
negative for horizontal mean left, positive mean right

Input: grid, verticalOffset, horizontalOffset)

Output: grid
*/

// function solution(grid, verticalOffset, horizontalOffset) {
//   // move the rectangle's top left 0 to new location, move entire rectangle
//   const rectangleInfo = findRectangle(grid);
//   console.log('rectangleInfo', rectangleInfo)

//   const newTopLeftRow = rectangleInfo.topLeft[0] + verticalOffset; // 1
//   const newTopLeftCol = rectangleInfo.topLeft[1] + horizontalOffset; // 2

//   const newBottomRightRow = newTopLeftRow + rectangleInfo.height - 1; // 1+2 = 2
//   const newBottomRightCol = newTopLeftCol + rectangleInfo.width -1; // 2+3= 4

//   const numRows = grid.length;
//   const numCols = grid[0].length;

//   // calculate if out of bounds 
//   // (this is buggy, doesn't allow rectangle to be moved out of bounds at all)

//   if (
//     newTopLeftRow < 0 ||
//     newTopLeftCol < 0 ||
//     newBottomRightRow >= numRows ||
//     newBottomRightCol >= numCols
//   ) {
//     throw new Error("out of bounds")
//   }

//   const newGrid = Array.from({length: numRows}, () => Array(numCols).fill(1));

//   for (let i = 0; i < rectangleInfo.height; i++) {
//     for (let j = 0; j < rectangleInfo.width; j++) {
//       console.log('debug', newTopLeftRow, i)
//       // check if in bounds:
//       newGrid[newTopLeftRow + i][newTopLeftCol + j] = 0;
//     }
//   }
  
//   return newGrid;
// }

// const _grid = [
//       [1, 1, 1, 1, 1, 1, 1], 
//       [1, 1, 1, 1, 1, 1, 1], 
//       [1, 1, 1, 0, 0, 0, 1],  
//       [1, 1, 1, 0, 0, 0, 1], 
//       [1, 1, 1, 1, 1, 1, 1], 
//    ]; 
//   //  verticalOffset, horizontalOffset) {
// const movedResult = solution(_grid, -3, -3)

// console.log(JSON.stringify(movedResult));



// [
// [1,1,1,1,1,1,1],
// [1,1,0,0,0,1,1],
// [1,1,0,0,0,1,1],
// [1,1,1,1,1,1,1],
// [1,1,1,1,1,1,1]
// ]


