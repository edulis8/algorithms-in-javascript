/*

3 Sum Smaller
Given a list of numbers, count the number of triplets having a sum less than a given target.

Example One
{
"target": 4,
"numbers": [5, 0, -1, 3, 2]
}
Output:

2
{numbers[1], numbers[2], numbers[3]} and {numbers[1], numbers[2], numbers[4]} are the triplets having sum less than 4.

Asymptotic complexity in terms of length of the input list `n`:
* Time: O(n * n).
* Auxiliary space: O(1).
* Total space: O(n).
*/


// target: 4        running total-> 2
// [-1, 0, 2, 3, 5]
//  0  1   2   3 4 

// low 2
// high 4 


function count_triplets(target, numbers) {
  // two pointer pass to zero in on two numbers whos sum, plus current element, is < target
  numbers.sort((a,b) => a - b);
  let result = 0
  numbers.forEach((curr, i) => {
    let low = i + 1;
    let high = numbers.length - 1;

    while (low < high) {
      let sum = curr + numbers[low] + numbers[high];
      if (sum < target) {
        result += high - low; // all nums between high and low produce answers
        low++;
      } else {
        high--;
      }
    }
  })
  return result;
}







function count_triplets(target, numbers) {
  // presort bc we can search a sorted array easier, possibly using two pointer pass
  numbers.sort((a,b) => a - b);

  n = numbers.length;
  result = 0;
  // out loop through numbers
  numbers.forEach(el, i => {
    let low = i + 1; // lower bound after first element
    let high = n - 1; // higher bound is last index
    while (low < high) {
      // zero in to searched elements
      tripletSum = el + numbers[low] + numbers[high]; // element is added to lower bound and upper bound
      if (tripletSum < target) {
        result += high - low; // because sorted, anything between high and low will be an answer
        low++;
      } else {
        high--; // high must be too high, lets move lower
      }
    }
  })
  return result;
}




/*
Asymptotic complexity in terms of length of the input list `n`:
* Time: O(n * n).
* Auxiliary space: O(1).
* Total space: O(n).
*/
int count_triplets(int target, vector<int> &numbers) {

  sort(numbers.begin(), numbers.end());
  int n = numbers.size();
  int result = 0;

  for (int i = 0; i < n; i++) {
      int low = i + 1, high = n - 1;
      while (low < high) {
          int triplet_sum = numbers[i] + numbers[low] + numbers[high];
          if (triplet_sum < target) {
              result += high - low;
              low++;
          }
          else {
              high--;
          }
      }
  }
  return result;
}
