// Single Value Tree
// Given a binary tree, find the number of unival subtrees. An unival (single value) tree is a tree that has the same value in every node.


// GLOBAL PROBLEM: count number of unival subtrees
// LOCAL PROBLEM, PER-NODE: each node figures out if subtree rooted at it is all the same values
// global solution is to count all of the local solutions
// this is a COUNTING problem, there are also max problems and decision/boolean problems

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
 * @return {int32}
 */
function find_single_value_trees(root) {
  // what is the job of a node?
  // check if my children are the same
  // find out if both my children are unival trees
  // they return true if so
  // update global counter if so

  // global solution is tracked by counter
  // local solution is tracked by boolean. 
  if (!root) return 0;

  let globalCounter = 0;
  // call helper
  helper(root);
  return globalCounter;

  function helper(node) {
    // base case
    if (!node.left && !node.right) {
      // no children, automatically +1
      globalCounter++;
      return true;
    }
    // recursive cases
    // if both children or only child are unival and the same as me
    let unival = true;
    if (node.left) {
      let leftBool = helper(node.left);
      if (!leftBool || node.left.value !== node.value) {
        unival = false;
      }
    }
    if (node.right) {
      let rightBool = helper(node.right);
      if (!rightBool || node.right.value !== node.value) {
        unival = false;
      }
    }

    // remember you are building this up from the bottom. if a leaf node has no children it is unival. working upwards, if its parent is the same as those two leaf nodes (or one), it is unival,
    // if not, it's not, and that false will be passed up and trigger falsiness for invalid subtrees up the the tree

    if (unival === true) {
      globalCounter++;
    }
    return unival;
  }
}