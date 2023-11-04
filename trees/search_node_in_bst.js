
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