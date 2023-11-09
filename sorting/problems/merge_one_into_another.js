// Merge One Sorted Array Into Another
// First array has n positive numbers, and they are sorted in the non-descending order.

// Second array has 2n numbers: first n are also positive and sorted in the same way but the last n are all zeroes.

// Merge the first array into the second and return the latter. You should get 2n positive integers sorted in the non-descending order.

// Example
// {
// "first": [1, 3, 5],
// "second": [2, 4, 6, 0, 0, 0]
// }
// Output:

// [1, 2, 3, 4, 5, 6]
// Notes
// Constraints:

// 1 <= n <= 105
// 1 <= array elements (except those zeroes) <= 2 * 109
// ******** IMPORTANT TO ASK: You can use only constant auxiliary space *****
// "Can I use auxiliary space"?


// BrUTE FORCE: put first into second where the 0s are, and do sort. n(logn)

/**
 * @param {list_int32} first
 * @param {list_int32} second
 * @return {list_int32}
 */
function merge_one_into_another(first, second) {
  // do a two pointer pass from right to left,
    // start both the pointers at first.length - 1,
    // if first > second, place first at end of array
    // else place second at end of array
    // decrement a variable that keeps track of next last array index for next iteration


    let i = first.length - 1; 
    let j = i;
    let placementIndex = second.length - 1;


    // "first": [1, 3, 5],
// "second": [2, 4, 6, 0, 0, 0]


    while (i >= 0 && j >= 0) {
      if (first[i] >= second[j]) {
        second[placementIndex] = first[i];
        i--;
      } else {
        second[placementIndex] = second[j];
        j--;
      }
      placementIndex--;
    }

    // gathering what's left phase, if 
    while (i >= 0) {
      second[placementIndex] = first[i];
      i--;
      placementIndex--;
    }
    // not needed
    // second array already has all its remaining items in sorted order at the beginning, so we don't need to do this, it would just be copy/pasting the same items
    // while (j >= 0) {
    //   second[placementIndex] = second[j];
    //   j++
    //   placementIndex--;
    // }

  return second;
}


console.log('\n******************** OUTPUT ************\n');

// MAKE SURE TO UPDATE THIS:
let input = {
"first": [1, 3, 5,100],
"second": [2, 4, 6,101, 0, 0, 0, 0]
}

let result = merge_one_into_another(input.first, input.second);
console.log('result:', result)

console.error('\n******************** ************\n')