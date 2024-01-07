// A DEPTH FIRST SEARCH, DFS
// THIS PUTS NODES IN SORTED ORDER IF IT IS A BINARY SEARCH TREE (smaller values to left, larger to the right)

// Inorder Traversal Of A Binary Tree
// Given a binary tree, return the inorder traversal of its node values.
// The inorder traversal of a binary tree first visits the left subtree, then the root and finally the right subtree.

// Constraints:

// 1 <= number of nodes in the given tree <= 20000
// 0 <= node value < number of nodes
// Node values are unique

 /*
 
// Time Complexity
// O(node_count).

// All of the nodes in the binary tree are visited exactly once.

// Auxiliary Space Used
// O(node_count).

// There will be O(node_count) number of recursive calls on the call stack in the worst case.



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
function inorder(root) {
  const result = []; // global result storage
  helper(root);
  return result;

  function helper(node) {
    if (!node) return; // base case
    helper(node.left);
    result.push(node.value);
    helper(node.right);
  }
}

function inorder(root) {
  return !root ? [] : inorder(root.left).concat([root.value]).concat(inorder(root.right))
}

