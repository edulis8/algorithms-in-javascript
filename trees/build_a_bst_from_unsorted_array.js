// Given an NON-SORTED array of numbers, build a binary search tree (BST) by inserting the values sequentially inside an initially empty BST.
// NOT SORTED

// ITERATIVE SOLUTION TO THIS
// RECURSION IS NOT THE WAY

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
 * 
 * Yes, the provided function build_a_bst takes a non-sorted array of values and turns it into a Binary Search Tree (BST). The function traverses the array 
 * and builds the tree by following the logic of going left for smaller values and going right for larger values. It initializes a root node and then iterates through 
 * the values to find the appropriate position for each value in the tree. If a value is smaller than the current node, it goes to the left child, and if it's larger, 
 * it goes to the right child. 
 * The new nodes are attached as left or right children based on their relationship with the parent nodes. At the end, the function returns the root of the constructed BST.
 * @param {list_int32} values
 * @return {BinaryTreeNode_int32}
 */
function build_a_bst(values) {
// - traverse tree
// - go left if smaller
// - go right if larger
// - keep track of prev / parent
// - when you get to the end, set the parent to be parent of the new child, either left child (if smaller) or right child (if larger)

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
    // end traversal, we've found the spot for this value
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



console.log('\n******************** OUTPUT ************\n');
let input = {
  "values": [7, 5, 9]
}
let result = build_a_bst(input.values);
console.log('result:', result)
console.log('\n******************** ************\n')



/*
Input :  [8, 3, 4, 1, 2]:

      8
     /
    3
   / \
  1   4
     /
    2


In this textual representation:

The root node is 8.
The left child of 8 is 3.
The left child of 3 is 1, and the right child is 4.
The right child of 4 is 2.
This is a basic visual representation of the BST based on the given input array.

*/
