// Permute Array Of Unique Integers
// Given an array of unique numbers, return in any order all its permutations.

// Example
// {
// "arr": [1, 2, 3]
// }
// Output:

// [
// [1, 2, 3],
// [1, 3, 2],
// [2, 1, 3],
// [2, 3, 1],
// [3, 2, 1],
// [3, 1, 2]
// ]
// Notes
// Constraints:

// 1 <= size of the input array <= 9
// 0 <= any array element <= 99

// Time complexity => O(n! * n)
// Space complexity => 
/**
 * @param {list_int32} arr
 * @return {list_list_int32}
 */
function get_permutations(arr) {
  // My initial solution, uses more space, simpler to think about, immutable (which I like, but it uses more space)
  // unique/distinct numbers
  // lazy manager
  // loop, hand submanager a partial solution and the rest of the items they can work with
  const permHelper = (slate, subarray) => {
    if (subarray.length === 0) {
      result.push([...slate]); // copy the array , can also use slate.slice()
      return;
    } else {
      subarray.forEach((numberToUse, i) => {
        slate.push(numberToUse); // add number we are going to use on slate
        let arrayWithoutUsedNumber = [...subarray.slice(0, i), ...subarray.slice(i + 1)]; // time/space complexity is linear here. 
        permHelper(slate, arrayWithoutUsedNumber);
        slate.pop(); // remove number we are going to use on slate. if u create copy of slate and don't pop, same result?~
      });
    }
  }

  const result = [];
  permHelper([], arr)

  return result;
}
~
console.log('\n******************** OUTPUT ************\n');
let input = {
  "arr": [1, 1, 2]
}

let result = get_permutations_mutable_with_swapping(input.arr);
console.log('result:', result)
console.log('\n******************** ************\n')


// From IK Video 
// nums = [1,2,3]
// _ _ _ three blanks
// 3 2 1 choices
// There will be n! results
// TIME COMPLEXITY: O(n!*n)
// SPACE COMPLEXITY: 0(n!*n)
// because: n! is the number of perms. n is the length of each perm
// in time, each perm needs to be built out of n characters, so theres that many operations
// in space, the result array has a slot for each perm, times the length of the perm.


// Not creating new arrays with one less member as subproblem set
// instead, subproblem is the array AFTER an index that we increment
// so we iterate from that index to the end of the array
// [2,3]
// then [3]
// We remove the slate-used element not by cutting it out of the middle as above
// but by swapping it out of the middle, and incrementing the index by one, so it is cut out of the beginning.

//[1,2,3]
function get_permutations_mutable_with_swapping(arr) {
  const permHelper = (arr, i, slate) => {
    if (i === arr.length) {
      result.push([...slate]);
      return;
    } else {
      // iterate over problem set. For each element, append it to slate, then recurse / hand rest of problem to subordinate
      for (let indexOfNumberToUse = i; indexOfNumberToUse < arr.length; indexOfNumberToUse++) {
        slate.push(arr[indexOfNumberToUse]);
        swap(indexOfNumberToUse, i) // remove number used from problem set passed down. Since i+1 is passed down and indexOfNumber to use is i, it will not be included in numbers operated on by subordinate
        permHelper(arr, i + 1, slate)
        slate.pop(); // everything we do to these mutable arrays, we reverse
        swap(indexOfNumberToUse, i) // everything we do we reverse
      }
    }
  }

  const swap = (i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  const result = [];
  permHelper(arr, 0, []);
  return result
}

