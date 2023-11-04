// FROM TIMED TEST


// DFS, top down
// linear time, constant oprations per node, might have to hit all nodes
// Explicit space: linear space, a few variables  per node, might have to hit all nodes
// Implicit space -- max call stack size: like any DFS, O(logn) if balanced, but linear in worst case
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
 * @param {int32} k
 * @return {int32}
 */
function kth_smallest_element(root, k) {
  // easy to create sorted array
  // [1,2,3]
  // answer would be arr[k - 1]
  // prob a brute force method, takes n space, linear time to create array
  // maybe we don't need an entire array.
  // if we keep track of a value and where it would be in the array 
  // if we do in-order traversal
  // keep track of the "index" 
  
  let index = 0;
  let globalResult = null;
  dfs(root);
  return globalResult;
  
  function dfs(node) {
      // short circuit
      if (globalResult) return; 
      // base
      if (!node) return;
      // recursive
      dfs(node.left)
      // processing, would push to array here.
      // if "index" + 1 = k
      index = index + 1;
      if (k === index) {
          globalResult = node.value;
          return;
      }
      dfs(node.right)
  }
}