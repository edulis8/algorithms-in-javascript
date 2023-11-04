class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(value) {
    // Add the new element to the end of the heap
    this.heap.push(value);

    // Ensure the heap property is maintained
    this.bubbleUp(this.heap.length - 1);
  }

  pop() {
    if (this.heap.length === 0) {
      return null; // Heap is empty
    }

    if (this.heap.length === 1) {
      return this.heap.pop(); // If there's only one element, remove and return it
    }

    // Swap the root (minimum) element with the last element
    const minValue = this.heap[0];
    this.heap[0] = this.heap.pop();

    // Ensure the heap property is maintained
    this.heapify(0);

    return minValue;
  }

  size() {
    return this.heap.length;
  }

  top() {
    return this.heap.length === 0 ? null : this.heap[0];
  }

  bubbleUp(index) {
    const parentIndex = Math.floor((index - 1) / 2);

    while (index > 0 && this.heap[index] < this.heap[parentIndex]) {
      // Swap the current element with its parent
      [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];

      // Move up the tree
      index = parentIndex;
    }
  }

  heapify(index) {
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;
    let smallestIndex = index;

    // Find the index of the smallest child (if it exists)
    if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallestIndex]) {
      smallestIndex = leftChildIndex;
    }

    if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallestIndex]) {
      smallestIndex = rightChildIndex;
    }

    // If the smallest child is not the current element, swap them and continue heapifying
    if (smallestIndex !== index) {
      [this.heap[index], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[index]];
      this.heapify(smallestIndex);
    }
  }
}

// Given an initial list along with another list of numbers to be appended 
// with the initial list and an integer k, return an array consisting of the k-th largest element after adding each element from the first list to the second list.
/**
 * @param {int32} k
 * @param {list_int32} initial_stream
 * @param {list_int32} append_stream
 * @return {list_int32}
 */
// Brute force
// after each append, sort the new array, the result is the element at arr.length - k

// Optimal approach uses minheap
// heap_solution.cpp
// The idea is to keep track of only the k largest elements of the stream. Create a min-heap storing the k largest elements from initial_stream. To create such a heap, we can sort the initial_stream and push k largest elements in the heap but this will require O(n * log(n)). Instead, we will directly push elements from initial_stream to min-heap to achieve a complexity of O(n * log(k)). While pushing the elements we will keep a check such that the size of min-heap does not exceed k which can be achieved by popping the top element of the heap when its size becomes k + 1.

// How to process a new element of the append_stream?

// If the new element is smaller than the top element of the heap, ignore it.
// else remove the topmost element of the heap and insert the new element in the heap. To remove or insert a new element, the time complexity is O(log(k)).
// The top element of the heap is always the k-th largest element of the current stream.

// Note: It is possible to get a solution using a max-heap also instead of a min-heap, but would require some extra handling i.e. maintaining a max-heap of size number_of_elements_at_time - k + 1 to get the k-th largest element.

// Time Complexity
// O( log(k) * ( n + m )).
// To maintain a heap of size k = O(log(k)).
// We push and pop every element of the initial and append stream at most once.

function kth_largest(k, initial_stream, append_stream) {
  const min_heap = new MinHeap();

  for (let i = 0; i < initial_stream.length; i++) {
    // create a min heap out of the initial stream
    // this min heap will have the k largest elements, heaped in descending order
    min_heap.push(initial_stream[i]);

    // Make sure that the heap size does not exceed K.
    if (min_heap.size() > k) {
      min_heap.pop(); // Remove the element smaller than the K largest elements.
    }
  }

  const result = [];

  for (let i = 0; i < append_stream.length; i++) {
    console.log('pushing', append_stream[i])
    // put element into heap from th append array
    min_heap.push(append_stream[i]);

    // Make sure that the heap size does not exceed K.
    if (min_heap.size() > k) {
      min_heap.pop(); // Remove the element smaller than the K largest elements.
    }
    // Basically ^ that is doing this: If the new element is smaller than the top element of the heap, ignore it.
    // But you could also ignore above which would be more efficient, I think

    // Adding current Kth largest element.
    result.push(min_heap.top());
  }

  return result;
}

console.log('\n******************** OUTPUT ************\n');

// MAKE SURE TO UPDATE THIS:
const input = {
  "k": 2,
  "initial_stream": [4, 6],
  "append_stream": [5, 2, 20]
  }
// output: [5, 5, 6]


// minheap is 4,6
// then it is 5,6
// then 2 gets pushed into it but immediately removed, so it is still 5,6
// then 20 goes in, heap is 6, 20

let result = kth_largest(input.k, input.initial_stream, input.append_stream);
console.log('result:', result)

console.error('\n******************** ************\n')




