// UNOIN MEANS all values from one array OR other array
// MUST BE SORTED
// NO DUPS
// TWO POINTER PASS, GENERAL VERSION... YOU CAN DO 3 POINTER or N-pointer PASSES. You push the value that is smaller than the other values.
i = 0
j = 0
while (arrayA[i] < arrayA.length && arrayB[j] < arrayB.length) {
  if (arrayA[i] === arrayB[j]) {
    // push to result array
    result.push(array[i])
    i++;
    j++;
  } else if (arrayA[i] <= arrayB[j]) {
    i++;
  } else {
    j++;
  }
}
/*
"Union of Two Arrays" (this is a set of non-duplicates)
- use a Set
- use two pointer pass then use a "gather phase"
*/
// GATHER PHASE EXAMPLE
while (i < arrayA[i].length) {
  res.push(arr[i]);
  i++;
}
while (j < arrayB[i].length) {
  res.push(arr[j]);
  j++
}

// seems like you could just put both into a set and sort but that would be nlogn