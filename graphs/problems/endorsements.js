/*
The "endorsements hash table problem" refers to a scenario often encountered in coding interviews or algorithmic problem-solving exercises. 
In this problem, you're typically given a list of endorsements, where each endorsement consists of a pair of individuals indicating that one person endorses another. The goal is to determine if there is a chain of endorsements that can be traced back to a particular individual.

For example, imagine you have a list of endorsements like this:

css
Copy code
[["A", "B"], ["B", "C"], ["C", "D"]]
This means that person A endorses person B, person B endorses person C, and person C endorses person D.

The problem might ask you to determine if there's a chain of endorsements that leads back to a specific person, such as person A endorsing person D. 
You would need to traverse the endorsements list and use a data structure like a hash table or dictionary to efficiently track the endorsements.

This problem tests your ability to implement graph traversal algorithms, such as depth-first search (DFS) or breadth-first search (BFS), 
and your understanding of data structures like hash tables or dictionaries. It's often used to assess your problem-solving skills, algorithmic thinking, and ability to write efficient code.
*/

// array of tuples IS adjlist bc only one person can endorce another. no cycles.
function hasEndorsementChain(endorsements, start, target) {
  let result = false;
  const visited = {};
  
  function dfs(node) {
      if (node === target) {
          result = true;
          return;
      }
      
      visited[node] = true;
      
      for (let [start, neighbor] of endorsements) {
          if (start === node && !visited[neighbor]) {
              dfs(neighbor);
          }
      }
  }
  
  dfs(start);
  return result;
}

// Example usage:
// node -> one neighbor pairwise relationships if this is an adjList
const endorsements = [["A", "B"], ["B", "C"], ["C", "D"]];
const start = "A";
const target = "D";

console.log(hasEndorsementChain(endorsements, start, target)); // Output: true
