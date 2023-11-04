// Balanced BST From A Sorted Array
// Given a sorted list of distinct integers, build a balanced binary search tree (BST).

// A BST is called balanced if the number of nodes in the left and right subtrees of every node differs by at most one.


// TIME IS LINEAR O(n) - one node for each element in the array
// SPACE - O(n) - we are creating n nodes
// Implicit Call Stack space - space of recursive call, O(logn) - this is balanced
function build_balanced_bst(a) {
  // find middle
  // create a node out of the value at the middle
  // divide array to create the subproblem for the subordinate
  // hand left side to a subordinate
  // hand right side to sub
  
  return helper(a, 0, a.length - 1);
  
  function helper(arr, start, end) {
      // base cases
      if (start > end) { // done
          return null;
      }
      if (start === end) { // not required
          return new BinaryTreeNode(arr[start])
      }
      
      // recursive, node workers
      let mid = Math.floor((start + end) / 2);
      const root = new BinaryTreeNode(arr[mid]);
      
      root.left = helper(arr, start, mid - 1) // build the left subtree
      root.right =  helper(arr, mid + 1, end) // build the right subtree
      
      return root;
  }
}
