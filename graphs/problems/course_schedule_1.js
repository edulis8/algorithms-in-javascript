/**
 
207. Course Schedule

There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.

 

Example 1:

Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0. So it is possible.
Example 2:

Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
 

Constraints:

1 <= numCourses <= 2000
0 <= prerequisites.length <= 5000
prerequisites[i].length == 2
0 <= ai, bi < numCourses



TIME:
O(number_of_nodes + number_of_edges).
SPACE:


 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (n, prerequisites) {
  let timestamp = 0;
  const visited = [];
  const arrivals = [];
  const departures = [];
  const adjList = buildAdjList(n, prerequisites);

  for (let v = 0; v < n; v++) {
    if (!visited[v]) {
      if (dfs(v)) return false; // violation found
    }
  }

  return true;

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
          return true; // violation found
        }
      }
    }
    departures[node] = timestamp++;
    return false; // no violation found
  }

  function buildAdjList(n, prerequisites) {
    const adjList = new Array(n).fill(0).map(() => []); // array of arrays
    prerequisites.forEach(([course, prereq]) => {
      adjList[prereq].push(course);
    });
    return adjList;
  }
};

/*
WITH ADJLIST AS AN OBJECT AND VISITED AS A SET


SAME AS ASKING: IS THERE A CYCLE IN A DIRECTED GRAPH.
NEED OUTER LOOP IN CASE NOT CONNECTED.

TIME:
O(number_of_nodes + number_of_edges).
SPACE:
O(number_of_nodes + number_of_edges).


 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (n, prerequisites) {
  let timestamp = 0;
  const visited = new Set();
  const arrivals = [];
  const departures = [];
  const adjList = buildAdjList(prerequisites);

  // Need outer loop in case not connected
  for (let v = 0; v < n; v++) {
    if (!visited.has(v)) {
      if (dfs(v)) return false; // violation found
    }
  }

  return true; // no violated found

  function dfs(node) {
    visited.add(node);
    arrivals[node] = timestamp++;
    if (adjList[node]) {
      for (const neighbor of adjList[node]) {
        if (!visited.has(neighbor)) {
          if (dfs(neighbor)) return true; // violation found
        } else {
          if (!departures[neighbor]) {
            // if departures not set here, means departure will be greater - timestamp is a record of entering/leaving the call stack
            // if departure time is greater, it indicates a back edge, or a cycle
            return true; // violation found
          }
        }
      }
    }
    departures[node] = timestamp++;
    return false; // no violation found
  }

  function buildAdjList(prerequisites) {
    // directed graph
    // prereq -> course
    const adjList = {};
    prerequisites.forEach(([course, prereq]) => {
      adjList[prereq] = adjList[prereq] || [];
      adjList[prereq].push(course);
    });
    return adjList;
  }
};
