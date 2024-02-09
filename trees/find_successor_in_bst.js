function findInOrderSuccessor(inputNode) {
  if (inputNode.right !== null) {
      // return the node with the minimum key in the right subtree
      return findMinKeyWithinTree(inputNode.right);
  }

  let ancestor = inputNode.parent;
  let child = inputNode;

  // travel up using the parent pointer until you see
  // a node which is the left child of its parent. The parent
  // of such a node is the successorNode.
  while (ancestor !== null && child === ancestor.right) {
      child = ancestor;
      ancestor = child.parent;
  }

  return ancestor;
}

function findMinKeyWithinTree(inputNode) {
  while (inputNode.left !== null) {
      inputNode = inputNode.left;
  }

  return inputNode;
}

// Example usage:
// Assuming you have a binary search tree with appropriate connections
// For demonstration purposes, let's create a sample tree
let root = new TreeNode(20);
root.left = new TreeNode(10);
root.right = new TreeNode(30);
root.left.parent = root;
root.right.parent = root;

root.left.left = new TreeNode(5);
root.left.right = new TreeNode(15);
root.left.left.parent = root.left;
root.left.right.parent = root.left;

let successor = findInOrderSuccessor(root.left);
console.log(successor.key);  // Output: 15





// notes on pramp partners approach 
// in order traversal