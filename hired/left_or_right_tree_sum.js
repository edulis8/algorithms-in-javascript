// Binary tree rep'd as array
// return whether left or right sum is greater


const solution = (arr) => {
  // Type your solution here 
  let leftSum = 0;
  let rightSum = 0;

  leftHelper(arr, 1);
  rightHelper(arr, 2);

  console.log(leftSum)
  console.log(rightSum)
  if (arr.length == 0 || leftSum == rightSum) {
      return '';
  }
  if (leftSum > rightSum) {
      return 'Left'
  } else {
      return 'Right';
  }

  function leftHelper(arr, i) {
      if (arr[i]) {
          leftSum += arr[i];

          var lIndex = 2 * i + 1; // left = 2*i + 1
          var rIndex = 2 * i + 2; // right = 2*i + 2


          if (arr[lIndex] && arr[lIndex] != -1) {
              leftHelper(arr, lIndex)
          }
          if (arr[rIndex] && arr[rIndex] != -1) {
              leftHelper(arr, rIndex)
          }
      }
  }
  
  function rightHelper(arr, i) {
      if (arr[i]) {
          rightSum += arr[i];

          var lIndex = 2 * i + 1; // left = 2*i + 1
          var rIndex = 2 * i + 2; // right = 2*i + 2

          if (arr[lIndex] && arr[lIndex] != -1) {
              rightHelper(arr, lIndex)
          }
          if (arr[rIndex] && arr[rIndex] != -1) {
              rightHelper(arr, rIndex)
          }
      }
  }
};

//[1, 10, 5, 1, 0, 6]


// [3, 6, 2, 9, -1, 10]
//  0. 1. 2. 3. 4. 5

// [3, 6, 2, 9, -1, 10]
//  1. 2. 3. 4. 5. 6

// on index (starting at 1)
// left child is *2 and right child is *2+1