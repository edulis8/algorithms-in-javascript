// "Topological sort" (or "topological ordering") is a linear ordering of the vertices (nodes) in a directed graph such that for every directed
// edge (u, v), vertex "u" comes before vertex "v" in the ordering.
// In simpler terms, it arranges the nodes of a directed acyclic graph (DAG) in a linear order such that all dependencies flow from left to right.

/**

Topsort - topological sort - linear ordering of nodes from left to right.
Only possible for a DAG - Directed Acyclic Graph.
need a left to right path if courses were sorted left to right

- build graph
- init 'topsort' array -> accumulate all nodes in increasing order of departure times from call stack
- reverse the topsort array and return it


TIME: Linear O(m+n)
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  let timestamp = 0;
  const visited = [];
  const arrivals = [];
  const departures = [];
  const adjList = buildAdjList(numCourses, prerequisites);
  const topsort = [];

  for (let v = 0; v < numCourses; v++) {
    if (!visited[v]) {
      if (dfs(v)) return []; // violation found
    }
  }

  topsort.reverse();
  return topsort;

  function dfs(node) {
    visited[node] = true;
    arrivals[node] = timestamp++;
    for (const neighbor of adjList[node]) {
      if (!visited[neighbor]) {
        if (dfs(neighbor)) return true; // violation found
      } else {
        // we've seen this neighbor before
        if (!departures[neighbor]) {
          // if neighbor departures not set here, means its departure will be greater - timestamp is a record of entering/leaving the call stack
          // if its departure time is greater, it indicates a back edge, or a cycle
          // If the DFS encounters a node that has been visited but not yet marked as departed,
          // it means that there's a cycle in the graph. This is because we've returned to a node before
          // we've finished visiting all its descendants, which is only possible if the graph contains a cycle.
          return true; // violation found
        }
      }
    }
    topsort.push(node);
    departures[node] = timestamp++;
    return false; // no violation found
  }

  function buildAdjList(n, prerequisites) {
    const adjList = Array.from({ length: n }, () => []);
    prerequisites.forEach(([course, prereq]) => {
      adjList[prereq].push(course);
    });
    return adjList;
  }
};

// my attempt failed

// var findOrder = function (numCourses, prerequisites) {

//     const adjList = buildAdjList(numCourses, prerequisites);
//     console.log({ adjList })
//     const visited = new Set();
//     const topsort = []; // accumulates nodes in increasing order of departure times
//     const arrivals = []; // timestamp when node is hit by dfs call stack
//     const departures = []; // timestamp when node leaves dfs call stack
//     let timestamp = 0;

//     for (let vertex = 0; vertex < numCourses; vertex++) {
//         if (!visited.has(vertex)) {
//     if (dfs(0) === 'CYCLE FOUND') return []
//         }
//     }

//     topsort.reverse()
//     return topsort;

//     function dfs(node) {
//         arrivals[node] = timestamp++;
//         visited.add(node);
//         for (const neighbor of adjList[node]) {
//             if (!visited[neighbor]) {
//                 return (dfs(neighbor)); // returns CYCLE FOUND OR NOT FOUND
//             } else {
//                 // we've seen this neighbor before
//                 if (!departures[neighbor]) {
//                     // if neighbor departures not set here, means its departure will be greater - timestamp is a record of entering/leaving the call stack
//                     // if its departure time is greater, it indicates a back edge, or a cycle
//                     return 'CYCLE FOUND'; // violation found
//                 }
//             }
//         }

//         departures[node] = timestamp++;
//         topsort.push(node);
//         return 'CYCLE NOT FOUND';
//     }
// }

// function buildAdjList(n, prerequisites) {
//     const adjList = Array.from({ length: n }, () => []);
//     console.log({ adjList })
//     prerequisites.forEach(([course, prereq]) => {
//         console.log({ prereq, course })

//         adjList[prereq].push(course);
//     })
//     return adjList;
// }
