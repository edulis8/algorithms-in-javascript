// O(logn), linearithmic, 
// Example of DIVIDE AND CONQUER
// STABLE, no swapping
// NOT IN PLACE

function implementation(arr) {
  helper(arr, 0, arr.length - 1)
  return arr;

  function helper(arr, start, end) {
    // leaf worker
    if (start === end) {
      return;
    }
    // internal node worker
    let mid = Math.floor((start + end) / 2);
    helper(arr, start, mid); // sort first half
    helper(arr, mid + 1, end); // sort second half

    // merge two sorted halves
    let i = start;
    let j = mid + 1;

    let aux = [];

    // WORK DONE AFTER RECURSING
    // sorting into the subarray
    // Two pointer pass sorting
    while (i <= mid && j <= end) {
      if (arr[i] <= arr[j]) {
        aux.push(arr[i]);
        i++;
      } else { 
         aux.push(arr[j]);
         j++;
      }
    }

    // gathering what's left phase
    while (i <= mid) {
      aux.push(arr[i]);
      i++;
    }
    while (j <= end) {
      aux.push(arr[j]);
      j++
    }
    // startIndex, deleteCount, values
    arr.splice(start, aux.length, ...aux)
  }
}

console.log('\n******************** OUTPUT ************\n');

// MAKE SURE TO UPDATE THIS:
const input = [5, 8, 3, 9, 4, 1, 7, 1, 0, 101, 10001]     // <--- UPDATE
let result = implementation(input);
console.log('result:', result
)
console.error('\n******************** ************\n')

