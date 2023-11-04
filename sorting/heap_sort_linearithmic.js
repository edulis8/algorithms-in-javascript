




function implementation(arr) {
  const heap = new Heap(arr);
  heap.buildHeap()

  // console.log('after buildheap: [', heap.heap.toString(), ']');

  for (let i = 1; i < heap.heap.length; i++) {
    // console.log('iteration', i)
    heap.removeMax();
    // console.log('wallIndex', heap.wallIndex);
  }

  heap.cleanUp()

  return heap.heap;
}

class Heap {
  constructor(inputArray) {
    this.heap = inputArray
    inputArray.unshift(null);
    this.wallIndex = this.heap.length - 1;
  }

  cleanUp() {
    this.heap.shift()
    if (this.heap[0] > this.heap[1]) {
      this._swap(0, 1)
    }
  }

  removeMax() {
    // swap max with bottom/last element
    let max = this.heap[1];
    this._swap(1, this.wallIndex)
    // pretend it is no longer in the tree/array
    this.wallIndex--;

    this._heapifyDown(1);

    // console.log('max', max);
    // console.log('after removeMax: [', this.heap.toString(), ']');
    return max;
  }

  buildHeap() {
    let firstParentIndex = Math.floor((this.heap.length - 1) / 2)
    for (let i = firstParentIndex; i > 0; i--) {
      // fix the heap triangle at node i
      this._heapifyDown(i);
    }
    return this.heap;
  }

  _heapifyDown(i) {
    // console.log('index:', i, ' node: ', this.heap[i]);
    let child1Index = i * 2;
    let child2Index = (i * 2) + 1;
    let validChild2 = true;
    // if no children. that is, if no first child. Break the recursion, end the bubbling down.
    // also if child2Index is greater than the wall, we don't want to swap it.
    if (child1Index > this.wallIndex) {
      return;
    }
    if (child2Index > this.wallIndex) {
      validChild2 = false;
    }

    // if both children are greater than parent
    if (this.heap[child1Index] > this.heap[i] && this.heap[child2Index] > this.heap[i]) {
      // swap larger child with parent
      if (this.heap[child1Index] > this.heap[child2Index]) {
        this._swap(i, child1Index)
        this._heapifyDown(child1Index);
      } else if (validChild2) {
        this._swap(i, child2Index)
        this._heapifyDown(child2Index);
      }
    } else if (this.heap[child1Index] > this.heap[i]) {
      // if child1 is greater than parent...swap parent and child1
      this._swap(i, child1Index);
      this._heapifyDown(child1Index);
    } else if (this.heap[child2Index] > this.heap[i] && validChild2) {
      // if child2 is greater than parent...swap parent and child2
      this._swap(i, child2Index);
      this._heapifyDown(child2Index);
    }
  }

  _swap(parentIndex, childIndex) {
    let tempParent = this.heap[parentIndex];
    this.heap[parentIndex] = this.heap[childIndex];
    this.heap[childIndex] = tempParent;
  }

  insert(el) {
    console.log('inserting: ', el)
  }
}


// console.log('\n******************** OUTPUT ************\n');

// MAKE SURE TO UPDATE THIS:
const input = [5, 8, 3, 9, 4, 1, 7, 0, 1028]     // <--- UPDATE 5, 8, 3, 9, 4, 1, 7
// let result = implementation(input);
let result = sort(input)
console.log('result:', result);


// JavaScript program for implementation
// of Heap Sort

function sort(arr) {
  var arrayLength = arr.length;

  // Build heap (rearrange array)
  for (var i = Math.floor(arrayLength / 2) - 1; i >= 0; i--)
    heapify(arr, arrayLength, i);

  // One by one extract an element from heap
  for (var i = arrayLength - 1; i > 0; i--) {
    // Move current root to end
    var temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;

    // call max heapify on the reduced heap
    heapify(arr, i, 0);
  }
  return arr;
}

// To heapify a subtree rooted with node i which is
// an index in arr[]. n is size of heap
function heapify(arr, arrayLength, i) {
  var largest = i; // Initialize largest as root
  var l = 2 * i + 1; // left = 2*i + 1
  var r = 2 * i + 2; // right = 2*i + 2

  // If left child is larger than root
  if (l < arrayLength && arr[l] > arr[largest])
    largest = l;

  // If right child is larger than largest so far
  if (r < arrayLength && arr[r] > arr[largest])
    largest = r;

  // If largest is not root
  if (largest != i) {
    var swap = arr[i];
    arr[i] = arr[largest];
    arr[largest] = swap;

    // Recursively heapify the affected sub-tree
    heapify(arr, arrayLength, largest);
  }
}



// This code is contributed by SoumikMondal