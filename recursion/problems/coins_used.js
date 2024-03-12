
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 * 
 * Good attempt here.
 * Many more versions below
 */
var coinChange = function (coins, amount) {

    // you don't want to redo work.
    // Key.         Value
    // arguments => result for those arguments.

    // How to add a cache without bothering to know anything about the code:
    // 1. Create the cache, outside the function.
    // 2. Check the cache before doing any work (within the function).
    // 3. Before returning, save the result in the cache.


    // 1. No amount means no coins.
    // 2. Consider each coin that we could give.
    // 3. Avoid coins that are too big or coins that lead to impossible situations.
    // 4. Keep the smallest number of coins.
    // 5. Add a cache.

    const memo = new Map();
    return helper(amount);

    function helper(amount) {
        if (amount === 0) {
            return 0;
        }
        if (memo.has(amount)) {
            return memo.get(amount)
        }

        let best = Infinity;
        for (let i = 0; i < coins.length; i++) {
            const coin = coins[i];

            if (coin > amount) continue;

            const coinsUsedGettingToEnd = helper(amount - coin);
            if (coinsUsedGettingToEnd < 0) {
                continue;
            }
            best = Math.min(best, coinsUsedGettingToEnd + 1) // plus the coin we just used
        }
        memo.set(amount, best);
        return best === Infinity ? -1 : best;
    }
};




// /**
//  * @param {number[]} coins
//  * @param {number} amount
//  * @return {number}

// THIS WORKS BUT DOES NOT PASS LEETCODE TESTS BC SLOW:
//  */
// var coinChange = function(coins, amount) {
//     let globalCounter = Infinity;
//     const memo = new Map();

//     helper(0, 0);

//     return globalCounter === Infinity ? -1 : globalCounter;
//     // subproblem, partial soln
//     function helper(runningAmount, numCoins) {
//         if (runningAmount === amount) {
//             globalCounter = Math.min(numCoins, globalCounter)
//         }

//         for (let i = 0; i < coins.length; i++) {
//             const coin = coins[i];
//             if (runningAmount + coin > amount) {
//                 continue;
//             }
//             helper(runningAmount + coin, numCoins + 1)
//         }
//     }
// };

// MEMOIZED SOLUTION:

function coinChange(coins, amount) {
  const cache = new Map();
  return helper(amount);

  // you don't want to redo work.
  // Key.         Value
  // arguments => result for those arguments.

  // How to add a cache without bothering to know anything about the code:
  // 1. Create the cache, outside the function.
  // 2. Check the cache before doing any work (within the function).
  // 3. Before returning, save the result in the cache.

  // 1. No amount means no coins.
  // 2. Consider each coin that we could give.
  // 3. Avoid coins that are too big or coins that lead to impossible situations.
  // 4. Keep the smallest number of coins.
  // 5. Add a cache.

  function helper(amount) {
    if (amount == 0) {
      return 0;
    }
    if (cache.has(amount)) {
      return cache.get(amount);
    }

    let bestCoinCount = Infinity;
    for (let i = 0; i < coins.length; i++) {
      const coin = coins[i];
      // avoid impossible situation
      if (coin > amount) continue;

      const remainingCoinCount = helper(amount - coin); // +1 to account for the coin I just used, but we do that below, so we can have the check below

      // avoid impossible situation
      if (remainingCoinCount < 0) {
        continue;
      }

      // found viable option
      const coinCount = 1 + remainingCoinCount; // +1 to account for the coin I just used

      bestCoinCount = Math.min(bestCoinCount, coinCount);
    }
    cache.set(amount, bestCoinCount);
    return bestCoinCount === Infinity ? -1 : bestCoinCount;
  }
}

var coinChange = function (coins, amount) {
  const memo = new Map();

  // Call the helper function with initial parameters
  const result = helper(amount);

  return result;

  function helper(runningAmount) {
    // base, we reached an answer, no additional coins used.
    if (runningAmount === 0) {
      return 0;
    }

    if (memo.has(runningAmount)) {
      return memo.get(runningAmount);
    }

    let minCoinsUsed = -1;

    for (let i = 0; i < coins.length; i++) {
      const coin = coins[i];
      if (coin > amount) continue;
      if (runningAmount - coin < 0) continue;
      const additionalCoinsUsed = helper(runningAmount - coin);
      if (additionalCoinsUsed < 0) continue;

      if (minCoinsUsed < 0 || additionalCoinsUsed + 1 < minCoinsUsed) {
        minCoinsUsed = additionalCoinsUsed + 1;
      }
    }

    // Store the result in the memoization map
    memo.set(runningAmount, minCoinsUsed);
    // console.log(memo)
    return minCoinsUsed;
  }
};
