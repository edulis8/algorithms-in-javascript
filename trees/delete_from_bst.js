
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
 * @param {list_int32} values_to_be_deleted
 * @return {BinaryTreeNode_int32}
 */
function delete_from_bst(root, values_to_be_deleted) {
  for (let i = 0; i < values_to_be_deleted.length; i++) {
    root = deleteNode(root, values_to_be_deleted[i]);
  }
  return root;

  function deleteNode(root, nodeToBeDeleted) {
    if (root === null) {
      return null;
    }
    // SEARCH FOR THE KEY FIRST
    let current = root;
    let previous = null;
    let child = null;
    while (current != null) {
      // found the node to be deleted
      if (current.value === nodeToBeDeleted) {
        break;
      }
      else if (nodeToBeDeleted < current.value) {
        previous = current; // KEEP TRACK OF PARENT
        current = current.left; // LEFT IS SMALLER, TRAVERSE LEFT
      } else if (nodeToBeDeleted > current.value) {
        previous = current;
        current = current.right; // RIGHT IS BIGGER, TRAVERSE RIGHT
      }
    }
    // Node to be deleted is present in the tree
    if (current !== null) {
      // Leaf node, node with no children
      if (current.left === null && current.right === null) {
        // single root node
        if (previous === null) {
          return null; // WILL DELETE SINGLE ROOT NODE
        } else if (current.value < previous.value) {
          previous.left = null; // DELETE BY REMOVE POINTER FROM PARENT TO LEFT/SMALLER CHILD
        } else {
          previous.right = null; // DELETE BY REMOVING POINTER FROM PARENT TO RIGHT/LARGER CHILD
        }
      }
      // Node with single child
      if (current.left && !current.right) {
        // single root node
        if (previous === null) {
          return current.left; // SET ROOT TO BE ITS ONLY CHILD
        } else {
          child = current.left;
        }
      } else if (current.right && !current.left) {
        // SINGLE ROOT NODE
        if (previous === null) {
          return current.right; // SET ROOT TO BE ITS ONLY CHILD
        } else {
          child = current.right
        }
      }
      if (child !== null) {
        if (current === previous.left) {
          previous.left = child; // REPLACE CURR WITH CHILD. ATTACH REMAINING SUBTREE TO TREE
        } else {
          previous.right = child; // REPLACE CURR WITH CHILD. ATTACH REMAINING SUBTREE TO TREE
        }
      }
      // Node with two children
      // FIND SUCCESSOR, THE NEXT LARGEST KEY AFTER CURR.
      // REPLACE CURR WITH IT
      // THEN DELETE THE SUCCESSOR, WHICH IS EASY BECAUSE IT ONLY HAS ONE CHILD BY DEFINITION - IT'S THE LEFTMOST/SMALLEST CHILD IN A SUBTREE
      if (current.left && current.right) {
        previous = current;
        let successor = current.right; // FIRST MAKE ONE RIGHT MOVE, BECAUSE SUCCESSOR IS GREATER THAN CURR
        while (successor.left !== null) { // TRAVERSE LEFT ALL THE WAY, TO FIND THE SUCCESSOR, THE SMALLEST VALUE LARGER THAN CURR
          previous = successor; // PREVIOUS IS THE PARENT OF THE SUCCESSOR
          successor = successor.left;
        }
        current.value = successor.value; // REPLACE CURRENT WITH SUCCESSOR
        // NOW REPLACE SUCCESSOR WITH ITS OWN CHILD - IE DELETE THE SUCCESSOR FROM ITS ORIGINAL SPOT
        if (successor === previous.right) { // IF SUCCESSOR WAS THE RIGHT/BIGGER CHILD OF ITS PARENT,
          previous.right = successor.right; // REPLACE SUCCESSOR WITH SUCCESSOR'S CHILD
          // SUCCESSOR CAN'T HAVE A LEFT CHILD, ONLY A RIGHT CHILD (IT'S THE SMALLEST OF A BRANCH)
        } else if (successor === previous.left) { // IF SUCCESSOR WAS THE LEFT/SMALLER CHILD OF ITS PARENT
          previous.left = successor.right; // RPELACE SUCCESSOR WITH SUCCESSOR'S CHILD
        }
      }
    }
    return root;
  }
}
