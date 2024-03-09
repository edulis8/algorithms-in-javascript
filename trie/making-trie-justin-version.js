

// 139 Word Break

function wordBreak(s, wordDict) {

}


// good inputs to think about
// s = "leetcode"
// wordDict = [leet, lee, cod, tcode]

// 
function buildTrie(wordDict) {
  const trie = {};
  wordDict.forEach(word => {
    let node = trie;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      node[char] = node[char] || {};
      node = node[char];
    }
  node['*'] = '*'
  })
  return trie;
}
wordDict = ['leet', 'lee', 'cod', 'tcode']
const t = buildTrie(wordDict)
console.log(JSON.stringify(t, null, 2))