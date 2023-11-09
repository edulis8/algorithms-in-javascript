
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