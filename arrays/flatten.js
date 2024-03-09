// Complexity Analysis:
// Time complexity:

// In the worst-case scenario, where every element in arr is an array and the maximum depth n is reached, the recursive function will be called for each nested array at each level.
// This results in a total of O(k*n) recursive calls, where k represents the average number of nested arrays at each level, and n is the maximum depth level.
// Space complexity:

// The space complexity of the solution is determined by the depth level n since it affects the maximum depth of recursion.
// Each recursive call consumes additional space on the call stack. Therefore, the space complexity is O(n) as we need space for n recursive calls on the call stack.


/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
  // if (n <= 0) return [...arr];
  const result = [];
  helper(arr, 0)
  // input: [1,2,3, [4,5,6],[7,8,[9,10,11],12],[13,14,15]]

  // depth 1
  // 1 > 0
  //
  // output: [1,2,3,4,5,6,7,8,[9,10,11],12,13,14,15]

  // want: [1,2,3,[4,5,6],[7,8,[9,10,11],12],[13,14,15]]
  function helper(array, depth) {
    // if (i >= array.length) {
    //     return;
    // }
    for (let i = 0; i < array.length; i++) {
      if (!Array.isArray(array[i]) || depth >= n) {
        result.push(array[i]);
      } else {
        // arr[i] is the array, reset index to 0 (in loop at next level of recursion) so we can iterate thru it, increment depth
        helper(array[i], depth + 1);
      }
    }
  }

  return result;
};

// 1,2,3,4,5,6, 7, 8, [9, 10, 11],12, 13,14,15
// Input
// depth 2
// i 4

//    0        1  1. 1.   1. 1.  2.           1
// arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
//                        ^
// n = 1


// Output
// [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]