// Given a binary tree, determine if it is height-balanced
.

// Approach 1: Top-down recursion
// Algorithm

// First we define a function height\texttt{height}height such that for any node p∈Tp\in Tp∈T

// height(p)={−1p is an empty subtree i.e. null1+max⁡(height(p.left),height(p.right)) otherwise\texttt{height}(p) = \begin{cases} -1 & p \text{ is an empty subtree i.e. } \texttt{null}\\ 1 + \max(\texttt{height}(p.left), \texttt{height}(p.right)) & \text{ otherwise} \end{cases}height(p)={ 
// −1
// 1+max(height(p.left),height(p.right))
// ​
  
// p is an empty subtree i.e. null
//  otherwise
// ​
 

// Now that we have a method for determining the height of a tree,
// all that remains is to compare the height of every node's children. A tree TTT
// rooted at rrr is balanced if and only if the height of its two children are within
// 1 of each other and the subtrees at each child are also balanced. Therefore, we can
// compare the two child subtrees' heights then recurse on each one.



// Time complexity : O(nlog⁡n)
// Space complexity : O(n). The recursion stack may contain all nodes if the
// tree is skewed.

// Recursively obtain the height of a tree. An empty tree has -1 height
function height(root) {
  // An empty tree has height -1
  if (root === null) {
    return -1;
  }
  return 1 + Math.max(height(root.left), height(root.right));
}

function isBalanced(root) {
  // An empty tree satisfies the definition of a balanced tree
  if (root === null) {
    return true;
  }

  // Check if subtrees have height within 1. If they do, check if the
  // subtrees are balanced
  return (
    Math.abs(height(root.left) - height(root.right)) < 2 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  );
}