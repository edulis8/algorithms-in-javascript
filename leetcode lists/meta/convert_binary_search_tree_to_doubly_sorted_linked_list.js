/**
 * 426. Convert Binary Search Tree to Sorted Doubly Linked List
Medium
2.5K
191
company
Facebook
company
Microsoft
company
ByteDance

Convert a Binary Search Tree to a sorted Circular Doubly-Linked List in place.

You can think of the left and right pointers as synonymous to the predecessor and successor pointers in a doubly-linked list. For a circular doubly linked list, the predecessor of the first element is the last element, and the successor of the last element is the first element.

We want to do the transformation in place. After the transformation, the left pointer of the tree node should point to its predecessor, and the right pointer should point to its successor. You should return the pointer to the smallest element of the linked list.


 * 
 * 
 * 
 * 
 * // Definition for a Node.
 * function Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
 */

/** LINEAR
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {
  if (!root) return null;
 let head = null;
 let prev = null;
 helper(root)

 // handle first
 // handle last
 head.left = prev; // last value. 5 in example
 prev.right = head;

 return head;

 function helper(node) {
   if (!node) return;

   if (node.left) helper(node.left);
   // in order processing
   head = head || node;
   node.left = prev;
   if (prev) prev.right = node;
   prev = node;
   // ---
   if (node.right) helper(node.right)
 }
};

// inorder traversal => sorted list
// brute force
// push nodes into sorted array
// loop
