/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
  let result = 0;

  if (!root) return 0;

  helper(root);

  return result;

  function helper(node) {
      // base
      if (!node) return;

      if (node.val >= low && node.val <= high) {
          result += node.val
          helper(node.left);
          helper(node.right);
      } else if (node.val < low) {
          helper(node.right);
      } else {
          helper(node.left);
      }
  }
};

// BRUTE FORCE - inorder traversal of BST - > sorted array -> sum values within range

// BST
// lower vals to left
// higher vals to the right

// use recursion
// current node's work:
//  am I in range? add my val to global result
//  hand off both children to submanager.

// am I out of range?
// if I'm under range, only eval right (larger) child
// if I'm over range, only eval left (smaller) child