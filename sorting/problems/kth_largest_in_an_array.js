// {
//   "numbers": [5, 1, 10, 3, 2],
//   "k": 2
//   }

//   5 is the 2nd largest
//  sort the array: [ 1, 2, 3, 5, 10 ]
//  from end, it's the second

//  {
//   "numbers": [4, 1, 2, 2, 3],
//   "k": 4
//   }

//   2 is the 4th largest
//   sort the array: [ 1, 2, 2, 3, 4 ]
//   from end, it's the 4th

function implementation(numbers, k) {
  numbers.sort((a, b) => a - b);
  console.log(numbers)

  return numbers[numbers.length - k]
}

// OR YOU CAN DO QUICKSELECT, HALF OF QUICKSORT, to determine the final index values that will lie at numbers.length - k... 
// this is linear, (because it is a geometric series where the problem size decreases by a fraction each time)


console.log('\n******************** OUTPUT ************\n');

// MAKE SURE TO UPDATE THIS:
const input = {
  "numbers": [4, 1, 2, 2, 3],
  "k": 4
}
// output: 5

let result = implementation(input.numbers, input.k);
console.log('result:', result)

console.error('\n******************** ************\n')


// QUICK SELECT



/**
 * @param {list_int32} numbers
 * @param {int32} k
 * @return {int32}
 */
function kth_largest_in_an_array(numbers, k) {
  helper(numbers, 0, numbers.length - 1, numbers.length - k)
  return numbers[numbers.length - k];
}

function helper(A, start, end, index) {
  // base case subproblem size 1
  if (start == end) {
    return;
  }
  // recursive case
  let range = (end - start) + 1;
  let ranindex = Math.floor(Math.random() * range) + start;
  swap(A, ranindex, start);
  let pivot = start;
  for (let i = start + 1; i <= end; i++) {
    if (A[i] <= A[start]) {
      pivot++;
      swap(A, i, pivot);
    }
  }
  swap(A, start, pivot);

  if (pivot == index) {
    return;
  } else if (index < pivot) {
    helper(A, start, pivot - 1, index);
  } else {
    helper(A, pivot + 1, end, index);
  }

}

const swap = (A, i, j) => {
  [A[i], A[j]] = [A[j], A[i]];
}




// META
// HEAP SOLUTION
// Given an integer array and an integer number k. Return the k-th largest element in the array.

// Examples:
// array = [5, -3, 9, 1].  
// * k = 0 => return: 9
// * k = 1 => return: 5 --**
// * k = 3 => return: -3

//
// sort reversed - O(nlogn)
// return array[k]

// instead of sorting entire array
// only do work necessary to find out where array[k] would be if reversed sorted
// or if sorted asc where array[array.length - k]
// quick select
// quick sort - find pivot, divide array based pivot, one side of pivot gets smaller nums, other side gets bigger, you recusively look at each side of array.
// do quick sort, just recurse on side, the side that has index length -k.

// leverage data structure
// top k largest things
// minheap
// 5, 9

function kth_largest(array, k) {
  const minheap = new Heap(k) // sized capped at k.

  // iterate thru array
  // compare curr to heap top
  // if curr > top, insert curr into heap
  // heap can query top (pop). pushing into heap.
  //

  // pop off top of heap

  // linear time
  // space is O(k)
  array.forEach(el => {
    if (!heap.top() || el > heap.top()) {
      heap.push(el)
    }
  })

  return heap.top()
}

