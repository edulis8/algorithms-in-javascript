
// Is It A BST
// Given a binary tree, check if it is a binary search tree (BST). A valid BST does not have to be complete or balanced.

// Consider this definition of a BST:

// All nodes values of left subtree are less than or equal to parent node value.
// All nodes values of right subtree are greater than or equal to parent node value.
// Both left subtree and right subtree must be BSTs.
// NULL tree is a BST.
// Single node trees (including leaf nodes of any tree) are BSTs.


// Time Complexity
// O(n).

// As we are traversing all the nodes of the tree to check if the current node value is greater or equal to the previous node value,
// hence we have to iterate through all the nodes and edges of the tree. A tree with n nodes have n - 1 edges. 
// So, we have to iterate n + (n - 1) = 2n - 1 times can be represented as O(n) complexity.

// Auxiliary Space
// O(n).

// As we are calling functions in recursion, so in the worst case functional stack can have n number of
// function calls which is equal to the number of nodes of the given tree. Hence auxiliary space for that is O(n).

// Space Complexity
// O(n).

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
 * @return {bool}
 */
function is_bst(root) {
  // be careful, uyou can't just check the direct children of a BST to see if they meet the BST property -- further down children could have a value 
  // greater than the root node, for example

  // an in-order traversal of a BST produces a SORTED ARRAy

  // in-order traversal:

  let prev = Number.NEGATIVE_INFINITY;
  let globalResult = true;
  dfs(root);
  return globalResult;

  
  function dfs(node) {
    if (globalResult === false) return; // short circuit
    if (!node) return; // base case
    dfs(node.left)

    // In-Order processing. Push to array if creating a sorted array here. However for this solution we don't need the whole array. IF any prev is greater than curr, 
    // we have a problem. We do need to keep the prev variable global, however - just like the result array would be

    if (node.value < prev) {
      globalResult = false;
    }
    prev = node.value;

    dfs(node.right)
  }
}

// let prev = Number.MIN_SAFE_INTEGER

// function is_bst(root) {
//     if(root === null) {
//         return true
//     }
//     return dfs(root)
// }

// function dfs(node) {
//     if(node === null) {
//         return true
//     }

//     let leftValid = dfs(node.left)
    
//     if(node.value < prev) {
//         return false
//     }
    
//     prev = node.value
    
//     let rightValid = dfs(node.right)
    
//     return leftValid && rightValid
    
// }