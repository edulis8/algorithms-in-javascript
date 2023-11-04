// TIME: O(n) - all nodes need to be hit to get the final answer
// SPACE O(n) <- max call stack size... all nodes could be in call stack for certain kinds of trees


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

// there's one more node than there are edges
/**
 * @param {BinaryTreeNode_int32} root
 * @return {int32}
 */
function binary_tree_diameter(root) {
  // largest inverted v
  // bottom up dfs, info MUST be passed up


  // 1) As a manager, need to compute the longest branch in my subtree
  // need to pass that up so that:
  // 2) need to keep a record of the combined longest two left and right branches. A global max. 

  if (!root) return 0;

  let globalDiameter = 0;
  dfs(root);
  return globalDiameter;

  function dfs(node) {
    // base case
    // IF NO CHILDREN RETURN 0
    // BE CAREFUL to make sure that this evaluates to IF CHILDREN === NULL return ! 
    // I was missing the bang !
    if (!node.left && !node.right) {
      return 0; // no more edges below
    }

    let leftHeight = 0;
    let rightHeight = 0;
    let localDiameter = 0;
    if (node.left) {
      leftHeight = dfs(node.left) 
      localDiameter = leftHeight + 1; // one edge added on when you're building from bottom up
    }
    if (node.right) {
      rightHeight = dfs(node.right);
      console.log('rightHeight', rightHeight)
      localDiameter = localDiameter + rightHeight + 1; // one edge added on when you're building from bottom up
    }

    globalDiameter = Math.max(globalDiameter, localDiameter);

    // As a manager, need to compute the longest branch in my subtree, 
    // not the localDiameter, but the deepest branch which could be either left or right. My parent will compute the inverted V, the diameter
    return Math.max(rightHeight, leftHeight) + 1;
  }
}