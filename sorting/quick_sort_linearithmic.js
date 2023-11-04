
// [5, 8, 3]
// smaller pointer: = index 0 | 5
// bigger pointer = index 1 | 3
// swap 3 with 3
// smaller pointer: = index 1 | 3
// bigger pointer = index 2 | 8
function implementation(arr) {
  //  delegate work to subordinate, give it the array, start and end
  helper(arr, 0, arr.length - 1);

  return arr;

  function helper(arr, start, end) {
    // ## leaf worker
    if (start >= end) {
      return;
    }
    // ## intermediate worker
    // WORK DONE BEFORE RECURSING
    let smallerPointer = start; // the Pivot

    for (let biggerPointer = start + 1; biggerPointer <= end; biggerPointer++) {

      // if bigger pointer hits a number that is less than the pivot
      if (arr[biggerPointer] < arr[start]) {
        smallerPointer++; // we move smaller pointer forward
        let temp = arr[biggerPointer]; // swap smaller number with bigger number (we're moving the smaller numbers to the left side of the subarray)
        arr[biggerPointer] = arr[smallerPointer];
        arr[smallerPointer] = temp;
      }
    }

    // After the bigger/smaller dividing has finished, put the pivot in the middle of the smaller and bigger numbers
    let temp = arr[start];
    arr[start] = arr[smallerPointer];
    arr[smallerPointer] = temp;

    // arr, 0 , 0
    helper(arr, start, smallerPointer - 1)
    // arr 2, 2
    helper(arr, smallerPointer + 1, end);
  }
}


console.log('\n******************** OUTPUT ************\n');

// MAKE SURE TO UPDATE THIS:
const input = [5, 8, 3, 9, 4, 1, 7, 303 , -55, 8,8,8]     // <--- UPDATE 5, 8, 3, 9, 4, 1, 7
let result = implementationWithRandomization(input);
console.log('result:', result
)
console.error('\n******************** ************\n')






function implementationWithRandomization(arr) {
  //  delegate work to subordinate, give it the array, start and end
  helper(arr, 0, arr.length - 1);

  return arr;

  function helper(arr, start, end) {
    // ## leaf worker
    if (start >= end) {
      return;
    }

    // --- Randomize the pivot to avoid worst case ----
    let pivotIndex = Math.floor(Math.random() * (end - start + 1) + start);
    let holder = arr[start];
    arr[start] = arr[pivotIndex];
    arr[pivotIndex] = holder;
    // ----
    // ## intermediate worker (lomuto's partitioning, used in QuickSelect too)
    let smallerPointer = start; // the Pivot
    for (let biggerPointer = start + 1; biggerPointer <= end; biggerPointer++) {
      // if bigger pointer hits a number that is less than the pivot
      if (arr[biggerPointer] < arr[start]) {
        smallerPointer++; // we move smaller pointer forward
        let temp = arr[biggerPointer]; // swap smaller number with bigger number (we're moving the smaller numbers to the left side of the subarray)
        arr[biggerPointer] = arr[smallerPointer];
        arr[smallerPointer] = temp;
      }
    }

    // After the bigger/smaller dividing has finished, put the pivot in the middle of the smaller and bigger numbers. 
    // This is its final position. Doesn't need to be further worked on.
    let temp = arr[start];
    arr[start] = arr[smallerPointer];
    arr[smallerPointer] = temp;

    // arr, 0 , 0
    helper(arr, start, smallerPointer - 1)
    // arr 2, 2
    helper(arr, smallerPointer + 1, end);
  }
}