/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}

TIME: O(Nodes + edges)

 first tree
 parents = {
    1: 0,
    2: 0,
    3:0
 }

 second tree
 parents = {
    1: 0,
    4: 1,
    2: 1,
    3: 2,
    // violation found where 1: 
 }

 CLARIFY: connected or possibly unconnected?
 // unconnected automatically means invalid tree
 */
 var validTree = function (n, edges) {
  const visited = new Set();
  const parents = {};
  const adjList = buildAdjList(edges);
  console.log(adjList);
  let components = 0;

  for (let node = 0; node < n; node++) {
      if (!visited.has(node)) {
          components++;
          if (components > 1) return false; // short-circuit, bc unconnected graph can't be a tree
          if (dfs(node)) return false; // 'true' here means cycle found, not a tree!
      }
  }

  return true;

  function dfs(node) {
      // first mark visited at top
      visited.add(node);

      // for each edge/neighbor
          for (const neighbor of adjList[node] || []) {
              if (!visited.has(neighbor)) {
                  // set parent
                  parents[neighbor] = node; // parent[1] = 0
                  if (dfs(neighbor)) return true; // bubble up the violation
              } else {
                  // neighbor has been visited, only visited neighbor allowed in tree is a PARENT.
                  if (neighbor !== parents[node]) {
                      // visiting node 3
                      // at neighbor 1
                      // since 2 === parent[3] we skip the 'real parent'
                      // 3 !== parent[1] which is 0
                      // violation found
                      return true; // violation found, "back edge", this dfs call found a violation
                  }
              }
      }
      return false;
  }


  function buildAdjList(edges) {
      const adjList = {};
      for ([start, end] of edges) {
          adjList[start] = adjList[start] || [];
          adjList[start].push(end);
          adjList[end] = adjList[end] || [];
          adjList[end].push(start)
      }
      return adjList;
  }
};




// more intuitive using global flag, runs about the same time.

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}

 first tree
 parents = {
    1: 0,
    2: 0,
    3:0
 }

 second tree
 parents = {
    1: 0,
    4: 1,
    2: 1,
    3: 2,
    // violation found where 1: 
 }

 CLARIFY: connected or possibly unconnected?
 // unconnected automatically means invalid tree
 */
 var validTree = function (n, edges) {
  const visited = new Set();
  const parents = {};
  const adjList = buildAdjList(edges);
  console.log(adjList);
  let components = 0;

  // goal, have global violationFound flag
  let isValidTree = true;

  for (let node = 0; node < n; node++) {
      if (!isValidTree) return false;

      if (!visited.has(node)) {
          components++;
          if (components > 1) {
              isValidTree = false; // short-circuit, bc unconnected graph can't be a tree
          }
          dfs(node)
      }
  }

  return isValidTree;

  function dfs(node) {
      if (!isValidTree) return;
      // first mark visited at top
      visited.add(node);

      // for each edge/neighbor
      if (adjList[node]) {
          for (const neighbor of adjList[node]) {
              if (!visited.has(neighbor)) {
                  // set parent
                  parents[neighbor] = node; // parent[1] = 0
                  dfs(neighbor);
              } else {
                  // neighbor has been visited, only visited neighbor allowed in tree is a PARENT.
                  if (neighbor !== parents[node]) {
                      // visiting node 3
                      // at neighbor 1
                      // since 2 === parent[3] we skip the 'real parent'
                      // 3 !== parent[1] which is 0
                      // violation found
                      return isValidTree = false; // violation found, "back edge", this dfs call found a violation
                  }
              }
          }
      }
  }


  function buildAdjList(edges) {
      const adjList = {};
      for ([start, end] of edges) {
          adjList[start] = adjList[start] || [];
          adjList[start].push(end);
          adjList[end] = adjList[end] || [];
          adjList[end].push(start)
      }
      return adjList;
  }
};