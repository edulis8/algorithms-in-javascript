/*

First, clarify the problem statement.
OICE - outputs, inputs, constraints, edge cases

SORTING

- Brute Force

** Selection Sort - O(n2), not stable, too much swapping
** Bubble Sort - O(n2) stable, will not swap, bubbles stop when hit the same key/dup
Bubble sort repeatedly steps through the list to be sorted, compares adjacent elements, and swaps them if they are in the wrong order.

- Decrease and Conquer

** Insertion Sort - O(n2), faster if array is mostly sorted, stable - element is right shifted till it hits a dup/same key.
Insertion sort builds the final sorted array one element at a time. It iterates through the input array, 
removing one element each time and finding the correct position to insert it into the sorted portion of the array.




- Divide and Conquer

** Merge Sort - O(nlogn), Uses Aux Space (not "In-place"), Stable bc when pushing to aux array, first goes first (<=)

** Quick Sort - O(nlogn), In-place (no aux space), pivot must be randomized to get O(nlogn). FASTEST.

MERGE SORT VS QUICKSORT

Quick runs faster. Quick uses less space (in-place). Merge sort is STABLE.

- Transform and Conquer

** Heap Sort - O(nlogn), not table, in place.


SORTING PROBLEM CLUSTERS
1) PRESORTING
2) EXTENSIONS OF MERGE PHASE OF MERGE SORT (BUT IF AUX SPACE IS ALLOWED YOU CAN USE HASH TABLE)
3) EXTENSIONS OF QUICKSORT
4) EXTENSIONS OF HEAPS

- "TWO SUM"
Given an array and a target number, find the indices of the two values from the array that sum up to the given target number.
Decrease and conquer. Take one element. SEARCH the rest of the array for target-element.

SEARCH ALGOs
1) Input re-arrangement - presorting and make into a easily searachable DATA STRUCTURE called a balanced BST - in-place, requires sorting (slow)
2) Representation change - make it a hash table (or a Set) - not in-place, but lookup is O(1) !!

3) Two pointer pass - in-place, presort needed, not need for a BST

Two Pointer Pass part of merge sort:
"Zeroing in on searched element"
*/
// merging two sorted halves
while (i <= mid && j <= end) {
  if (arr[i] <= arr[j]) {
    aux.push(arr[i]);
    i++;
  } else {
    aux.push(arr[j]);
    j++;
  }
}
/*

SORTING PROBLEM CLUSTERS - PRESORTING
5 Types of Probs
a) SEARCHING - presorting and BST or Hash Table
b) CLOSEST PAIR - Presorting and Linear Scan - (keep comparing and saving indices of smallest diff)
c) CHECK FOR DUPS / ELEMENT UNIQUENESS - Hash Table 
d) FREQUENCY DISTRIBUTION - PRESORTING AND LINEAR SCAN, OR HASH TABLE. If you can't use aux space or have to preserve sort order you can do a linear scan like this::
*/
let frequencies = []; // O(n) aux space
let count = 1;
// LINEAR SCAN ON SORTED ARRAY FOR FREQUENCIES
for (let i = 0; i < sorted.length; i++) { //O(n)
  if (sorted[i] === sorted[i + 1]) {
    // if duplicate, increment count
    count++;
  } else {
    frequencies.push([sorted[i], count]); // tuple of value and frequency
    count = 1;
    // if not duplicate, push a tuple to the frequencites aray of [value, count], ['car', 3]
  }
}
/*

e) FIND KTH LARGEST / KTH SMALLEST / MEDIAN - presorting and index lookup. For median, divide length by 2.


PATTERNS OF PRESORTING
- sorting + binary search* (see below for definition of binary search)
- sorting + one pass
- sorting + two pointer pass


"3 SUM" - FIND A TRIPLET THAT ADDS UP TO TARGET  (best solution to this is quadratic though, keep in mind)
PROBLEM REDUCTION - transforming a prob into a prob I know the solution to!
[i0 ---------]
       ^are there two values here that add up to target - num[0]

       
SORTING PROBLEM CLUSTERS - MERGE SORT
"Intersection of Arrays" (duplicates)
- Brute force: two loops, find dups
- Decrease and Conquer: SEARCH for el in first array in second array
1) two pointer pass on the two separate SORTED arrays
2) hash table - pick smaller array to dump into hash table (set). EASY. Takes some space.
*/
// TWO POINTER PASS, GENERAL VERSION... YOU CAN DO 3 POINTER or N-pointer PASSES. You push the value that is smaller than the other values.
i = 0
j = 0
while (arrayA[i] < arrayA.length && arrayB[j] < arrayB.length) {
  if (arrayA[i] === arrayB[j]) {
    // push to result array
    result.push(array[i])
    i++;
    j++;
  } else if (arrayA[i] <= arrayB[j]) {
    i++;
  } else {
    j++;
  }
}
/*
"Union of Two Arrays" (this is a set of non-duplicates)
- use a Set
- use two pointer pass then use a "gather phase"
*/
// GATHER PHASE EXAMPLE
while (i < arrayA[i].length) {
  res.push(arr[i]);
  i++;
}
while (j < arrayB[i].length) {
  rest.push(arr[j]);
  j++
}

