

// If a is a synonym of b and b is a synonym of c, this implies that a is a synonym of c and c is a synonym of a

// "advice:counsel counsel:suggestion suggestion:advice activity:briskness briskness:liveliness"

// In this example, advice, counsel, suggestion are all synonyms of each other, while advice is not a synonym of activity.

// Problem: Given an input data in the format above and a word, write a program to find out all the synonyms of that word.


// input: stringListOfSynonyms, word
// output: array of strings

//input 
//"advice:counsel counsel:suggestion suggestion:advice activity:briskness briskness:liveliness"
// advice

// output
// ["counsel", "suggestion"]

// input liveliness
// output 
// ["briskness", "activity"]

// disconnected graph
// undirected


// TIME: linear to graph O(v + e) or O(n)
// SPACE: linear to graph O(v + e) or O(n)
// call stack for DFS: O(n)
// ^ I corrected myself there. We call DFS at most once for each node/vertex.



function solution_chat_gpt(synonyms, word) {
  // model as graph
  const graph = {};
  const pairs = synonyms.split(' ');
  pairs.forEach(pair => {
    const [word1, word2] = pair.split(':')

    if (!graph[word1]) {
      graph[word1] = [];
    }
    // edgelist
    graph[word1].push(word2)

    if (!graph[word2]) {
      graph[word2] = []
    }
    graph[word2].push(word1);
  });

  console.log(graph)


  const result = [];
  const visited = {};
  
  // DFS to find all synonyms of word
  function dfs(searchTerm) {
    visited[searchTerm] = true;

    if (word !== searchTerm) {
      result.push(searchTerm);
    }
    // iterate over neighbors
    // if not visited
    // call dfs on neighbor
    if (graph[searchTerm]) {
      graph[searchTerm].forEach(neighbor => {
        if (!visited[neighbor]) {
          dfs(neighbor)
        }
      })
    }

  }

  dfs(word);
  return result;
}



console.log('\n******************** OUTPUT ************\n');
const result = solution("advice:counsel counsel:suggestion suggestion:advice activity:briskness briskness:liveliness suggestion:sdklfjklsjflksdjkjkljfs", "activity");
console.log(result);
console.log('\n******************** ************\n')


function solution(synonyms, word) {
  // model as graph
  const adjList = {};
  const pairs = synonyms.split(' ');
  pairs.forEach(pair => {
    const [start, end] = pair.split(':')

    adjList[start] = adjList[start] ?? [];
    adjList[end] = adjList[end] ?? [];

    adjList[start].push(end);
    adjList[end].push(start);
  });

  console.log('adjlist', adjList)


  const result = [];
  const visited = new Set();
  
  // DFS to find all synonyms of word
  function dfs(searchTerm) {
    visited.add(searchTerm);

    if (word !== searchTerm) {
      result.push(searchTerm);
    }
    // iterate over neighbors
    // if not visited
    // call dfs on neighbor
    if (adjList[searchTerm]) {
      adjList[searchTerm].forEach(neighbor => {
        if (!visited.has(neighbor)) {
          dfs(neighbor)
        }
      })
    }

  }

  dfs(word);
  return result;
}
