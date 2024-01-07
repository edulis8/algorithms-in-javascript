/**
 * @param {string[]} votes
 * @return {string}
 */
var rankTeams = function(votes) {
  if (votes.length === 1) return votes[0];
  const score = new Map(votes[0].split('').map(c => [c, new Array(votes[0].length).fill(0)]));
  for (s of votes) {
      for (let i = 0; i < s.length; i++) {
          score.get(s[i])[i]++;
      }
  }
  return votes[0].split('').sort((a,b) => {
      for (let i = 0; i < votes[0].length; i++) {
          if (score.get(a)[i] > score.get(b)[i]) return -1;
          if (score.get(a)[i] < score.get(b)[i]) return 1;
      }
      return a < b ? -1 : 1;
  }).join('');
};

// Example usage:
const votes1 = ["ABC","ACB","ABC","ACB","ACB"];
const result1 = rankTeams(votes1);
console.log(result1);  // Output: "ACB"

const votes2 = ["WXYZ","XYZW"];
const result2 = rankTeams(votes2);
console.log(result2);  // Output: "XWYZ"

const votes3 = ["ZMNAGUEDSJYLBOPHRQICWFXTVK"];
const result3 = rankTeams(votes3);
console.log(result3);  // Output: "ZMNAGUEDSJYLBOPHRQICWFXTVK"