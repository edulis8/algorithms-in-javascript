// SORTING, USING HEAP AS WINDOW TO OPTIMIZE

// TIME: nlogk
// space O(k) for heap, and for result



// NOTE - WHEN YOU WANT K SMALLEST
// USE A MAX HEAP
// BECAUSE -
// stores values in ascending order
// you're making sure only smaller k values go in

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  let dist = function (x, y) {
    return x * x + y * y;
  }

  let maxHeap = new MaxPriorityQueue();

  for (let [x, y] of points) {
    let distance = dist(x, y);
    maxHeap.enqueue([x, y], distance);
    if (maxHeap.size() > k) {
      console.log(maxHeap.front())
      maxHeap.dequeue()

    }
  }
  let result = [];
  while (maxHeap.size()) {
    result.push(maxHeap.dequeue().element)
  }
  return result
};


/*
sqrt(x^2 + y^2)

// brute force
// do the calcs
// sort on calcs
// somehow attach the calcs to the tuples, like make them objects, or use a hashmap with distances as keys
// bc sorting, this is nlogn

// if we use a heap
// it will be faster, nlog(k)   ... k being size of heap

// init minheap
// iterate, do calcs
// what do you put in the heap?
*/