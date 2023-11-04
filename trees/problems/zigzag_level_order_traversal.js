// Zigzag Level Order Traversal Of A Binary Tree
// Given a binary tree, return the zigzag level order traversal of the node values listing the odd levels from left to right and the even levels from right to left.

// LINEAR TIME, all nodes touched
// CALL STACK HEIGHT O(logn) or O(n) worst case (unbalanced)


/**
 * @param {BinaryTreeNode_int32} root
 * @return {list_list_int32}
 */
function zigzag_level_order_traversal(root) {
  // use a queue
  // use a global result array

  // while q not empty
  // pop all nodes off from q
  // put their children in the q
  // put the popped nodes into a temp result array
  // push that array to the glob result array
  // use a flag to reverse every other temp result array

  if (!root) return null;

  const result = [];
  const q = [];
  q.push(root); // REMEMBER to push the root into the queue first!
  let rightToLeft = false;
  while(q.length) {
    let length = q.length
    let temp = [];
    while(length--) {
      let node = q.shift() // pull from front
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
      temp.push(node.value); // REMEMBER TO USE .value!
    }

    if (rightToLeft) {
      temp.reverse();
    }
    result.push(temp);
    rightToLeft = !rightToLeft; // toggle this flag
  }
  return result
}
