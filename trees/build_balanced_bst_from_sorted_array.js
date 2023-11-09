// FROM TIMED TEST
// Balanced BST From A SORTED Array
// USED recursion / divide and conquer
// Given a sorted list of distinct integers, build a balanced binary search tree (BST).

// A BST is called balanced if the number of nodes in the left and right subtrees of every node differs by at most one.
// The time complexity of this function is O(n), where 'n' is the number of elements in the sorted array 'a'. The function visits each element in the array exactly once to build the tree.
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
    // recursive, node workers
    // find middle
    let mid = Math.floor((start + end) / 2);
    const root = new BinaryTreeNode(arr[mid]);
    // divide array to create the subproblem for the subordinate
    // hand left side to a subordinate
    root.left = helper(arr, start, mid - 1)
    // hand right side to sub
    root.right = helper(arr, mid + 1, end)
    return root;
  }
}



/*
MORE NOTES:
The code build_balanced_bst you provided earlier and the code for build_a_bst serve different purposes and have distinct behaviors:

ABOVE CODE: build_balanced_bst builds a balanced Binary Search Tree (BST) from a sorted array by selecting the middle element as the root node and recursively 
constructing the left and right subtrees. This ensures that the tree is balanced, meaning the height of the left and right subtrees differs by at most one, optimizing search operations.

OTHER CODE: build_a_bst_from_unsorted_array, on the other hand, constructs a Binary Search Tree (BST) from an array without any assumptions about the input order.
 It iteratively inserts elements into the tree, starting from the root and following a simple rule: smaller values go to the left, and larger values go to the right. 
 However, this approach may result in an unbalanced tree depending on the input order, making some search operations less efficient.

In summary, the key difference is that build_balanced_bst builds a balanced BST from a sorted array, 
while build_a_bst_from_unsorted_array constructs a BST from any input array without enforcing balance, potentially leading to an unbalanced tree.
*/