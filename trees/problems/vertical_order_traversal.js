/**
 * 
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



/*

Vertical Order Traversal Of A Binary Tree
Given a binary tree, find its vertical order traversal starting from the leftmost level to the rightmost level.

/*
Asymptotic complexity in terms of the number of nodes ( = `n`) of the tree rooted at `root`:
* Time: O(n).
* Auxiliary space: O(n).
* Total space: O(n).



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
 * 
 * YOU CAN STORE TUPLES OR ANYTHING IN QUEUE
 * YOU CAN USE THAT INFO TO KEEP TRACK OF DISTANCE, PROBABLY OTHER THINGS
 * YOU CAN USE GLOBAL BOUNDARY VARS TO KEEP TRACK OF LEFTMOST AND RIGHTMOST VALUES
 * 
 * @param {BinaryTreeNode_int32} root
 * @return {list_list_int32}
 */
function vertical_order_traversal(root) {
  if (!root) {
    return []; // check with interviewer
  }

  // bfs, we will do normal bfs queue solution, keeping track of distance as well in the queue via an array of [node,distance tuples]
  // we'll keep track of those in map of distance->[values]. Same distance, gets another values pushed into its array.
  // keep track of rightmost and leftmost distances, so we can iterate over that object and create result array in the right order

  const queue = [[root, 0]]; // will have tuples
  const result = []; // global result
  const distanceToValueMap = {};
  let rightDistanceBound = 0;
  let leftDistanceBound = 0;

  while (queue.length) {
    //let len = queue.length; // snapshot of length. NOT REQUIRED BECAUSE WE ARE JUST PROCESSING EACH NODE TILL THE END, NOT NEEDING TO DO PROCESSING ON A WHOLE LEVEL AT ONCE.
    // while (len--) {
    // remove first node(s)
    let pair = queue.shift(); // get as many nodes as were in queue when we started this loop. Since we're adding more within it, we need this inner while "snapshot"
    let node = pair[0];
    let distance = pair[1]
    distanceToValueMap[distance] = distanceToValueMap[distance] || []; // init
    distanceToValueMap[distance].push(node.value);

    leftDistanceBound = Math.min(distance, leftDistanceBound); // keep track of left bound
    rightDistanceBound = Math.max(distance, rightDistanceBound); // keep track of right bound

    if (node.left) {
      queue.push([node.left, distance - 1])
    }
    if (node.right) {
      queue.push([node.right, distance + 1])
    }
    // }
  }

  console.log(distanceToValueMap)
  // {
  //   '0': [ 1, 5, 6 ],
  //   '1': [ 3, 8 ],
  //   '2': [ 7 ],
  //   '-1': [ 2 ],
  //   '-2': [ 4 ]
  // }
  //return Object.values(distanceToValueMap); // not sure if order preserved in object CAN'T TO THIS

  for (let i = leftDistanceBound; i <= rightDistanceBound; i++) {
    result.push(distanceToValueMap[i]);
  }
  return result;
}



// C++
// vector < vector < int >> vertical_order_traversal(BinaryTreeNode * root) {

if (root == NULL) {
  return vector < vector < int >> ();
}

  int left_bound = 0, right_bound = 0;

unordered_map < int, vector < int >> vertical_traversal;
// Every pair in the queue stores the value of the node and horizontal distance with respect to the root node.
queue < pair < BinaryTreeNode *, int >> q;

q.push({ root, 0});

while (!q.empty()) {
      auto node_pair = q.front();
  q.pop();
  BinaryTreeNode * current_node = node_pair.first;
      int horizontal_distance = node_pair.second;
  left_bound = min(left_bound, horizontal_distance); // keep track of leftmost distance
  right_bound = max(right_bound, horizontal_distance); // keep track of rightmost distance

  // map from distance -> value
  // 0 -> 1 (root's value)
  vertical_traversal[horizontal_distance].push_back(current_node -> value);

  // creating a BFS with the distance and the nodes
  if (current_node -> left != NULL) {
    q.push({ current_node-> left, horizontal_distance - 1});
}
if (current_node -> right != NULL) {
  q.push({ current_node-> right, horizontal_distance + 1});
}
  }

// vector < vector < int >> result;
// for (int i = left_bound; i <= right_bound; i++) {
//   result.push_back(vertical_traversal[i]);
// }
// return result;
// }


// EB THOUGHTS

// bfs
// widest queue, first would be first vert level
// last would be last vert level

// problem for a node
// are any of my children in the same vertical order, 
// how do I know if same vertical order?
// same number of right/left hops
// same number of left/right hops
// traverse
// get to a node, not just a leaf node
// if path to get there took same number of left and right hops
// its in the same vertical order
// put in temp result array
// when you get to the end push temp result array into global result array
// putting in the global result order
// - push (shift) to left if more to the left
// - push to the right if more to the right.
// mark nodes as visited so you don't re-visit




// 1 would find 5,6
// 2 would go left of 1set
// 4 would go left of 2
// 5 

// 4 path to get was all left
// 2 path to get was all left
// 5 path to get was 1l/1r - know it it has vertical "neighbor" - who is it

