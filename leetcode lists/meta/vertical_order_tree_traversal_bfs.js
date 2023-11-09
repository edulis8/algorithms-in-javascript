/**
 Given the root of a binary tree, return the vertical order traversal of its nodes' values. (i.e., from top to bottom, column by column).

If two nodes are in the same row and column, the order should be from left to right.






 * SIMPLE JS SOLUTION FOR LEETCODE PROBLEM
 * TIME: LINEAR
 * SPACE: LINEAR in worst case, probably closer to O(n/2) if tree is balanced
 * 
 * 
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalOrder = function(root) {
  if (!root) return [];
  // bfs solution, using a queue
  // we'll keep track of node with a level, in a map
  // at the end we'll return the map values, ordered by level/key

  // init q, with val and level
  const queue = [[root, 0]];
  const map = {}; // shape { 0: [3, 0, 1], -1: 9 ...}

  while (queue.length) {
      let [node, level] = queue.shift(); 
      
      map[level] = map[level] || [];
      map[level].push(node.val)


      if (node.left) queue.push([node.left, level - 1]);
      if (node.right) queue.push([node.right, level + 1])
  }

  // sort by map key
  // we need the arrays
  return Object.keys(map).sort((a,b) => a - b).map(key => map[key]);
};

