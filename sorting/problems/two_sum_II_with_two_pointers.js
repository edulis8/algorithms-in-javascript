function twoSum(numbers: number[], target: number): number[] {
  // two pointers!!
  let l = 0;
  let r = numbers.length - 1;

  while(l < r) {
      if (numbers[l] + numbers[r] === target) {
          return [l + 1, r + 1]
      } else if (numbers[l] + numbers[r] > target) {
          r -= 1;
      } else {
          l += 1;
      }
  }
  
};