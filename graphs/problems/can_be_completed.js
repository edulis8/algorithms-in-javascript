
/*
Complete All Courses With Dependencies
A university has n courses to offer. To graduate from that university, a student must complete all those courses. 
Some courses have prerequisite courses. One can take a course only after completing all of its prerequisites.
 Dependencies between the courses are described by two arrays a and b of the same size:
 course a[i] must be taken before course b[i] for all valid indices. Is it possible to complete all the courses without violating constraints?


 example 1
 input
 {
"n": 4,
"a": [1, 1, 3],
"b": [0, 2, 1]
}

Output: true
// One possible ordering is 3, 1, 0, 2.


example 2
{
"n": 4,
"a": [1, 1, 3, 0],
"b": [0, 2, 1, 3]
}
// Every possible ordering of the courses violates at least one of the constraints.

output: false
*/

// DFS 
// linear time. O(edges + nodes), aka O(n+m)


function can_be_completed(n, a, b) {
  // build adjList?

  let timestamp = 0;
  const visited = new Array(n).fill(false);
  const arrivals = new Array(n).fill(false);
  const departures = new Array(n).fill(false);
  const adjList = buildAdjList(n, a, b)

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
        if (!departures[neighbor]) {
          console.log('arrivals', arrivals)
          console.log('departures', departures)
          // if departures not set here, means departure will be greater - timestamp is a record of entering/leaving the call stack
          // if departure time is greater, it indicates a back edge, or a cycle
          return true; // violation found
        }
      }
    }
    departures[node] = timestamp++
    return false; // no violation f;ound
  }

  function buildAdjList(n, start, end) {
    const adjList = new Array(n).fill(0).map(() => []); // array of arrays
    start.forEach((startVertex, i) => {
      adjList[startVertex].push(end[i]);
    })
    console.log(adjList)
    return adjList;
  }
}


console.log('\n******************** OUTPUT ************\n');

let input = {
  "n": 4,
  "a": [1, 1, 3, 0],
  "b": [0, 2, 1, 3]
  }


// {
//   "n": 4,
//   "a": [1, 1, 3],
//   "b": [0, 2, 1]
// }

let result = can_be_completed(input.n, input.a, input.b);
console.log('result:', result)
console.log('\n******************** ************\n')
