
/**
 * Find Order Of Characters In Alien Dictionary
Given a sorted dictionary of an alien language, find the order of characters in the alphabet.

Example One
{
"words": ["baa", "abcd", "abca", "cab", "cad"]
}
Output:

"bdac"
Example Two
{
"words": ["caa", "aaa", "aab"]
}
Output:

"cab"
Notes
Given dictionary is sorted in the lexicographical order of the alien language.
Output is a string consisting of all the characters of the alien alphabet, in order.
Constraints:

1 <= total length of all the words in the dictionary <= 105
Input will consist of lowercase latin characters only
Input will be such that it is possible to determine the alphabet order uniquely
The dictionary may contain duplicate words
 * 
 * 
 * TIME:
 * O(edges + vertices)
 * Linear
 * 
 * SPACE:
 * O(edges + vertices)
 * Linear
 * 
 * 
 * 
 * @param {list_str} words
 * @return {str}
 */
function find_order(words) {
  // graph solution
  // we need to figure out the pairwise relationships between letters
  // then we can model it as a graph and do topological sort
  // if it has a cycle, there is not solution

  if (!words || !words.length) return '';
  const adjList = buildAdjList(words);
  const topsort = [];
  let timestamp = 0;
  const arrivals = {};
  const departures = {};
  const allChars = new Set();
  const visited = new Set();
  words.forEach(word => {
    let len = word.length;
    while (len--)
      allChars.add(word[len]);
  })

  console.log(adjList);
  console.log('set', allChars)


  //iterate over adjList's nodes
  for (let char of allChars) {
    if (!visited.has(char)) {
      if (dfs(char)) return 'VIOLATION/CYCLE';
    }
  }

  topsort.reverse();
  return topsort.join('');

  function dfs(char) {
    arrivals[char] = timestamp++;
    const neighbors = adjList[char].neighbors;
    visited.add(char)
    for (let neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        if (dfs(neighbor)) return true
      } else {
        // if source departure will be bigger, this is a cycle, a violation
        if (!departures[neighbor]) {
          return true; // violation found
        }
      }
    }
    departures[char] = timestamp++;
    topsort.push(char);
    return false;
  }

  function buildAdjList(words) {
    // when you find a different letter
    // you know that there's a directional pairwise relationship between those letters
    // a->b
    // d->a, etc
    const adjList = {};

    for (let i = 0; i < words.length - 1; i++) {
      let word1 = words[i];
      let word2 = words[i + 1];
      for (let j = 0; j < Math.min(word1.length, word2.length); j++) {
        let char1 = word1[j];
        let char2 = word2[j];
        adjList[char1] = adjList[char1] || { source: char1, neighbors: new Set() };
        if (char1 != char2) {

          adjList[char1].neighbors.add(char2);
          break;
        }
      }

    }
    return adjList;
  }
}

