/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */

// these are not binary search trees
// just binary trees

// TIME: 0(n for smallest tree)
// SPACE: 
  // height of tree can be 2^n
  // max length of call stack is longest tree branch, 0(logn) on a balanced tree, worst case is O(n) on a unbalanced tree.
var mergeTrees = function (root1, root2) { 
  // recursive algo
  // manager
  // check tree2, add its value to itself
  // pass both children down to subordinates
  // tree1 has a value, but tree2 does not
  // if one root is null, return other tree.
  // base cases: 
  if (root1 === null) return root2;
  if (root2 === null) return root1;
  // work of manager
  // easy case, both nodes have values
  return new TreeNode(root1.val + root2.val, mergeTrees(root1.left, root2.left), mergeTrees(root1.right, root2.right))

  // alternative, use root1 to store overlapped tree.
  // root1.val = root1.val + root2.val
  // root1.left = mergeTrees(root1.left, root2.left)
  // root1.right = mergeTrees(root1.right, root2.right)
  // return root1;
};

// Notes
// 

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
