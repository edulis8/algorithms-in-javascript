/**
 * 
 * build frequency map for target
 * 
 build frequency maps for stickers


 decrement freqs for target by freqs in stickers

 you can use the same word many times, you can use the "t" and "h" in "with" 2x for example

 memoize to not repeatedly create maps you've already created
 just access memo map to increment our sticker count
 * 
 * 
 * 
 * 
 * @param {string[]} stickers
 * @param {string} target
 * @return {number}
 */
var minStickers = function (stickers, target) {
  //const memo = {};
  const targetFreqMap = createFreqMap(target);


  const result = solve(targetFreqMap)
  if (result == -Infinity) {
    return -1;
  }
  
  return result;


  function solve(freqs) {
    let freqHashString = '';

    for (const key in freqs) {
      freqHashString += key + ':' + freqs[key];
    }

    if (!freqHashString) return 0; // this isn't an answer
   // if (memo[freqHashString]) return memo[freqHashString];

    let answer = Infinity;
    for (const sticker of stickers) {
      const stickerFreqs = createFreqMap(sticker);
      // make sure at least one char in sticker that is also inside the freqs 
      const charInFreqs = [...sticker].some(char => freqs[char]);
      //memo[freqHashString] = stickerFreqs;

      if (charInFreqs) {
        const newFreq = subtractFreqs(freqs, stickerFreqs);
        // add one, since calling recursively, we considered this current sticker we're on. 
        // Helps in case target is "thehat" and one sticker is "thehat"
        answer = Math.min(answer, solve(newFreq) + 1);
      }
    }
    //memo[freqHashString] = answer;

    return answer;
  }

  function subtractFreqs(targetFreq, stickerFreq) {
    const newFreq = {};
    for (const char in targetFreq) {
      let freq = targetFreq[char];
      stickerFreq = stickerFreq[char] || 0;
      let diff = freq - stickerFreq;
      if (diff > 0) {
        newFreq[char] = diff;
      }
    }
    return newFreq;
  }

  function createFreqMap(string) {
    const map = {};
    for (var i = 0; i < string.length; i++) {
      let str = string[i];
      map[str] = map[str] || 0;
      map[str]++;
    }
    return map;
  }
}

// hash map of target with freqs
// decrement freqs when those letters seen in stickers
// each sticker also has a freq hash map
// we reducd its frequency when using its chars
// we memoize
// we delete characters with 0 from hash map