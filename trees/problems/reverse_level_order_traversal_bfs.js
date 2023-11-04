


// BREADTH FIRST SEARCH
// WITH A MODIFICATION


// LINEAR TIME, all nodes touched
// CALL STACK HEIGHT O(logn) or O(n) worst case (unbalanced)


// Reverse Level Order Traversal Of A Binary Tree
// Given a binary tree, return the bottom-up level order traversal of the node values listing each level from left to right.



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
 * @return {list_list_int32}
 */
function reverse_level_order_traversal(root) {
  const result = [];
  const queue = [];
  queue.push(root);
  while(queue.length) {
    // take a snapshot of the queue
    let length = queue.length;
    // pop off all nodes in it
    let temp = [];
    while(length--) {
      let poppedNode = queue.shift();
      // put those nodes' children in the queue
      if (poppedNode.left) queue.push(poppedNode.left);
      if(poppedNode.right) queue.push(poppedNode.right)
      // put the popped nodes in a temp array
      temp.push(poppedNode.value);
    }
    result.push(temp);
    // push the temp array to result
    
  }
  // return reversed result
  return result.reverse();
}
