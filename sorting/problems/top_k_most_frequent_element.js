
function implementation(arr, k) {
  // create a frequency table. value -> frequency

  // transform table into an array of tuples, sort that array based on the frequency,

  // take first 0 - (k-1) values from that array
  // n(logn)

  const frequencyTable = arr.reduce((table, value) => {
    table[value] = table[value] || 0;
    table[value]++
    return table;
  }, {});

  const arrayOfTuples = Object.entries(frequencyTable);


  arrayOfTuples.sort((a, b) => b[1] - a[1]);

  console.log(frequencyTable)
  console.log(arrayOfTuples)

  const returnArray = [];
  for (let i = 0; i < k; i++) {
    returnArray.push(Number(arrayOfTuples[i][0]));
  }
  return returnArray;
}


console.log('\n******************** OUTPUT ************\n');

// MAKE SURE TO UPDATE THIS:
const input = {
  "arr": [1, 2, 1, 2, 3, 1, 99, 99, 99, 99, 99],
  "k": 1
}
// output: [3,1]

let result = implementation(input.arr, input.k);
console.log('result:', result)

console.error('\n******************** ************\n')

