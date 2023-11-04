// function decodeVariations(s) {
//   const n = s.length;
//   const dp = new Array(n + 1);
//   dp[n] = 1;

//   for (let i = n - 1; i >= 0; i--) {
//     if (s[i] === '0') {
//       dp[i] = 0;
//     } else if (s[i] === '1') {
//       dp[i] = dp[i + 1] + dp[i + 2];
//     } else if (s[i] === '2') {
//       dp[i] = dp[i + 1];
//       if (i + 1 < s.length && s[i + 1] <= '6') {
//         dp[i] += dp[i + 2];
//       }
//     } else {
//       dp[i] = dp[i + 1];
//     }
//   }

//   return dp
// }

function decodeVariations(S) {
  let pre = 27, cur = 0;
  let first = 1, second = 1;

  for (let i = S.length - 1; i >= 0; i--) {
      let d = parseInt(S[i]);
      if (d === 0) {
          cur = 0;
      } else {
          cur = first;
          // pre represents the previously seen number S[i+1]
          // If d*10 + pre < 26 (and d != 0), it is valid to
          // write a letter that uses two digits of encoding length,
          // so we count 'second = dp[i+2]' in our current answer.
          if (d * 10 + pre < 27) {
              cur += second;
          }
      }

      pre = d;
      [first, second] = [cur, first];
  }

  return cur;
}


res = decodeVariations('1262')
console.log(res)