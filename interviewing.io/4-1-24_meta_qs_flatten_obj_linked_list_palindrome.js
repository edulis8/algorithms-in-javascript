/*
Given a nested dict:

key1: {
    a: 1
    b: 2
}

return a flattened dictionary where the key is the composite of the nested keys 

output:

{
    key1.a: 1,
    key1.b: 2
}

input: JS object, nested
output: JS object, flat, key/values, just primitives
constraints: happy path



{
  key1: {
      a: {
        x: 1
        y: 2
      }


      b: 2
  }
  key2: 5,
  key3: {
    v: 99
  }
}
{
  key1.a.x: 1,
  key1.b: 2,
  key2: 5 // already flat
  key3.v: 99
}

// append together all nested keys, give them the last primitive value
*/
// COPILOT:
function flattenDict(input) {
  let result = {};
  helper(input, "");
  return result;

  function helper(input, slate) {
    Object.keys(input).forEach((key) => {
      let newKey = slate ? `${slate}.${key}` : key;
      if (
        typeof input[key] === "object" &&
        input[key] !== null &&
        !Array.isArray(input[key])
      ) {
        helper(input[key], newKey);
      } else {
        result[newKey] = input[key];
      }
    });
  }
}

let nestedDict = {
  key1: {
    a: { x: 1 },
    b: 2,
  },
  key2: 5,
  key3: {
    v: 99,
  },
};

console.log("flattenDict**:", flattenDict(nestedDict));

// ME, LIVE:
// for each item in our input
// if object:
// take the key and append to a string
// recurse
// if not (primitive):
// base case
// take that string, put it in the output object, as key with value of the primitive
function solution(input) {
  const output = {};
  // todo build up a string from keys
  // Object.keys(input).forEach((key) => {
  //   if (typeof input[key] === "object" && !Array.isArray(input[key])) {
  //     const [slate, primitive] = helper(input[key], key);
  //     output[slate] = primitive;
  //   } else {
  //     output[key] = input[key];
  //   }
  //   // is a primitive
  //   // newString += key
  // });
  helper(input, "");

  return output;

  function helper(dict, slate) {
    const dictKeys = Object.keys(dict);
    for (let i = 0; i < dictKeys.length; i++) {
      const dictKey = dictKeys[i];
      const newSlate = slate === "" ? dictKey : slate + ("." + dictKey);
      if (typeof dict[dictKey] === "object" && !Array.isArray(dict[dictKey])) {
        // console.log('dictKey abouot to recurse: ', dictKey)
        helper(dict[dictKey], newSlate);
      } else {
        const primitive = dict[dictKey];
        output[newSlate] = primitive;
      }
    }
  }
}

let input = {
  key1: {
    a: 1,
    b: 2,
  },
};
input = {
  key1: {
    a: { x: 1 },
    b: 2,
  },
  key2: 5,
  key3: {
    v: 99,
  },
};
const res = solution(input);
console.log("solution**", { res });

// output = {
//   key1.a: 1,
//   key1.b: 2
// }

// {
//   key1: {
//       a: {
//         x: 1
//         y: 2
//       }

//       b: 2
//   }
//   key2: 5,
//   key3: {
//     v: 99
//   }
// }
// {
//   key1.a.x: 1,
//   key1.b: 2,
//   key2: 5 // already flat
//   key3.v: 99
// }

// Given a singly linked linked list, determine if it is a palindrome.
// Constant space, linear time

// given a singly linked list, determine if it is a palindrome.
// constraint: constant space, linear time

// [a] -> [c] <- [a]
//         ^ ^

// keep one pointer at beginning
// run another point to the end
// compare.
//

// [a] <= [c] <= [a]
//

// entry: head
// brute: collect, reverse, compare

// start at head
// keep a counter
// get to end
// divide counter by 2 to get middle
// start at head again
// go to middle
// after middle reverse the list
// now you're at end

// function solution(head) {
//   let counter = 0;
//   let curr = head;
//   while (curr.next) {
//     counter++;
//     curr = curr.next;
//   }

//   let middle = counter/2;
//   let counter2 = 0;

//  //[a] -> [c] -> [a]
//        //  p     curr
//   while (curr.next) {
//     counter2++;
//     curr = curr.next;
//     let prev; // c
//     let oldNext; // a
//     if (counter2 >= middle) {
//       // start reversing
//       prev = curr; // a ()
//       oldNext = curr.next; // null (middle's next)

//       if (counter2 === middle) continue;

//       curr.next = prev; // c
//       curr = oldNext; // need to move ->
//     }

//   }

// }

//   // Constant space, linear time
//   class ListNode {
//     constructor(val) {
//       this.val = val;
//       this.next; //= //<ListNode>
//     }
//   }

// COPILOT
// solution for linked list palindrome
// fast and slow pointers

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val; // Assign the value of the node
  this.next = next === undefined ? null : next; // Assign the next node
}

// Function to check if a linked list is a palindrome
function isPalindrome(head) {
  let slow = head; // Slow pointer, moves one step at a time
  let fast = head; // Fast pointer, moves two steps at a time
  let prev;
  let temp; // Variables to help reverse the first half of the list

  // Loop through the list
  while (fast && fast.next) {
    fast = fast.next.next; // Move the fast pointer two steps
    temp = slow; // Save the current node
    slow = slow.next; // Move the slow pointer one step
    temp.next = prev; // Reverse the next pointer of the current node
    prev = temp; // Move the prev pointer one step
  }

  // If the list has an odd number of nodes, skip the middle node
  if (fast) {
    slow = slow.next;
  }

  // Compare the reversed first half with the second half
  while (slow) {
    if (slow.val !== prev.val) return false; // If the values don't match, it's not a palindrome
    slow = slow.next; // Move to the next node in the second half
    prev = prev.next; // Move to the next node in the reversed first half
  }

  // If all the values matched, it's a palindrome
  return true;
}

// Create a linked list
let list = new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1))));

// Check if the linked list is a palindrome
console.log(isPalindrome(list)); // Outputs: true
