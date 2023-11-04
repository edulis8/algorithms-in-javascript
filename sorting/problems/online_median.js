// Given a list of numbers, the task is to insert these numbers into a stream and find the median of 
// the stream after each insertion. If the median is a non-integer, consider it’s floor value.

// The median of a sorted array is defined as the middle 
// element when the number of elements is odd and the mean of the middle two elements when the number of elements is even.


// {
//   "stream": [3, 8, 5, 2]
// }
// Output:
// [3, 5, 5, 4]


// BRUTE FORCE
// Total complexity = O(n2 * log(n))
// (looping over a sort) O(n * nlogn)

// loop
//  push each value into an aux array
// sort that array and find the value at index at arr.lengh/2 if it is odd...  (array.length % 2 !== 0)
// if it is even find the value at index Math.ceil(n/2) and the value at index Math.floor(n/2) and add them up and /2 (and floor that)


// Optimal, eric thinking
// probably involves QuickSelect
// determine what the value at n/2 will be without sorting everything. 
// QuickSelect divides in half and recurses on the half that contains index n/2


/**
 * @param {list_int32} stream
 * @return {list_int32}
 */
function online_median(stream) {
  let medians = [];
  let aux = [];

  stream.forEach((el, i) => {
    aux.push(el);


    aux.sort((a, b) => a - b);
    if (aux.length % 2 === 0) { // even
      // if it is even find the value at index Math.ceil(n/2) and the value at index Math.floor(n/2) and add them up and /2 (and floor that)
      let median1 = aux[Math.floor((aux.length - 1) / 2)];
      let median2 = aux[Math.floor((aux.length - 1) / 2) + 1];
      let average = Math.floor((median1 + median2) / 2)
      medians.push(average);
    } else { // odd
      medians.push(aux[Math.floor(aux.length / 2)])
    }
  })

  return medians;
}

console.log('\n******************** OUTPUT ************\n');

// MAKE SURE TO UPDATE THIS:
const input = {
  "stream": [3, 8, 5, 2]
}

// Output:
// [3, 5, 5, 4]

let result = online_median(input.stream);
console.log('result:', result)

console.error('\n******************** ************\n')



// heap_solution.cpp
// The median of an array can be computed only when the array is sorted. 
//To add an element from the stream, we need to maintain a sorted array, and adding an element 
//in the sorted array requires O(size_of_sorted_array) time. As we need only the middle element/s,
//  this complexity can be improved by using a min-heap and a max-heap.

// The min-heap will store the larger half of the stream and the max-heap will store the lower half of the sorted stream. 
// For every element that is added from the stream, we keep the sizes of 
// the heaps the same or they differ maximum by 1. Without the loss of generality, we will have the extra element in 
// max-heap whenever required. This way, if the total size of the stream is odd, the element on top of the max-heap is our median, 
// else the floor of the average of the elements on the top of the min-heap and the max-heap is our required value. 
// Please have a look at the solution for a better understanding.

// Time Complexity
// O(n * log(n)).

// To iterate in n elements = O(n).

// In each iteration,

// Add / remove element to/from heap = O(log(n)).
// Access top element of the heap = O(1).
// Total complexity = O(n * log(n))


function online_median_optimized(stream) {
  // Write your code here.
  let minHeap = new MinHeap();
  let maxHeap = new MaxHeap();
  let result = [];

  for (let i = 0; i < stream.length; i++) {
    if (maxHeap.size() > 0 && stream[i] < maxHeap.peek()) {
      // if element less than maxHeap top value, put it in the maxHeap
      maxHeap.insert(stream[i]);
    } else {
      // if element greater than maxHeap top value put it in the minHeap
      minHeap.insert(stream[i]);
    }

    // why? // The min-heap will store the larger half of the stream and the max-heap will store the lower half of the sorted stream.
    
    // So the min heap top is the smallet value of the larger half of the array
    // and the max heap top is the largest value of the smaller half of the array

    // keep them balanced, let the maxHeap have one more if odd
    if (maxHeap.size() > minHeap.size()) {
      minHeap.insert(maxHeap.remove());
    } else if (minHeap.size() > maxHeap.size() + 1) {
      maxHeap.insert(minHeap.remove());
    }

    // This way, if the total size of the stream is odd, the element on top of the max-heap is our median, 
    // else the floor of the average of the elements on the top of the min-heap and the max-heap is our required value. 
    if (minHeap.size() > maxHeap.size()) {
      result.push(minHeap.peek());
    } else {
      result.push(Math.floor((minHeap.peek() + maxHeap.peek()) / 2));
    }
  }

  return result;
}


