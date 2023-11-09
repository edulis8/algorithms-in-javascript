// 670. Maximum Swap
// Medium
// 3.2K
// 181
// company
// Facebook
// company
// TikTok
// company
// Amazon


// You are given an integer num. You can swap two digits at most once to get the maximum valued number.

// Return the maximum valued number you can get.

 

// Example 1:

// Input: num = 2736
// Output: 7236
// Explanation: Swap the number 2 and the number 7.
// Example 2:

// Input: num = 9973
// Output: 9973
// Explanation: No swap.
 

// Constraints:

// 0 <= num <= 108


// FIND TURNING POINT
var maximumSwap = function (num) {
  const arr = num.toString().split('');

  // numbers should be descending, when we hit a "valley" save that turning point, 
  // find max in rest of the array
  // swap with 
  let turningPoint = null;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i + 1]) {
      turningPoint = i;
      break;
    }
  }

  if (turningPoint === null) return num;

  // find the max to the right
  let maxRight = turningPoint + 1; // the greater value we found above
  for (let j = turningPoint + 2; j < arr.length; j++) {
    if (arr[j] >= arr[maxRight]) {
      maxRight = j;
    }
  }

  for (let i = 0; i <= turningPoint; i++) {
    if (arr[i] < arr[maxRight]) {
      swap(arr, i, maxRight)
      break;
    }
  }

  return parseInt((arr.join('')), 10)
}

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j]
    arr[j] = temp
}


  // 3 is turning point
  // 98 -3- 68

  // 8 is max to the right

    // find 3's location again
  // 98863

  // find the first number < maximum
  // the turning point is the first value less than a greater value
  // it might not be the point we need to swap at
  // example: 
    // 115 to
    // 511