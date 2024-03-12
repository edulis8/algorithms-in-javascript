// Given the root of a binary tree, return the number of nodes where the value of the node is equal to the average of the values in its subtree.

// return val : integer, count of valid nodes

// CLARIFY:
// null values?
// negatives?
// what do with floats?

// are we counting the node
// 

//
// 4
// /\
// 2 6. 

// valid cases:
// a leaf node is auto-counted
// a node who (self.value + all descendants values) / count(self and descendants) = node.value


// output: 3

// node.left
// node.right
// node.value

// bottom up
// hit leaf nodes, those will count

// at a regular node
// NEED TO KNOW sum of left subtrees values + sum of right subtree values + self.value 
// and AMOUNT of left and right nodes
// SUM / AMOUNT = AVERAGE
// if AVERAGE === node.value

// globalCounter
// 
//'
// 10
// \
// 4
// /\
// 2 6.
// / \
// 1   null
/**
* Definition for a binary tree node.
* function TreeNode(val, left, right) {
*     this.val = (val===undefined ? 0 : val)
*     this.left = (left===undefined ? null : left)
*     this.right = (right===undefined ? null : right)
* }
*/
/**
* @param {TreeNode} root
* @return {number}
*/
function averageOfSubtree(root) {
if (!root) return null;// correct?
let globalCounter = 0;
helper(root);
return globalCounter;

function helper(node) {
  if (!node.left && !node.right) {
    // leaf
    globalCounter++;
    return [node.val, 1]; // do we need to return 1 count itself?
  }
  

  let leftSum = 0;
  let leftAmount = 0;
  
  let rightSum = 0;
  let rightAmount = 0;
  
  if (node.left) {
    [leftSum, leftAmount] = helper(node.left);
  }
  // recursive cases
  if (node.right) {
    [rightSum, rightAmount] = helper(node.right);
  }
  
  const selfSum = leftSum + rightSum + node.val;
  const amount = rightAmount + leftAmount + 1;
  
  if (Math.floor(selfSum / amount) === node.val) {
    globalCounter++;
  }
  
  // Math.trunc(-4.9); // rounds closes to zero
  // Math.floor(-4.9); // -5
  // Math.floor(4.9); // 4
  // every worker passe s to manager this sum val, maybe amount info too
  return [selfSum, amount];
}
}







