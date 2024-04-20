/**
 * HEAP SOLUTION
 * @param {number[]} stones
 * @return {number}
REDO
 Time complexity : O(NlogN). - heap contains all n elements
 Space: O(n) - heap contains all n elements
 */
 var lastStoneWeight = function (stones) {
  const maxHeap = new MaxPriorityQueue();

  stones.forEach(stone => {
      maxHeap.enqueue(stone)
  });

  console.log('size beginning', maxHeap.size())
  while (maxHeap.size() > 1) {
      const first = maxHeap.dequeue().element;
      const second = maxHeap.dequeue().element;

      console.log('first', first, 'second', second, 'size', maxHeap.size())
      if (first != second) {
          const newStone = first - second;
          maxHeap.enqueue(newStone);
      }
  }

  console.log('size at end', maxHeap.size())
  return maxHeap.size() === 1 ? maxHeap.dequeue().element : 0;
};


// On each turn, we choose the heaviest two stones and smash them together.


// [1,1,2,4,7,8]
// 1,1,2,4,1 // skip the 1 bc already processed
// 1,1,2,1

// monotonic stack, 


// 2
// 4
// 1

// [2,7,4,1,8,1]

// pop off 8 7 combine to 1, 
// insert that 1 back into heap





// brute force
// loop from beginning (while stones.length > 1)
  // sort desc every time
  // find two largest, combine




// stones = [2,7,4,1,8,1] // 8 converts to 1, 7 is removed
// [2,4,1,1,1]  // remove 2, convert 4 to 2
// [2,1,1,1]  // remove 1, convert 2 to 1
// [1,1,1] // two ones are removed


// need to know largest
// could sort it
// 