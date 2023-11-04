// Problem

// Is It A Tree
// Given an undirected graph, find out whether it is a tree.

// The undirected edges are given by two arrays edge_start and edge_end of equal size. 
// Edges of the given graph connect nodes edge_start[i] and edge_end[i] for all valid i.




/**
 * A tree is an undirected connected acyclic graph.
 * 
 * 
 * @param {int32} node_count
 * @param {list_int32} edge_start
 * @param {list_int32} edge_end
 * @return {bool}
 */
function is_it_a_tree(node_count, edge_start, edge_end) {
  const adjList = buildAdjList(node_count, edge_start, edge_end);
  const visited = new Array(node_count).fill(false);
  const parent = new Array(node_count).fill(false);
  let componentCount = 0;

  for (let v = 0; v < node_count; v++) {
    if (!visited[v]) {
      componentCount++;
      if (componentCount > 1) return false; // not a tree, more than one component 
      if (dfs(v)) return false;
    }
  }

  return true; // is a tree, no violation found

  function dfs(node) {
    console.log('node', node)
    console.log('visited', visited)
    visited[node] = true;
    for (let neighbor of adjList[node]) {
      if (!visited[neighbor]) {
        // create a tree edge, contiue recursion
        // record who the parent is of this neighbor
        parent[neighbor] = node;
        if (dfs(neighbor)) return true; // somebody in my subtree found a violation / cycle
      } else {
        // we've found a back edge, we're visiting an already visited node that is not the parent
        // it is the parent - that's fine, just ignore
        if (neighbor !== parent[node]) {
          return true; // I've found a violation / back edge / cycle
        }
      }
    }
    return false;
  }


  function buildAdjList(n, edge_start, edge_end) {
    const adjList = new Array(n).fill(0).map(() => []);
    edge_start.forEach((start_edge, i) => {
      adjList[start_edge].push(edge_end[i]);
      adjList[edge_end[i]].push(start_edge);
    })
    console.log('adjList', adjList)
    return adjList;
  }
}



console.log('\n******************** OUTPUT ************\n');
let input =
{
  "node_count": 6,
  "edge_start": [4, 4, 4, 2, 1],
  "edge_end": [3, 5, 0, 0, 0]
  }
let result = is_it_a_tree_bfs(input.node_count, input.edge_start, input.edge_end);
console.log('result:', result)
console.log('\n******************** ************\n')


function is_it_a_tree_bfs(node_count, edge_start, edge_end) {
  const adjList = buildAdjList(node_count, edge_start, edge_end)
  const visited = new Array(node_count).fill(false);
  const parent = new Array(node_count).fill(false);
  let componentCount = 0

  for (let i = 0; i < node_count; i++) {
    if (!visited[i]) {
      componentCount++;
      if (componentCount > 1) return false; // not a tree, more than one component 
      if (bfs(i)) return false; // true if we found a violation, so return false from overall function
    }
  }

  return true;

  ///// helpers /////
  function buildAdjList(n, edge_start, edge_end) {
    const adjList = new Array(n).fill(0).map(() => []);
    edge_start.forEach((start_edge, i) => {
      adjList[start_edge].push(edge_end[i]);
      adjList[edge_end[i]].push(start_edge);
    })
    console.log('adjList', adjList)
    return adjList;
  }

  // true for violation found, false for not found.
  function bfs(node) {
    let queue = [];
    queue.push(node);
    visited[node] = true;
    while (queue.length) {
      let current = queue.shift();
      let neighbors = adjList[current];
      for (let neighbor of neighbors) {
        if (!visited[neighbor]) { // creating a tree edge
          queue.push(neighbor);
          visited[neighbor] = true;
          parent[neighbor] = current;
        } else {
          // neighbor has been visited, make sure it's not the parent, if it's not, it is a violation / cross edge
          if (neighbor !== parent[current]) {
            return true;
          }
        }
      }
    }
    return false;
  }
}