

/**
 * NO ROOT GIVEN
 * SET IS AN ELEGANT SOLUTION BUT USES EXTRA SPACE
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 * 
 * TIME: O(n)
 * SPACE: set is O(n)
 */


/**
 * @param {Node} node
 * @return {Node}
 */
var lowestCommonAncestor = function(p, q) {
    // use a set to record all pareants of p
    // traverse up the parent chain of q, if its in the set, return node
  
    const set = new Set();
    let node = p;
    while(node) {
        set.add(node);
        node = node.parent
    }
  
    node = q;
    while(node) {
        if (set.has(node)) {
            return node;
        }
        node = node.parent;
    }
    return null; // default, no common ancestor found
  };



/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 * 
 * TIME: LINEAR O(n)
 * SPACE: O(1) just some global variables
 * CALL STACK SPACE: if balanced, O(logn), worst case O(n)
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var lowestCommonAncestor = function(p, q) {
  let result = null;
  let root = null;
  if (p.parent === null) root = p;
  if (q.parent === null) root = q;
  let parent = p.parent;
  // we have p and q
  // we need to traverse upward to find root, so we can depth first search.
  while (parent) {
      root = parent;
      parent = parent.parent;
  }
  console.log(root)
  dfs(root);
  return result;

  function dfs(node) {
      if (!node) return false;
      let left = dfs(node.left); // left tree has p or q
      let right = dfs(node.right); // right tree has p or q
      let curr = node.val === p.val || node.val === q.val; // current node is p or q

      // booleans coerce to 1s and 0s
      // if two out of three conditions are true
      if (left + right + curr >= 2) result = node;
      return left || right || curr;
  }
};


