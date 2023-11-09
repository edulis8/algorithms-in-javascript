
/*


// RECURSIVE VS ITERATIVE
The time complexities of these two functions are the same. Both the iterative and recursive versions of the binary search in a binary search tree (BST) 
have a time complexity of O(h), where "h" is the height of the tree.

In the worst-case scenario, when the BST is unbalanced and resembles a linked list, the height of the tree is O(n), 
where "n" is the number of nodes in the tree. In such cases, both functions have a worst-case time complexity of O(n). 
However, in a balanced BST, the height is O(log n), and the time complexity becomes O(log n).

So, in terms of time complexity, both functions are equivalent. The difference lies in the implementation style (iterative vs. recursive).



Search A Node In Binary Search Tree
Find whether a node with a given value is present in a given binary search tree or not.

/*
ITERATIVE
Asymptotic complexity in terms of the number of nodes `n`.
* Time: O(n).
* Auxiliary space: O(1).
* Total space: O(n).
*/

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
 * @param {int32} value
 * @return {bool}
 */
function search_node_in_bst(root, value) {
  // left is smaller
  // right is larger
  let curr = root;

  while (curr != null && curr.value != null) {
    if (curr.value == value) {
      return true;
    } else if (value < curr.value) {
      curr = curr.left;
    } else {
      curr = curr.right;
    }
  }
  return false;
}

const BinaryTreeNode = class {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};


// RECURSIVE

function searchNodeInBst(root, value) {
  // Call the helper function with the root node and the target value.
  let result = false;
  helper(root, value);
  return result;

  function helper(node, val) {
    // Base case: if the node is null, return false (not found).
    if (node === null) {
      return;
    }
    
    // Check if the current node's value matches the target value.
    if (node.value === val) {
      result = true;
    }
    
    // Recursively search the left subtree if the target value is smaller.
    if (val < node.value) {
      search(node.left, val);
    }
    // Recursively search the right subtree if the target value is larger.
    if (val > node.value) {
      search(node.right, val);
    }
  }
}