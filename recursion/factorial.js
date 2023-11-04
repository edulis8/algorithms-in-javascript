function factorial(val) {
  if (val === 0) return 1;
  else {
    return val * factorial(val - 1);
  }
}

console.log('\n******************** OUTPUT ************\n');
let input = 4;
let result = factorial(input);
console.log('result:', result)
console.log('\n******************** ************\n')


