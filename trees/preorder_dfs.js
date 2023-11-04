
// A DEPTH FIRST SEARCH, DFS


// Preorder Traversal Of A Binary Tree
// Given a binary tree, return node values in the preorder traversal order.

// Notes
// The preorder traversal processes all the nodes of a binary tree by first visiting the root, then recursively visiting its left and right subtrees respectively.

// Constraints:

// 1 <= number of nodes in the given tree <= 20000
// 0 <= node value < number of nodes
// Node values are unique



// TIME: 0(n)
// SPACE: 0(n) recursive calls in call stack in worst case


function preorder(root) {
  // base case
  const result = [];
  helper(root);
  return result;

  function helper(node) {
    if (node === null) return;
    result.push(node.value);
    helper(node.left)
    helper(node.right)
  }
}

// function preorder_functional(root) {
//   return !root ? [] : [root.value].concat(preorder(root.left)).concat(preorder(root.right))
// }
