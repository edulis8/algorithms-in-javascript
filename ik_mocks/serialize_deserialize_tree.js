
// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}


// OPTIONS
// 1. Two traversals -- PRe/Port-order traversal + Inorder traversal --- No need to remember NULL children
// 2. BFS - remember the null children
// 3. Pre/Post order traversal + with remembering NULL children

function serialize(root) {
  if (!root) {
    return "#";
  }
  const left = serialize(root.left);
  const right = serialize(root.right);
  return `${root.val},${left},${right}`;
}

function deserialize(data) {
  const values = data.split(",");
  let index = 0;

  function buildTree() {
    if (values[index] === "#") {
      index++;
      return null;
    }

    const node = new TreeNode(parseInt(values[index++], 10));
    node.left = buildTree();
    node.right = buildTree();
    return node;
  }

  return buildTree();
}

// COPILOT
// USING PRE AND INORDER arrays

/ Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

// Function to get inorder traversal
function inorderTraversal(root) {
    let res = [];
    function helper(node) {
        if (node !== null) {
            helper(node.left);
            res.push(node.val);
            helper(node.right);
        }
    }
    helper(root);
    return res;
}

// Function to get preorder traversal
function preorderTraversal(root) {
    let res = [];
    function helper(node) {
        if (node !== null) {
            res.push(node.val);
            helper(node.left);
            helper(node.right);
        }
    }
    helper(root);
    return res;
}

// Function to build tree from inorder and preorder traversals
function buildTree(preorder, inorder) {
    return build(0, 0, inorder.length - 1);

    function build(preStart, inStart, inEnd) {
        if (preStart > preorder.length - 1 || inStart > inEnd) {
            return null;
        }
        let root = new TreeNode(preorder[preStart]);
        let inIndex = inorder.indexOf(root.val);
        root.left = build(preStart + 1, inStart, inIndex - 1);
        root.right = build(preStart + inIndex - inStart + 1, inIndex + 1, inEnd);
        return root;
    }
}

// Function to serialize a BST
function serialize(root) {
    let preorder = preorderTraversal(root);
    let inorder = inorderTraversal(root);
    return {preorder, inorder};
}

// Function to deserialize a BST
function deserialize(data) {
    return buildTree(data.preorder, data.inorder);
}

// EXAMPLE INPUTS AND OUTPUTS
// Create the tree
let root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(5);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);

// Serialize the tree
let serialized = serialize(root);
console.log(serialized);
// Output: { preorder: [ 4, 2, 1, 3, 5 ], inorder: [ 1, 2, 3, 4, 5 ] }

// Deserialize the tree
let deserialized = deserialize(serialized);

// Verify that the deserialized tree is the same as the original
console.log(preorderTraversal(deserialized)); // Output: [ 4, 2, 1, 3, 5 ]
console.log(inorderTraversal(deserialized)); // Output: [ 1, 2, 3, 4, 5 ]