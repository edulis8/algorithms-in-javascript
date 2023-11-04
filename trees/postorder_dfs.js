// A DEPTH FIRST SEARCH, DFS


// Postorder Traversal Of A Binary Tree
// Given a binary tree, find its postorder traversal.


/*
For your reference:
const BinaryTreeNode = class {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};
*/
/**
 * @param {BinaryTreeNode_int32} root
 * @return {list_int32}
 */
function postorder(root) {
  const result = [];
  helper(root);
  return result;

  function helper(node) {
    if(!node) return;
    // process left child
    helper(node.left);
    // process right child
    helper(node.right);
    // process node
    result.push(node.value)
  }
}

function postorder(root) {
  return !root ? [] : postorder(root.left).concat(postorder(root.right)).concat([root.value]);
}


// Time Complexity
// O(n).

// All nodes in the tree are visited once.

// Auxiliary Space Used
// O(n).

// There will be O(n) number of recursive calls on the call stack in the worst case.

// Space Complexity
// O(n).

// Space used for input: O(n).
// Auxiliary space used: O(n).
// Space used for output: O(n).
// So, total space complexity: O(n).