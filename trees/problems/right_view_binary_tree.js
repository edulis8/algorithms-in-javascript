

// Right Side View Of A Binary Tree
// Given a binary tree, imagine yourself standing on the right side of it and return a list of the node values that you can see from the top to the bottom.


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
 * @return {list_int32}
 */
function right_view(root) {
  if (!root) return [];
  const result = [];
  const q = [root];

  while (q.length) {
    // snapshot of q
    // pop off nodes
    // put their children in the q
    // 
    let length = q.length;

    let rightMost;
    // this is a layer
    while (length--) {
      let node = q.shift()
      if (node.left) {
        q.push(node.left)
      }
      if (node.right) {
        q.push(node.right)
      }
      // so let's day these nodes just got processed
      //[node1,node2] layer one - last processed is rightmost
      // [node2,node3,node4,node5] layer two - last processed is rightmost
      rightMost = node.value
    }
    result.push(rightMost)
  }
  return result;
}
