// Print All Paths That Sum To K
// Given a binary tree and an integer k, find all the root to leaf paths that sum to k.

// TIME: O(n) - all nodes need to be hit to get the final answer
// SPACE O(n) <- max call stack size... all nodes could be in call stack for certain kinds of trees


/**
 * @param {BinaryTreeNode_int32} root
 * @param {int32} k
 * @return {list_list_int32}
 */
function all_paths_sum_k(root, k) {
    if (!root) return [];
    const result = [];
    // top down Depth First Search
    dfs(root, k, [])
    return result.length ? result : [[-1]];

    function dfs(node, target, record) {
      // base case
      if (!node.left && !node.right) {
        // process
        // keep a record of the trail that got us here.
        
        if (node.value - target === 0) {
          result.push([...record, node.value]) // push a copy of the record to global result
        }
        return;
      }

      // 
      // recursive case
      record.push(node.value); // add it for a subtree to process
      if (node.left) {
        dfs(node.left, target - node.value, record)
      }
      if (node.right) {
        dfs(node.right, target - node.value, record)
      }
      record.pop() // after subtree has processed this value, remove it so other subtrees can process without it
    }
}
