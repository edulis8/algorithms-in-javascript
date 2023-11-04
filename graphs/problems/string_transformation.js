/*

Shortest String Transformation Using A Dictionary
You are given a dictionary called words and two string arguments called start and stop. All given strings have equal length.

Transform string start to string stop one character per step using words from the dictionary. For example, "abc" → "abd" is a valid transformation step because only one character is changed ("c" → "d"), but "abc" → "axy" is not a valid one because two characters are changed ("b" → "x" and "c" → "y").

You need to find the shortest possible sequence of strings (two or more) such that:

First string is start.
Last string is stop.
Every string (except the first one) differs from the previous one by exactly one character.
Every string (except, possibly, first and last ones) are in the dictionary of words.
Example One
{
"words": ["cat", "hat", "bad", "had"],
"start": "bat",
"stop": "had"
}
Output:

["bat", "bad", "had"]
OR

["bat", "hat", "had"]



This problem can be solved using BFS.

From current string, when we want to update neighbour strings (strings having different character at exactly one position), there are two methods possible:

BRUTE FORCE
1) Visit every string in words array and check. There are no_of_words strings in words array and each has length length. So, 
for one string to find neighbour strings, time taken will be O(no_of_words * length). And we will find neighbours for O(no_of_words) strings, hence time complexity of this solution will be O(no_of_words2 * length). When no_of_words is big, this solution will time out.

2) For current string we will generate all possible strings having different character at exactly one position, and we will update strings that are in words array i.e. they are neighbours. 
We can use hashmap to check if any string is in words array or not in O(length) time, instead of O(no_of_words * length) time using simple array search.

Now there can be O(26 * length) different strings having different character at exactly one position. 
And for each string we will spend O(length) time to check if it is in words array or not. 
We will find neighbours for O(no_of_words) strings, hence time complexity of this solution will be O(no_of_words * length2 * 26).
 Now when string length is high, this solution will time out.

So, we can combine both methods in one solution to bring down time complexity to O((no_of_words * length * min((no_of_words, 26 * length)). 
When no_of_words <= 26 * length use first method and when no_of_words > 26 * length use the second method!

Have a look at the solution provided by us, it contains necessary comments to understand the solution.
*/