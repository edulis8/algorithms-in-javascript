// DFS Traversal Of A Graph
// Given an undirected graph, perform a Depth-First Search Traversal on it.
/**
 * 
 * 
 * 
 * ==Time Complexity===
PUSHING AND POPPING VERTICIES IN THE CALL STACK + LOOKING AT THE NEIGHBORS OF EACH NODE
O(number_of_nodes + number_of_edges).

To create adjacency list: O(number_of_edges).
DFS algorithm: O(number_of_nodes + number_of_edges).

==Auxiliary Space Used==
O(number_of_nodes + number_of_edges).

Space used for adjacency list = O(number_of_nodes + number_of_edges).
Space used for visited array = O(number_of_nodes).
Space used for recursion call stack = O(number_of_nodes).

===Space Complexity===
O(number_of_nodes + number_of_edges).

Space used for input: O(number_of_edges).
Auxiliary space used: O(number_of_nodes + number_of_edges).
Space used for output: O(1).
So, total space complexity = O(number_of_nodes + number_of_edges).


----
 * @param {int32} n
 * @param {list_list_int32} edges
 * @return {list_int32}
 */
function dfs_traversal(n, edges) {
  const adjList = createAdjList(n, edges);
  const visited = new Array(n).fill(false);
  const result = [];

  // this makes sure you hit all unconnected pieces of the graph
  for (let s = 0; s < n; s++) {
    if (!visited[s]) {
      // componentCounter++
      dfs(s);
    }
  }
  return result;

  function dfs(s) {
    visited[s] = true;
    result.push(s);
    for (let neighbor of adjList[s]) {
      if (!visited[neighbor]) {
        dfs(neighbor)
      }
    }
  }

  function createAdjList(n, edges) {
    const adjList = new Array(n).fill(0).map(() => []);
    for (const [start, end] of edges) {
      adjList[start].push(end);
      adjList[end].push(start);
    }
    console.log('adjlist', adjList)
    return adjList;
  }
}




console.log('\n******************** OUTPUT ************\n');
let input = {
  "n": 6,
  "edges": [
    [0, 1],
    [0, 2],
    [1, 4],
    [3, 5]
  ]
}
let result = dfs_traversal(input.n, input.edges);
console.log('result:', result)
console.log('\n******************** ************\n')
