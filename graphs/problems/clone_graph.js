/**

Justin:
- use BFS to traverse and clone, put it in an array (1-indexed), where index corresponds to node.val
- use BFS to traverse again, look at neighbors, look them up in the array, add the cloned neighbors to the cloned node's neighb array



 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };

NOTES:
CONNECTED - all one segment
UNDIRECTED - two way edges
NODE VALUE is unique!
No self loops, no repeated edges

In this solution, we use a Map visited to keep track of all the nodes we've already cloned. 
- For each node, we create a new node (if it hasn't been created before), 
- Add it to the visited map, and then recursively clone all its neighbors. 
- If a node has already been cloned, we simply return the cloned node from the visited map.
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (firstNode) {
  console.log({ firstNode })
  if (!firstNode) return [];
  if (!firstNode.neighbors.length) return new Node(firstNode);
  // DFS or BFS?

  // if DFS
  // 1 -> 2 -> 3 -> 4
  // create new node
  // set its value to node.val
  // set its neighbors array 
  const visited = {}; // keep track of how many times a node has been visited
  const newNodeMap = {};
  const res = dfs(firstNode);
  console.log({ visitedAtEnd: visited })
  // console.log('res', JSON.stringify(res, null, 2))
  return res

  // 1 create new node(1)
  // dfs to 2, create new node(2)
  // dfs to 3, create new node(3)
  // dfs to 4, create new node(4)

  // 3
  function dfs(node) {
      console.log({ nodeAtTopDFS: node })

      let newNode;
      if (visited[node.val]) {
          // if we've visited it, it has already been created
          newNode = newNodeMap[node.val];
          visited[node.val] = (visited[node.val] ?? 0) + 1;
      } else {
          newNode = new Node(node.val);
          newNodeMap[node.val] = newNode;
          visited[node.val] = (visited[node.val] ?? 0) + 1;
      }
      for (const neighbor of node.neighbors) {
          console.log({ node, visited, neighbor, newNode })
          // a node can be visited its neighbors.length times, (! greater than neighors.length times)
          if ((visited[neighbor.val] ?? 0) < neighbor.neighbors.length) {
              // const newNeighbor = new Node(neighbor.val);
              // newNode.children.push(newNeighbor);
              const newNeighbor = dfs(neighbor); // will immediately create new node out of neighbor and add to visited set
              newNode.neighbors.push(newNeighbor);
          }

      }
      console.log({ newNode })
      return newNode;
  }

};