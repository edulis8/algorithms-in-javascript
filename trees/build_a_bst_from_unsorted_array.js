// IK "INSERT IN BST" 
// Given an NON-SORTED array of numbers, build a binary search tree (BST) by inserting the values sequentially inside an initially empty BST.
// NOT SORTED







// RECURSIVE SOLUTION

// class BinaryTreeNode {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// Time Complexity
// O(n * n).

// Each insertion in a BST takes O(number of nodes) amount of time in the worst-case. 
// This worst-case occurs when every node in the tree has one child. Since we are given to insert n number of values, the worst-case runtime will be: O(1 + 2 + ... + n) = O(n * n).

// Auxiliary Space Used
// O(n).

// The maximum number of recursive calls in the call stack during any insertion will be O(number of nodes) = O(n).

// Space Complexity
// O(n).

// Space used for input: O(n).
// Auxiliary space used: O(n).
// Space used for output: O(n).
// So, total space complexity: O(n).

function buildBST(values) {
  let root = null;
  // loop over values array, call helper on each value. We'll be calling helper values.length times! This is why it is QUADRATIC. Iterative solution uses TWO LOOPS
  for (let i = 0; i < values.length; i++) {
    root = helper(root, values[i]);
  }

  return root;

  function helper(currentNode, newValue) {
    // If current_node is NULL, it means that we have found an appropriate position to insert the new node. 
    // First node will be root, which is null, so first we'll create the root and return it.
    if (currentNode === null) {
      return new BinaryTreeNode(newValue);
    }

    if (newValue > currentNode.value) {
      currentNode.right = helper(currentNode.right, newValue);
    } else {
      currentNode.left = helper(currentNode.left, newValue);
    }

    return currentNode;
  }
}

/*

recursive_solution.cpp
In this solution, we will be inserting the values one-by-one. While making any new insertion, we are not allowed to change the 
relative structure and the position of any other node. Therefore we will be inserting any new node as a leaf in the BST.
 Initially, the BST will be considered empty and we will traverse values from left to right and insert all of the given values one-by-one using the following approach:

We will initiate a recursive process that takes the current root node of the BST and a value to be inserted as inputs and returns the root of the BST after 
inserting the given value. We will be denoting the current node as current_node and the value to be inserted as new_value. The approach is described in the next points.

If current_node is NULL, it means that we have found an appropriate position to insert the new node. 

Therefore, we will create a node with a value equal to new_value and return it. This will also be our base condition.

If the above condition fails, we will check for the following two possibilities:

If new_value is greater than the value of current_node: the new node has to be inserted in the right subtree of current_node. 
Therefore, we will call a child process with current_node = the right child of current_node. This child process will return the updated root of the right subtree 
after inserting a node with value new_value. Therefore, we will replace the right child of current_node with this returned node.

Otherwise, if new_value is less than the value of current_node: the new node has to be inserted in the left subtree of current_node. 
Therefore, we will call a child process with current_node = the left child of current_node. This child process will return the updated root of the left subtree after 
inserting a node with value new_value. Therefore, we will update the left child of current_node with this returned node.
Finally, we will return current_node.
Time Complexity
O(n * n).

Each insertion in a BST takes O(number of nodes) amount of time in the worst-case. This worst-case occurs when every node in the tree has one child. Since we are given to insert n number of values, the worst-case runtime will be: O(1 + 2 + ... + n) = O(n * n).

Auxiliary Space Used
O(n).

The maximum number of recursive calls in the call stack during any insertion will be O(number of nodes) = O(n).




// ==== ITERATIVE SOLUTION TO THIS ====== 
// Doesn't use call stack space, but I like recursive pattern better becase easier to to code up

// Example
// {
// "values": [7, 5, 9]
// }


/*
For your reference:
const BinaryTreeNode = class {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};

============================
Time Complexity
O(n * n).

Each insertion in a BST takes O(number of nodes) amount of time in the worst-case. This worst-case occurs when every node in the tree has one child. Since we are given to insert n number of values, the worst-case runtime will be: O(1 + 2 + ... + n) = O(n * n).

Auxiliary Space Used
O(1).

We used only a constant amount of extra space.

Space Complexity
O(n).

Space used for input: O(n).
Auxiliary space used: O(1).
Space used for output: O(n).
So, total space complexity: O(n).
===============
*/
/**
 * CHAT GPT:
 * Yes, the provided function build_a_bst takes a non-sorted array of values and turns it into a Binary Search Tree (BST). The function traverses the array 
 * and builds the tree by following the logic of going left for smaller values and going right for larger values. It initializes a root node and then iterates through 
 * the values to find the appropriate position for each value in the tree. If a value is smaller than the current node, it goes to the left child, and if it's larger, 
 * it goes to the right child. 
 * The new nodes are attached as left or right children based on their relationship with the parent nodes. At the end, the function returns the root of the constructed BST.
 * @param {list_int32} values
 * @return {BinaryTreeNode_int32}
 * 
 * RECURSION IS NOT THE WAY
 */
function build_a_bst(values) {
  // - traverse tree
  // - go left if smaller
  // - go right if larger
  // - keep track of prev / parent
  // - when you get to the end, set the parent to be parent of the new child, either left child (if smaller) or right child (if larger)

  // first handle a null root
  const root = new BinaryTreeNode(values[0]);
  let prev = null;

  for (let i = 1; i < values.length; i++) {
    // traverse with while loop
    let curr = root;
    while (curr !== null) {
      // go left
      if (values[i] < curr.value) {
        prev = curr;
        curr = curr.left;
      } else {
        // go right
        prev = curr;
        curr = curr.right;
      }
    }
    // end traversal, we've found the spot for this value
    // set parent on new child
    if (values[i] < prev.value) {
      // it is a left child. (smaller than parent)
      prev.left = new BinaryTreeNode(values[i]);
    } else {
      // it is a right child (larger)
      prev.right = new BinaryTreeNode(values[i]);
    }
  }
  return root;
}



console.log('\n******************** OUTPUT ************\n');
let input = {
  "values": [7, 5, 9]
}
let result = build_a_bst(input.values);
console.log('result:', result)
console.log('\n******************** ************\n')



Input :  [8, 3, 4, 1, 2]:

      8
     /
    3
   / \
  1   4
     /
    2


In this textual representation:

The root node is 8.
The left child of 8 is 3.
The left child of 3 is 1, and the right child is 4.
The right child of 4 is 2.
This is a basic visual representation of the BST based on the given input array.

*/
