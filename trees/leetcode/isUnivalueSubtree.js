/**
 * 
 * 
 * 
 * 
 * 
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var _countUnivalSubtrees = function (root) {
  if (!root) return 0;
  let count = 0;
  // dfs
  // top down and bottom up elements
  // each node figures out if its left and right subtree is unival

  dfs(root);
  return count;

  function dfs(node) {
      // leaf node, is always unival
      if (!node.left && !node.right) {
          count++;
          return true;
      }

      // compute if I AM unival and return it up the chain
      let leftBool = false;
      if (node.left) {
          leftBool = dfs(node.left);
      }
      let rightBool = false;
      if (node.right) {
          rightBool = dfs(node.right);
      }

      // if both subtrees are unival, and this node's value is the same as its left and right values
      if (leftBool && rightBool && node.val === node.left.val && node.val === node.right.val) {
          count++;
          return true;
      }

      // Check if both left and right child nodes exist and compare their values with the current node's value
      if (leftBool && rightBool && (node.left === null || node.val === node.left.val) && (node.right === null || node.val === node.right.val)) {
          count++;
          return true;
      }
      return false;
  }
};

function countUnivalSubtrees(root) {
  // Initialize the count of univalue subtrees
  let count = 0;

  // Call the helper function on the root of the tree
  dfs(root);

  // Return the count of univalue subtrees
  return count;

  // Helper function to check if a subtree is a univalue subtree
  function dfs(node) {
      // If the node is null, it's a univalue subtree
      if (node === null) return true;

      // Check if the left and right subtrees are univalue subtrees
      let left = dfs(node.left);
      let right = dfs(node.right);

      // If both the left and right subtrees are univalue subtrees
      if (left && right) {
          // If the left child exists and its value is not the same as the node's value, it's not a univalue subtree
          if (node.left && node.val !== node.left.val) return false;

          // If the right child exists and its value is not the same as the node's value, it's not a univalue subtree
          if (node.right && node.val !== node.right.val) return false;

          // If the node's value is the same as its children's values, increment the count and return true
          count++;
          return true;
      }

      // If either the left or right subtree is not a univalue subtree, return false
      return false;
  }
}