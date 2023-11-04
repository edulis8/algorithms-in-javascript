
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
 * @return {bool}
 */
function check_if_symmetric(root) {
  // ASK QUESTION - IS IT balanced??
  // if not...it could have long branch in one direction, which would be false

  // First thought:
  // probably a Breadth First Search strategy
  // inside a queue, for a given level, make sure first and last elements are same. 
  // BFS is often not recursive

  // Second thought:
  // dfs along both extremes only

  if (!root) return true;
  let globalBool = true;
  let queue = [root];

  while (queue.length) {
    let l = queue.length; // snapshot of length
    while (l--) {
      let poppedNode = queue.shift();
      if (poppedNode.left) queue.push(poppedNode.left);
      if (poppedNode.right) queue.push(poppedNode.right)
    }
    console.log(queue.map(el => el.value))
    if (queue.length && queue[0].value !== queue[queue.length - 1].value) {
      globalBool = false;
    }
  }

  return globalBool;
}


function check_if_symmetric(root) {
  // can we do a DFS along each edge branch?
  if (!root) return true;


  const leftArray = [];
  const rightArray = []
  helperLeft(root);
  rightHelper(root);

  console.log('leftArray', leftArray)
  console.log('rightArray', rightArray)
  return leftArray.length != rightArray.length || leftArray.join('') != rightArray.join('')

  function helperLeft(node) {
    // base case
    if (!node) { 
      return; 
    }
    // recursive
    leftArray.push(node.value)
    helperLeft(node.left);
  }

  function rightHelper(node) {
    // base case
    if (!node) { 
      return; 
    }
    // recursive
    rightArray.push(node.value)
    rightHelper(node.right);
  }
}

// SOLUTION

/*
Asymptotic complexity in terms of the number of nodes ( = `n`) and the height ( = `h`) of the tree rooted at `root`:
* Time: O(n).
* Auxiliary space: O(h).
* Total space: O(n).
*/

// Helper function which returns true if trees with roots as root1 and root2 are mirror images.
// ALL VALUES HAVE TO MIRROR IF YOU "FOLDED IT"

function helper(node1, node2) {
  if (node1 === null && node2 === null) return true; // if both null, symmetrical
  if (node1 === null || node2 === null) return false; // if one is null, it's not a mirror
  if (node1.value !== node2.value) return false; // these are supposed to mirror eachother.
  // as a manager, my job is to check if two values that 
  // should mirror eachother do, or not. What makes a value mirror another value?
  // look at a tree, just 3 levels deep

  // the left child of node1 should equal the right child of node2 
  // the right child of node one should equal the left childe of node2
  // recursively
  return check_if_mirror(node1.left, node2.right) && check_if_mirror(node1.right, node2.left);
}

function check_if_symmetric(root) {
  if (root === null) return true;
  return check_if_mirror(root.left, root.right);
}
