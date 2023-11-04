/**
 * @param {number[]} w
 */
var Solution = function (w) {
  // build a cumulative sum array
  this.w = [];
  this.total = 0;
  // build a running total of the numbers
  w.forEach(weight => {
    this.total += weight; // cumulative sum
    this.w.push(this.total); // store in this.w
  })
};

/**
* @return {number}
*/
Solution.prototype.pickIndex = function () {
  const random = _getRandomIntInclusive(1, this.total); // pretend this is a lib function. 
  for (let i = 0; i < this.w.length; i++) {
    if (random <= this.w[i]) {
      return i;
    }
  }
};

function _getRandomIntInclusive(min, max) {
  // Generates a random integer between min (inclusive) and max (inclusive)
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
* Your Solution object will be instantiated and called as such:
* var obj = new Solution(w)
* var param_1 = obj.pickIndex()
*/


// input:
// [1,3]

// 0: 1/4 times
// 1: 3/4 times

// build a cumulative sum
// [1,4]
// randomly gen a number between 1 and 4
// and iterate, hey if this random number is <= current element's value, return its index.


// [10,20,30]
// 0: 1/6 or 17%
// 1: 2/6 or 33%
// 2: 3/6 or 50%

// cumulative array
// [10, 30, 60]
// gen random number between 1 and 60
// the spread between the numbers creates the probablity "window"
// 1/60*10 = .17 -> this percent chance of random number 1->60 being <=10
// 1/60*20 = .33 -> ...
// 1/60*30 = .5