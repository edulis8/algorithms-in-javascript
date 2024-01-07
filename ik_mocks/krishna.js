/*
Libs included:
    underscore lodash chai sinon sinon-chai mocha async request q bluebird jsdom
*/

/*
Write a function that returns whether a list of strings is sorted given a specific alphabet.
A list of N words and the K-sized alphabet are given.

input:  words =    ["cat", "bat", "tab"] // small dictionary
        alphabet = ['c', 'b', 'a', 't'] // alphabet in sorted order
output: True

input:  words =    ["alice", "eve", "bob"]
        alphabet = ['a', 'b', 'c', ..., 'z']  # normal (Latin) alphabet
output: False

input:  words =    ["alice", "alive", "bob", "eve"]
        alphabet = ['a', 'b', 'c', ..., 'z']  # normal (Latin) alphabet
output: True

alphabet contains: single-digit char of any sort

cat 

bat

tab

input:  words =    ["cat", "bat", "tab"] // small dictionary, words any size, all chrs in alphabet
        alphabet = ['c', 'b', 'a', 't'] // alphabet in sorted order

// all first chars are in alphabetical order


sort(a,b) => return a-b

// somehow iterating thru words
// checking if they are sorted correctly
// if find invalid order, return false;
// else return true

// brute force
// iterate thrugh, compare chars, use alphabet indices to decide if they're in correct order, 
*/

// O(word.length * chars.length) time, quadratic
// O(a.length)


// USE HASH map for alphabet
// use sub function to check is in order
  // iterate over SMALLER word
  // a smaller word with no invalid orders goes first, so return true
/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */

    
function isInOrder(word1, word2, lookup) {
  for (let i = 0; i < Math.min(word1.length, word2.length); i++) {
    const char = word1[i];
    const nextChar = word2[i];
    if (lookup[char] > lookup[nextChar]) {
      return false;
    }
    if (lookup[char] < lookup[nextChar]) {
      return true;
    }
  }
  return word1.length <= word2.length;
}

function isAlienSorted(words, order) {
  const alphabet = order.split('')
  const lookup = alphabet.reduce((object, item, i) => {
    object[item] = i;
    return object;
  }, {});
  for (let i = 0; i < words.length - 1; i++) {
    const word = words[i];
    const nextWord = words[i + 1];
    // handle first word shorter
    if (!isInOrder(word, nextWord, lookup)) {
      return false;
    }
  }
  return true;
}


// MY ATTEMPT LIVE
// function check(words, alphabet) {
//   // convert alphabet to hashmap
//   const lookup = alphabet.reduce((object, item, i) => {
//     object[item] = i
//     return object;
//   }, {});

//   //  ["cat", "ca", "bat", "tab"]
//   "cat" "ca"
//   "ca" "cat"


//   for (let i = 0; i < words.length; i++) {
//     let word = word[i];
//     let nextWord = word[i + 1];
//     // handle first word shorter
//     for (let j = 0; j < word.length; j++) {
//       let char = word[j];
//       let nextChar = nextWord[j];
//       if (char == nextWord[j]) {
//         // move on
//         continue;
//       } else {
//         // compare chars, use alphabet indices to decide if they're in correct order
//         if (lookup[char] < lookup[nextChar]) {
//           // we're good
//           break;
//         } else {
//           // violation found
//           return false;
//         }
//       }

//     }

//   }

//   return true;

// }


// 2. Write serialization and de - serialization methods for a binary tree

// convert to string
// convert from string back to binary tree
{
  val: integer
  left: { }
  right: { }
}

JSON.stringify
JSON.parse


// input root

1
2 3

1
2
3

// type Node
// return String

function serialize(rootNode) {
  //[
  //    1, null, 2, null, 3
  //]
  const arr = [1, 2, 3]

  //'1|2|3'

  //'1|n|2|n|3'


  const q = [root];

  // BFS

  while (q.length) {
    let len = q.length
    //while(len--) {         
    let node = q.shift();
    arr.push(node.val)
    if (node.left) q.push(node.left);
    // else null
    if (node.right) q.push(node.right);
    // else null

    // }
    // pull first

    // insert into array layer by layer


  }




  /*while (node) {
      node = root;
      arr.push(node.left)
      arr.push(node.right)
      
      node = node.left;
      node = node.right;
  }*/
}

// type string
// return Node
function deserialize(serializedTree) {
  // how would rebuild the tree
  // root
  // what left is
  // right is

  //'1 2 3'

  //'1|n|2|n|3'
  const root = null;

  serializedTree.split('|').forEach(el => {
    if (!root) root = new Node(el)
    // assign left child
    i + 1
    // assign right child
    i + 2
  }
}

1. Two traversals-- PRe / Port - order traversal + Inorder traversal-- - No need to remember NULL children
2. BFS - remember the null children
3. Pre / Post order traversal + with remembering NULL children
                                    
 def serialize(self, root):
if not root:
  return ["#"]
res = [str(root.val)]
res.extend(self.serialize(root.left))
res.extend(self.serialize(root.right))
return res
     
  def deserializeHelper(self, data, i):
if (i >= len(data)) or(data[i] == "#"):
return None, i + 1
node = TreeNode(int(data[i]))
node.left, i = self.deserializeHelper(data, i + 1)
node.right, i = self.deserializeHelper(data, i)
return node, i
 
  def deserialize(self, data):
root, v = self.deserializeHelper(data, 0)
return root




