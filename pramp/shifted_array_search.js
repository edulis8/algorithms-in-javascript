

// 10
// 0.  GETS 10 ENERGY
// 6 uses 6 energy . energy at 4
// 15 uses 9 energy. energy at -5




/*
Shifted Array Search
A sorted array of distinct integers shiftArr is shifted to the left by an unknown offset and you don’t have a pre-shifted copy of it. For instance, the sequence 1, 2, 3, 4, 5 becomes 3, 4, 5, 1, 2, after shifting it twice to the left.

Given shiftArr and an integer num, implement a function shiftedArrSearch that finds and returns the index of num in shiftArr. If num isn’t in shiftArr, return -1. Assume that the offset can be any value between 0 and arr.length - 1.

Explain your solution and analyze its time and space complexities.

Example:

input:  shiftArr = [9, 12, 17, 2, 4, 5], num = 2 # shiftArr is the
                                                 # outcome of shifting
                                                 # [2, 4, 5, 9, 12, 17]
                                                 # three times to the left

output: 3 # since it’s the index of 2 in arr
Constraints:

[time limit] 5000ms
[input] array.integer arr
[input] integer num
[output] integer


SEVERAL BINARY LOGN SEARCHES
A BINARY SEARCH TO FIND A PIVOT / TURNING POINT

TWO HELPER FUNCTION BINARY SEARCHES TO FIND THE VALUE


This is an easy linear solution so, obviously, the answer is probably logn. All searches must be logn, nothing can be linear!
time: O(logn)
space: constant
*/

function shiftedArrSearch(shiftArr, num) {
  const turningPoint = binarySearchForPivot(0, shiftArr.length - 1)
  if (num > shiftArr[turningPoint]) {
    // search to right of turning point
    return helper(turningPoint, shiftArr.length - 1);
  } else {
    return helper(0, turningPoint);
  }

  // [0,1],
  function binarySearchForPivot(start, end) {
    if (start > end) {
      return end; // Pivot position
    }
  
    let mid = Math.floor((start + end) / 2)
  
    // if next element is greater than curr element, that is the turningPoint/pivot
    if (shiftArr[mid] > shiftArr[mid + 1]) {
      return mid + 1; // Pivot position
    }
  
    if (shiftArr[mid] > shiftArr[end]) {
      return binarySearchForPivot(mid + 1, end, shiftArr);
    } else {
      return binarySearchForPivot(start, mid - 1, shiftArr);
    }
  }

  function helper(startIndex, endIndex) {
    if (startIndex > endIndex) {
      return -1;
    }
    let mid = Math.floor((startIndex + endIndex) / 2);
    if (shiftArr[mid] === num) {
      return mid;
    }
    if (num > shiftArr[mid]) return helper(mid + 1, endIndex);
    if (num < shiftArr[mid]) return helper(startIndex, mid);
  }
}
let shiftArr = [9, 12, 17, 2, 4, 5];
let num = 2
let result = shiftedArrSearch(shiftArr, num)
console.log('result', result)


//<-1, 2, 3, 4, 5
// 2x
// 3, 4, 5, 1, 2

// UNKNOWN OFFSET

// input:  shiftArr = [9, 12, 17, | 2, 4, 5], num = 4

// smaller side
 //2, 4, 5
// divide in middle (check middle if greater than or less than target num)
// 2,4|5
// 2|4


//[  0  1.  2.  3 4. 5] target 3

// if sorted -> [2, 4, 5, 9, 12, 17]
//               0  1. 2. 3. 4.  5

// 2 + 1

// find out offset

// do this logic:
// sorted index + offset = answer   (3)
// sorted index - offset if offset + index > length


// 
// find turning point
// find where element is less than prev

// binary tree
// splitting array on the turning point
// each side is sorted
// only search in array that contains num
// keep dividing to do binary search




// if we knew offset was 3



// output: 3 
// # since it’s the index of 2 in arr






// brute force => one loops, look for num, reurn it
// 

// better than linear

// log





// PYTHON ANSWER


// def shifted_arr_search(nums, num):

//   # your code goes here

// pivot = 0
// left, right = -1, len(nums)
// 2
// while left + 1 < right:
//   mid = (left + right) // 2
// if nums[mid] > nums[right - 1]:
//   left = mid
// else:
// right = mid
// #if nums[mid] == num:
// #return mid
// pivot = right #len(nums)

// print(pivot)

// left, right = -1, pivot
// while left + 1 < right:
//   mid = (left + right) // 2
// if nums[mid] < num:
//   left = mid
//     elif nums[mid] > num:
// right = mid
//     else:
// return mid

// left, right = pivot - 1, len(nums)
// while left + 1 < right:
//   mid = (left + right) // 2
// if nums[mid] < num:
//   left = mid
//     elif nums[mid] > num:
// right = mid
//     else:
// return mid

// return -1