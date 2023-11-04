// Permute Array Of Integers Duplicates Allowed
// Given an array of numbers with possible duplicates, return all of its permutations in any order.

// Example
// {
// "arr": [1, 2, 2]
// }
// Output:

// [
// [1, 2, 2],
// [2, 1, 2],
// [2, 2, 1]
// ]
// Notes
// Constraints:

// 1 <= size of the input array <= 9
// 0 <= any array element <= 9


// BRUTE FORCE, use a set, but this isn't optimized over the regular get_permutations
function get_permutations(arr) {
  const permHelper = (arr, i, slate) => {
    if (i === arr.length) {
      result[slate.join('')] = [...slate];
      return;
    } else {
      // iterate over problem set. For each element, append it to slate, then recurse / hand rest of problem to subordinate
      for (let indexOfNumberToUse = i; indexOfNumberToUse < arr.length; indexOfNumberToUse++) {
        slate.push(arr[indexOfNumberToUse]);
        swap(indexOfNumberToUse, i, arr) // remove number used from problem set passed down. Since i+1 is passed down and indexOfNumber to use is i, it will not be included in numbers operated on by subordinate
        permHelper(arr, i + 1, slate)
        slate.pop(); // everything we do to these mutable arrays, we reverse
        swap(indexOfNumberToUse, i, arr) // everything we do we reverse
      }
    }
  }

  const result = {}
  permHelper(arr, 0, []);
  return Object.values(result);
}

function swap(i, j, arr) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}


console.log('\n******************** OUTPUT ************\n');
let input = {
  "arr": [2,2,2,2,2,1,2,2]
}

let result = get_permutations_faster(input.arr);
console.log('result:', result)
console.log('\n******************** ************\n')

function get_permutations_faster(arr) {
  const permHelper = (arr, i, slate) => {
    if (i === arr.length) {
      result.push([...slate]);
      return;
    } else {
      // iterate over problem set. For each element, append it to slate, then recurse / hand rest of problem to subordinate
      const set = new Set();
      for (let indexOfNumberToUse = i; indexOfNumberToUse < arr.length; indexOfNumberToUse++) {
        if (set.has(arr[indexOfNumberToUse])) {
          continue; //skip duplicate, prune that part of tree that will be the same
        } 
        set.add(arr[indexOfNumberToUse])
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