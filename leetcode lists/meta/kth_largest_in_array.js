/**
 *   // linear time
  // space is O(k) - heap never gets above k in size
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  const heap = new MinHeap();
  
  nums.forEach((el, i) => {
      // initial values
      if (i >= 0 && i < k) {
          heap.insert(el);
      } else {
          const top = heap.peek();
          if (el > top) {
              heap.pop();
              heap.insert(el);
          }
      }
  })
  return heap.pop()
};




// TODO: could pop off before insert to keep space small.

// heap
// 1,2,3,3
// 2,2,3,3
// 2,3,3,4
// 3,3,4,5
// 3,4,5,5
// 4,5,5,6
[3,2,3,1,2,4,5,5,6]


// end 5,6

//  2,3
//  3,5
//  5,6
//  [3,2,1,5,6,4]
// [3,2,1,5,6,4], k = 2


// heap of highest values in order min to max
// iterate through
// add to heap
// if top of heap < curr, insert curr
// 


class MinHeap {
constructor() {
  this.heap = [];
}

// Insert a new element into the heap.
insert(value) {
  this.heap.push(value);
  this.bubbleUp();
}

// Get the minimum (top) element in the heap.
peek() {
  if (this.heap.length === 0) {
    return null;
  }
  return this.heap[0];
}

// Remove and return the minimum (top) element from the heap.
pop() {
  if (this.heap.length === 0) {
    return null;
  }
  if (this.heap.length === 1) {
    return this.heap.pop();
  }
  const minValue = this.heap[0];
  this.heap[0] = this.heap.pop();
  this.bubbleDown();
  return minValue;
}

// Move the last element up to its correct position in the heap.
bubbleUp() {
  let currentIndex = this.heap.length - 1;
  while (currentIndex > 0) {
    const parentIndex = Math.floor((currentIndex - 1) / 2);
    if (this.heap[currentIndex] >= this.heap[parentIndex]) {
      break;
    }
    [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]];
    currentIndex = parentIndex;
  }
}

// Move the first element down to its correct position in the heap.
bubbleDown() {
  let currentIndex = 0;
  while (true) {
    const leftChildIndex = 2 * currentIndex + 1;
    const rightChildIndex = 2 * currentIndex + 2;
    let smallerChildIndex = null;

    if (leftChildIndex < this.heap.length) {
      smallerChildIndex = leftChildIndex;
    }

    if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[leftChildIndex]) {
      smallerChildIndex = rightChildIndex;
    }

    if (smallerChildIndex === null || this.heap[currentIndex] <= this.heap[smallerChildIndex]) {
      break;
    }

    [this.heap[currentIndex], this.heap[smallerChildIndex]] = [this.heap[smallerChildIndex], this.heap[currentIndex]];
    currentIndex = smallerChildIndex;
  }
}
}