/*
SORTING PROBLEM CLUSTERS - EXTENSIONS OF QUICKSORT
"Kth largest"

- Brute Force - sort and find index n - k. This is O(nlogn)

- Quick Select is O(n). It is like quick sort, but you only recurse one side, the side with index n - k. Unfinished sorting, you stop when you find the value at n-k index
Uses LOMUTO's partioning. Linear time.
*/

/*
Any algo that looks at all items (search) is O(n) minimum O(logn) doesnt hit all items.

"Merge One Sorted Array Into Another" - reverse two-pointer pass. Fill from right to left.  Decrease and conquer. First element, how is it involved in the solution?
"Segregate Even and Odd Numbers" - in place, linear. 2-way partitioning. Lomuto's partitioning. See quicksort. But no need to recurse.

- TWO GROUPS. 2-WAY PARTITIONING.

- or 3 GROUPS. 3-way partitioning
- or N GROUPS. n-way partitioning ... all this is O(n) time.

/////////
- Lomuto's partitioning: Lomuto's partitioning uses swapping to compare elements with a pivot, placing elements less than or equal to the pivot on the left and 
elements greater than the pivot on the right, while also efficiently handling duplicate elements by not swapping equal elements, 
allowing them to be grouped together in the partition. 

THE PIVOT CAN BE A GROUP. Element going to the left of it has to be swapped twice.
*/
 // LOMUTO'S PART OF QUICKSORT
 // ## intermediate worker (lomuto's partitioning, used in QuickSelect too)
 let smallerPointer = start; // the Pivot
 for (let biggerPointer = start + 1; biggerPointer <= end; biggerPointer++) {
   // if bigger pointer hits a number that is less than the pivot
   if (arr[biggerPointer] < arr[start]) {
     smallerPointer++; // we move smaller pointer forward
     // swap(arr[biggerPointer], arr[smallerPointer])
     let temp = arr[biggerPointer]; // swap smaller number with bigger number (we're moving the smaller numbers to the left side of the subarray)
     arr[biggerPointer] = arr[smallerPointer];
     arr[smallerPointer] = temp;
   }
 }


/*
RECURSION
- Permutations (repetition not alowed). Factorial time complexity.
- Repetition allowed (super exponential). Math.pow(n, n). "Arrangements"

- Subsets of a set. O(2^n). Every element has two options: exclude or include. Tree shape. Exponential 
*/



/*
GENERAL TEMPLATE
- Series of blanks _ _ _ _ (either a PERMUTATION or a combination aka SET)
- Lazy manager fills in first blank

*/
// general function
function helper(subproblem_definition, i, partial_solution) {
  // base case
  // if using an index to track the subproblem definition
  // if using an actual array use "!subproblem.length"
  if (subproblem_definition.length === i) {
    // treat partial solution (slate) as a complete permutation/set
    // add it to the global result or process it as needed
    return;
  }
  // recursive case / internal node worker
  else {
    // for each choice of filling leftmost blank
    // make the choice, write it tothe blank
    // delegate to the helper recursively
    let slightly_larger_partial_solution = slightly_larger_partial_solution.push(subproblem_definition[i]);
    helper(slight_smaller_subproblem, i + 1, slightly_larger_partial_solution)
    // often pop it off here
  }
}

