// Upside Down
// Given a binary tree where every node has either 0 or 2 children and every right node is a leaf node, 
// flip it upside down turning it into a binary tree where all left nodes are leafs.
/*

// Return the root of the output tree.

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
 * @return {BinaryTreeNode_int32}
 */
function flip_upside_down(node) {
  // recurse left, find leftmost leaf node
  // make its left = its neighbor | its parent's right node
  // make its right = its parent

  // *or:
  // as you go down left
  // recurse
  // post-order: make a node's right = its parent, node's right = its parent's right node
  // when you get to the end, return the last node

  if (!node) return null;
  let globalResult = null
  helper(node, null);
  return globalResult;

  function helper(node, prev) {
    if (!node.left) {
      globalResult = node;
      node.right = prev;
      node.left = prev ? prev.right : null;
      return;
    }

    helper(node.left, node);
    // flip
    node.right = prev;
    node.left = prev ? prev.right : null;
  }
}