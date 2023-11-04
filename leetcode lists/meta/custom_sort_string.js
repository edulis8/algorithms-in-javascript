/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
  const map = s.split('').reduce((obj, item) => {
      obj[item] = obj[item] || '';
      obj[item] += item
      return obj;
  }, {})

  console.log(map)

  let result = '';
  for(let i = 0; i < order.length; i++) {
      const orderEl = order[i];
      if(map[orderEl]) {
          result += map[orderEl];
          delete map[orderEl];
      }
  }
  Object.values(map).forEach(el => {
      result += el;
  })

  return result;
};

// make a map of s with frequencies. frequencies stored as a: aa
// iterate over order
// if map has order[i]
// add to result freq times
// delete from map.
// continue to end of order
// append rest of map to result in any order


// all chars of order are unique
// but not s, i assume
// order and s aren't the same length
// if order < s, order s based on what is in order

// output is, in a diff order


// s - "abcd"
// 
// _ _ _ _
// one choice for each slot
// find char in s that matches first char in order, place first ... find char in s that matches 2nd, place 2nd

// OR

// find all permutations of s
// with logic - only allow an s char into 1st spot if


// make a map of s with frequencies. frequencies stored as a: aa
// iterate over order
// if map has order[i]
// add to result freq times
// delete from map.
// continue to end of order
// append rest of map to result in any order

// time: linear
// space: map + result string - linear