// SETS
// Time: O(2^n * n). // EXPONENTIAL
//  Auxiliary space: O(2^n * n). // EXPONENTIAL
function generate_all_subsets(s) {
  const result = [];
  subsetHelper(s, 0, '');
  return result;

  // helper will take a slate (partial solution) and the remaining subproblem
  function subsetHelper(problem, i, slate) {
    if (problem.length === i) {
      result.push(slate)
      return;
    }

    // hand slate and subproblem to two subordinates
    // include first element in subproblem
    subsetHelper(problem, i + 1, slate + problem[i]);
    // exclude first element in subproblem
    subsetHelper(problem, i + 1, slate);
  }
}
// N CHOOSE K (EXAMPLE OF BACKTRACKING)
// SETS
// How many subsets of size k can be made from a set of size n?
// Time Complexity
// O(2^n * n).
// Auxiliary Space Used
// O(n).
// It is the worst case recursion depth.
function find_combinations(n, k) { // aka find_sets(n, k)
  const result = [];
  helper(1, [])
  return result;

  function helper(i, slate) {
    // Backtracking case
    if (slate.length === k) {
      result.push([...slate]);
      return;
    }
    // Base Case
    if (i > n) {
      // we've reached the end of processing a branch, we've processed s nodes, doing e/i operations
      // this subset is smaller than k, so ignore it (if it were k it would have been caught in the above case)
      return;
    }
    // Recursive Cases
    // Include
    slate.push(i);
    helper(i + 1, slate)
    slate.pop();
    // Exclude
    helper(i + 1, slate)
  }
}
// GENERATE ALL COMBINATIONS
// PERMUTATIONS
// Time complexity => O(n! * n)
function get_permutations_mutable_with_swapping(arr) {
  const permHelper = (arr, i, slate) => {
    if (i === arr.length) {
      result.push([...slate]);
      return;
    } else {
      // iterate over problem set. For each element, append it to slate, then recurse / hand rest of problem to subordinate
      for (let indexOfNumberToUse = i; indexOfNumberToUse < arr.length; indexOfNumberToUse++) {
        slate.push(arr[indexOfNumberToUse]);
        swap(indexOfNumberToUse, i) // remove number used from problem set passed down. Since i+1 is passed down and indexOfNumber to use is i, it will not be included in numbers operated on by subordinate
        permHelper(arr, i + 1, slate)
        slate.pop(); // everything we do to these mutable arrays, we reverse
        swap(indexOfNumberToUse, i) // everything we do we reverse
      }
    }
  }

  const swap = (i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  const result = [];
  permHelper(arr, 0, []);
  return result
}


// GENERAL 

// BINARY SEARCH
// A binary search is a widely used searching algorithm that efficiently locates a specific value within a sorted collection, typically an array. The algorithm divides the collection into two halves and determines if the value you are searching for lies in the left or right half. If the value is not in the current half, the algorithm further divides that half and repeats the process until the value is found or it's clear that the value is not present in the collection.

// Here's a high-level overview of how a binary search works:

// Start with a sorted collection (e.g., an array).

// Define two pointers, one for the left end (usually called "left") and one for the right end (usually called "right") of the collection.

// Calculate the middle index of the current collection, which is often denoted as "mid."

// Compare the middle element (arr[mid]) with the target value you're searching for.

// If the middle element is equal to the target, you've found the value, and you're done.
// If the middle element is less than the target, it means the target can only be in the right half, so update "left" to mid + 1.
// If the middle element is greater than the target, it means the target can only be in the left half, so update "right" to mid - 1.
// Repeat steps 3 and 4 until the left pointer exceeds the right pointer, which means you've searched the entire collection.

// Binary search has a time complexity of O(log n), making it much more efficient than linear search (O(n)) for large datasets. It is widely used in computer science and programming to quickly find elements in sorted collections.