// Print All Paths That Sum To K
// Given a binary tree and an integer k, find all the root to leaf paths that sum to k.

/**
 * 
======Time Complexity=========
O(n * log(n)).

The time complexity will be equal to O(height of the binary tree * number of leaf nodes in the binary tree). 
It can be proved that this product comes out to be the maximum for a full binary tree where the number of leaf nodes is O(n) and the height of the binary tree is O(log(n)). Therefore, the overall time complexity of this solution is O(n * log(n)).

=======Auxiliary Space Used====
O(n).

While traversing the tree, the number of recursive stacks can be equal to the number of nodes in the case of a completely skewed binary tree.

Also, for maintaining the current path with each of the recursive calls, we will require O(n) amount of space.

=========Space Complexity==========
O(n * log(n)).

Space used for input: O(n).
Auxiliary space used: O(n).
Space used for output: O(n * log(n)).
So, total space complexity is: O(n * log(n)).
 * 
 * 
 * /*
* Asymptotic complexity in terms of total number of nodes in the given tree `n`:
* Time: O(n * log(n)).
* Auxiliary space: O(n).
* Total space: O(n * log(n)).
*/
/*
 * 
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

    function dfs(node, target, slate) {
      // base case
      if (!node.left && !node.right) {
        // process
        // keep a slate of the trail that got us here.
        if (node.value - target === 0) {
          result.push([...slate, node.value]) // push a copy of the slate to global result, including this leaf node
        }
        return;
      }

      // recursive case
      slate.push(node.value); // add it for a subtree to process
      if (node.left) {
        dfs(node.left, target - node.value, slate)
      }
      if (node.right) {
        dfs(node.right, target - node.value, slate)
      }
      slate.pop() // after subtree has processed this value, remove it so other subtrees can process without it
    }
}
