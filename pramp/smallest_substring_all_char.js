/*

https://www.youtube.com/watch?v=jSto0O4AJbM


We scan the input string str from left to right while maintaining two indices - headIndex and tailIndex.

At each iteration, we examine a temporary substring 
[str.charAt(headIndex),str.charAt(headIndex+1),..., str.charAt(tailIndex)] 
and keep a copy of the shortest valid substring we’ve seen so far. 
Said differently, we keep incrementing tailIndex until the above substring contains every unique character in arr.

If the size of the resulting substring equals to arr.length
then we return it since by definition there can’t be a shorter valid substring
(otherwise, it’ll be missing 1 or more unique characters from arr).

Once we found a valid substring, we increment headIndex as long the substring remains valid. 

At every increment we also check if the current valid substring is shorter than the previously kept one.
If it is, we update result to be the current substring.

We keep repeating the above steps in a loop until we either reach the 
end of the input string str or return the shortest valid substring, whichever comes first.

To examine the validity of str substrings we use 2 counters:

uniqueCounter (Integer) - the number of unique characters of arr that our current substring contains.
countMap (Map/Hash Table) - the number of occurrences of each character of arr in our current substring.

*/



// luke@lukefernandez.io





///////////////////

function getShortestUniqueSubstring(arr, str) {
  const set = new Set(arr);
  let headIndex = 0;
  let tailIndex = arr.length;
  const countMap = {};
  let uniqueCounter = 0;
  
  let substr = '';
  let shortest = ''
  for (const val of arr) {
    countMap[val] = countMap[val] || 0;
    countMap[val]++
  }
        
  
  while (tailIndex < str.length) {
    let curr = str[tailIndex];
    
   
    substr += curr;
    if (set.has(curr)) {
      uniqueCounter++;
    }
    if (uniqueCounter == arr.length) {
      shortest = substr;
    }
    if (shortest.length === arr.length) return shortest;
    
    // while still valid, move the headindex to the right
    // Once we found a valid substring, we increment headIndex as long the substring remains valid. 
    while (headIndex < tailIndex) {
        // is substr between h and t valid?
     }
   
    /// if counter == arr.length, foiund valid substring
    tailIndex++
  }
    
}

// that finds the smallest substring of str containing all the characters in arr. 
input:  arr = ['x','y','z'], str = "xyyzyzyx"

output: "zyx"






function getShortestUniqueSubstring(arr, str):
    headIndex = 0
    result = ""
    uniqueCounter = 0
    countMap = new Map()

    # initialize countMap
    for i from 0 to arr.length - 1:
        countMap.setValueOf(arr[i], 0)

    # scan str
    for tailIndex from 0 to str.length - 1:
        # handle the new tail
        tailChar = str.charAt(tailIndex)

        # skip all the characters not in arr
        if (countMap.keyExists(tailChar) == false):
            continue
//// what if those chars are in min substring?

        tailCount = countMap.getValueOf(tailChar)
        if (tailCount == 0):
            uniqueCounter = uniqueCounter + 1

        countMap.setValueOf(tailChar, tailCount + 1)

        # push head forward
        while (uniqueCounter == arr.length):
            tempLength = tailIndex - headIndex + 1
            if (tempLength == arr.length):
                # return a substring of str from
                # headIndex to tailIndex (inclusive)
                return str.substring(headIndex, tailIndex)

            if (result == "" OR tempLength < result.length):
                # return a substring of str from
                # headIndex to tailIndex (inclusive)
                result = str.substring(headIndex, tailIndex)

            headChar = str.charAt(headIndex)

            if (countMap.keyExists(headChar)):
                headCount = countMap.getValueOf(headChar) - 1 // removing from map
                if (headCount == 0):
                    uniqueCounter = uniqueCounter - 1 // decrement the unique counter
                countMap.setValueFor(headChar, headCount) // update map with dec value

            headIndex = headIndex + 1 //

    return result
