/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 
 * TIME: O(n) 
 * SPACE: constant.
 * 
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  // traverse tree, swap left with right

  if (!root) return null;

  helper(root);

  return root;

  function helper(node) {
      // base
      if (!node.right && !node.left) {
          return;
      }

  //     4
  //     /\
  //    7  2
  //   /\
  // 9.  6
      const temp = node.right;
      node.right = node.left;
      node.left = temp;
      if (node.left) helper(node.left)
      if (node.right) helper(node.right)
      // 
  }
};