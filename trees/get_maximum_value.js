// Maximum Valued Node In Binary Search Tree
// Find the node with maximum value in a given binary search tree and return its value.
/*
For your reference:
const BinaryTreeNode = class {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};



TIME COMPLEXITY: O(logn) --- if balanced

IF NOT BALANCED THEN WORST CASE IS O(n), linear, have to traverse down long one-sided tree branch.



NOTES:

FOR MAX, go right until you hit null. MAX is the end value if you make a right choice along each node.
FOR MIN, go left until you hit null
*/

/**
 * @param {BinaryTreeNode_int32} root
 * @return {int32}
 */
function get_maximum_value(root) {
  // handle edge case, this may not be necessary ask interviewer about EDGE CASES and constraints.
  // in this questions, number of nodes >= 1
  if (root === null) {
    return null;
  }

  let curr = root;

  while (curr.right !== null) {
    // go right until we hit null
    curr = curr.right
  }

  return curr.value;
}

// const BinaryTreeNode = class {
//   constructor(value) {
//       this.value = value;
//       this.left = null;
//       this.right = null;
//   }
// };

console.log(get_maximum_value(null))