
/**
 * 
 * Count Connected Components In An Undirected Graph
Given an undirected graph, find its total number of connected components.




// DFS SOLUTION


==Time Complexity===
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
 * @return {int32}
 */
function number_of_connected_components(n, edges) {
  let componentCounter = 0;
  const adjList = createAdjList(n, edges);
  const visited = new Array(n).fill(false);
  // const result = [];

  // this makes sure you hit all unconnected pieces of the graph
  for (let s = 0; s < n; s++) {
    if (!visited[s]) {
      componentCounter++;
      dfs(s);
    }
  }

  return componentCounter;

  function dfs(s) {
    visited[s] = true;
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
  "n": 5,
  "edges": [[0, 1], [1, 2], [0, 2], [3, 4]]
}
let result = number_of_connected_components(input.n, input.edges);
console.log('result:', result)
console.log('\n******************** ************\n')

const result = []
if (g[x+1]) result.push([x+1,y])
// 3 more times
return result;
/*


BFS SOLUTION


Time Complexity
PUSHING AND POPPING THE VERTICES + LOOOKING AT THE ADJACENCY LIST OF EACH VERTEX
O(number_of_nodes + number_of_edges).



To create adjacency list: O(number_of_edges).
BFS algorithm: O(number_of_nodes + number_of_edges).

Auxiliary Space Used
O(number_of_nodes + number_of_edges).

Space used for adjacency list = O(number_of_nodes + number_of_edges).
Space used for visited array = O(number_of_nodes).
Space used for queue = O(number_of_nodes).

Space Complexity
O(number_of_nodes + number_of_edges).

Space used for input: O(number_of_edges).
Auxiliary space used: O(number_of_nodes + number_of_edges).
Space used for output: O(1).
So, total space complexity: O(number_of_nodes + number_of_edges).


* @param {int32} n
* @param {list_list_int32} edges
* @return {list_int32}
*/
function bfs_number_connected_components(n, edges) {
  let componentCounter = 0;
  // let result = [];
  let adjList = new Array(n).fill(0).map(() => [])

  for (let [start, end] of edges) {
    adjList[start].push(end);
    adjList[end].push(start);
  }

  let visited = new Array(n).fill(false);
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      componentCounter++;
      bfs(i);
    }
  }
  // return result;
  return componentCounter;


  function bfs(node) {
    let queue = [];
    queue.push(node);
    visited[node] = true;
    while (queue.length) {
      let current = queue.shift();
      // result.push(current);
      let neighbors = adjList[current];
      for (let neighbor of neighbors) {
        if (!visited[neighbor]) {
          queue.push(neighbor);
          visited[neighbor] = true;
        }
      }
    }
  };
}

console.log('\n******************** OUTPUT ************\n');
let input2 = {
  "n": 5,
  "edges": [[0, 1], [1, 2], [0, 2], [3, 4]]
}
let result2 = bfs_number_connected_components(input2.n, input2.edges);
console.log('result:', result2)
console.log('\n******************** ************\n')
