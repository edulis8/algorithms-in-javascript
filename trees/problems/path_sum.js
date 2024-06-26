// Root To Leaf Path Sum Equal To K
// Given a binary tree and an integer k, check whether the tree has a root to leaf path with a sum of values equal to k.

// DECISION PROBLEM. DOES ONE PATH EXIST. HAND TARGET - NODE VALUE DOWN UNTIL A LEAF NODE EQUALS TARGET...(ie if we subtracted them we'd hit 0)

// TIME: O(n) - all nodes may need to be hit to get the final answer
// SPACE O(n) <- max call stack size... all nodes could be in call stack for certain kinds of trees

/**
 * @param {BinaryTreeNode_int32} root
 * @param {int32} k
 * @return {bool}
 */
function path_sum(root, k) {
  if (!root) return false;

  let result = false;

  dfs(root, k);
  return result;


  function dfs(node, target) {
    if ((!node.left && !node.right) || result) { // short circuiting!
      // leaf level processing. Base case
      // If the remaining target value equals this leaf node's value, then the sum of the path from the root to this node equals the original target sum k.
      // IF TARGET === this leaf nodes value, then target - node.value == 0.
      if (target - node.value === 0) {
        result = true;
      }
      return;
    }
    if (node.left) {
      dfs(node.left, target - node.value);
    }
    if (node.right) {
      dfs(node.right, target - node.value);
    }
  }
}




// function templateDFS(node) {
//   if (!node.left && !node.right) {
//     // leaf level processing
//     return;
//   }
//   if (node.left) {
//     templateDFS(node.left);
//   }
//   if (node.right) {
//     templateDFS(node.right);
//   }
// }