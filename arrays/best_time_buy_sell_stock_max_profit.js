/**
 * @param {number[]} prices
 * @return {number}

 Time: Linear
 Space: Constant
 */
 var maxProfit = function (prices) {

  // decrease and conquer
  // looking at last item
  // do I increase the profit
  // given we are calculating max profit seen so far as we go thru the array

  let maxProfitSoFar = 0;
  let minPriceSoFar = prices[0];

  prices.forEach(price => {
      minPriceSoFar = Math.min(minPriceSoFar, price);

      currentPrice = price - minPriceSoFar;

      maxProfitSoFar = Math.max(currentPrice, maxProfitSoFar);
  })

  return maxProfitSoFar;
};

// ignore 7 bc 1 is smaller
// maxProfitSeen: 4 (5-1)
// minValue: 1

// is 6 - 1 > 4
// update to 5
// [7,1,5,3,6,4]

// maxProfit: 98
// minValue: 2
// 
// localProfit: 99 (=curr-minValue)
// minValue: 1
// [2, 100,_1_,5,3,_6_,4]

// return max profit
// max has to be after min

//  [7,6,4,3,1]


