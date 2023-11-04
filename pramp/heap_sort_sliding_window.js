function sortKMessedArray(arr, k) {
  // edge case
  if (!k) return arr;
  
  let left = 0;
  const heap = new MinHeap();
  const out = [];

  // seeded our heap
  while (left < k + 1) {
    heap.insert(arr[left])
    left++;
  }
  while (heap.size() > 0) {
    out.push(heap.extractMin());
    if (left < arr.length) {
       heap.insert(arr[left]);
       left++;
    }
  }
  return out;
}

// heapsort!
// size of heap is never bigger than k + 1


//out [1, 2, 3]
//              [4, 5, 7 ]
//arr = [1, 4, 5, , , 7, 8, 6, 10, 9], k = 2 // "at most"



// know i have  to move at most k times right or left
// iterate thru
// compare adjacent elements
// if el > left el, move it left up to k times, comparing as i go
// if el < right el, move it right up to k times
// 

// insertion sort ish
// right shift elements till they get to their "place"


// sliding window, window is size k + 1
// pulling smallest element out of window, adding a new element to the window
// 1,4,5,2 
// 1,4,5 fine its sorted
// move sliding window forward by 1
// 4,5,2 since 2 is greater than previous
// look 2 index back, swap if appropriate, if not look 1 place back,
// move window forward by 1
// 2, 5, 4, 3, 7
// we're on 4, check k prev values, find greater, swap. -> swap 4 and 5


// sliding window, window is size k + 1
// pulling smallest element out of window, moving window forward
// 1, 4, 5, 2, 3,


// sliding window "is a minheap"
// heap
// minheap
// 1 , 2

// nlogk




class MinHeap {
  constructor() {
    this.heap = [];
  }

  // Add an element to the heap
  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }
  
  size() {
    return this.heap.length;
  }

  // Remove and return the minimum element (root) from the heap
  extractMin() {
    if (this.isEmpty()) {
      return null;
    }

    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapify(0);

    return min;
  }

  // Return the minimum element without removing it
  peekMin() {
    return this.isEmpty() ? null : this.heap[0];
  }

  // Check if the heap is empty
  isEmpty() {
    return this.heap.length === 0;
  }

  // Restore the heap property by moving the element up the tree
  bubbleUp() {
    let index = this.heap.length - 1;
    const element = this.heap[index];

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];

      if (element >= parent) {
        break;
      }

      this.heap[index] = parent;
      this.heap[parentIndex] = element;
      index = parentIndex;
    }
  }

  // Restore the heap property by moving the element down the tree
  heapify(index) {
    const leftIndex = 2 * index + 1;
    const rightIndex = 2 * index + 2;
    let smallest = index;

    if (leftIndex < this.heap.length && this.heap[leftIndex] < this.heap[smallest]) {
      smallest = leftIndex;
    }

    if (rightIndex < this.heap.length && this.heap[rightIndex] < this.heap[smallest]) {
      smallest = rightIndex;
    }

    if (smallest !== index) {
      const temp = this.heap[index];
      this.heap[index] = this.heap[smallest];
      this.heap[smallest] = temp;
      this.heapify(smallest);
    }
  }
}