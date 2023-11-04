// Given an array of numbers, build a binary search tree(BST) by inserting the values sequentially inside an initially empty BST.
// NOT SORTED

// Example
// {
// "values": [7, 5, 9]
// }


/*
For your reference:
const BinaryTreeNode = class {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};


 TIME COMPLEXITY FOR EACH INSERT: O(logn) -- if balanced
 FOR N inserts: O(nlogn) -- if balanced

 IF NOT BALANCED THEN WORST CASTE TIME IS 0(N)
*/
/**
 * @param {list_int32} values
 * @return {BinaryTreeNode_int32}
 */
function build_a_bst(values) {
  // traverse tree
  // go left if smaller
  // go right if larger
  // keep track of prev / parent
  // when you get to the end, set the parent to be parent of the new child, either left child (if smaller) or right child (if larger)

  // first handle a null root
  const root = new BinaryTreeNode(values[0]);
  let prev = null;

  for (let i = 1; i < values.length; i++) {
    // traverse with while loop
    let curr = root;
    while (curr !== null) {
      // go left
      if (values[i] < curr.value) {
        prev = curr;
        curr = curr.left;
      } else {
        // go right
        prev = curr;
        curr = curr.right;
      }
    }
    // end traversal, we've found the spot
    // set parent on new child
    if (values[i] < prev.value) {
      // it is a left child. (smaller than parent)
      prev.left = new BinaryTreeNode(values[i]);
    } else {
      // it is a right child (larger)
      prev.right = new BinaryTreeNode(values[i]);
    }
  }
  return root;
}

// const BinaryTreeNode = class {
//   constructor(value) {
//       this.value = value;
//       this.left = null;
//       this.right = null;
//   }
// };

console.log('\n******************** OUTPUT ************\n');
let input = {
"values": [7, 5, 9]
}
let result = build_a_bst(input.values);
console.log('result:', result)
console.log('\n******************** ************\n')



// FROM TIMED TEST
// Balanced BST From A Sorted Array
// USED recursion / divide and conquer
// Given a sorted list of distinct integers, build a balanced binary search tree (BST).

// A BST is called balanced if the number of nodes in the left and right subtrees of every node differs by at most one.
function build_balanced_bst(a) {
  // find middle
  // create a node out of the value at the middle
  // divide array to create the subproblem for the subordinate
  // hand left side to a subordinate
  // hand right side to sub
  
  return helper(a, 0, a.length - 1);
  
  function helper(arr, start, end) {
      // base cases
      if (start > end) { // done
          return null;
      }
      if (start === end) {
          return new BinaryTreeNode(arr[start])
      }
      
      // recursive, node workers
      let mid = Math.floor((start + end) / 2);
      const root = new BinaryTreeNode(arr[mid]);
      
      root.left = helper(arr, start, mid - 1)
      root.right =  helper(arr, mid + 1, end)
      
      return root;
  }
}
