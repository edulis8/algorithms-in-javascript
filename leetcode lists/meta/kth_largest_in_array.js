/**
 * Given an integer array nums and an integer k, return the kth largest element in the array.

Note that it is the kth largest element in the sorted order, not the kth distinct element.

Can you solve it without sorting?

Example 1:

Input: nums = [3,2,1,5,6,4], k = 2
Output: 5
Example 2:

Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
Output: 4


NOTE - WHEN YOU WANT K LARGEST, USE A MINHEAP OF SIZE K
- stores values in ascending order
- you're making sure only larger k values go in
- if we wanted all K largest values
- smaller values would get popped off
- larger ones bubble down and are preserved, unless they get bubbled up by even larger ones

 * 
 *    linear time
  // space is O(k) - heap never gets above k in size
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// brute force: sort and use index nums.length - k
// USE HEAP to optimize
var findKthLargest = function (nums, k) {
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
[3, 2, 3, 1, 2, 4, 5, 5, 6]

// heap of highest values in order min to max
// iterate through
// add to heap
// if top of heap < curr, insert curr


// kth largest possible alternate code
// SIMPLER AND SAME APPROACH AS K CLOSEST POINTS TO ORIGIN:
var alt = function (nums, k) {
  let minHeap = new MinHeap();
  nums.forEach((el, i) => {
    // insert
    minHeap.insert(el);
    // just insert until size > k
    if (minHeap.size() > k) {
      // removes minimum so far to maintain size at k
      minHeap.pop();
    }
  })
  let result = [];
  // while loop on size, pop and push
  while (minHeap.size()) {
    result.push(minHeap.pop())
  }
  return result
};

// assumes methods
// insert()
// size()
// pop() which returns top (min) value.... or max value for a maxHeap
// 




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
