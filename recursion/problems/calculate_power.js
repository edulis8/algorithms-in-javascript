function calculate_power(a, b) {
  // 2, 3
  // 2*2*2
  if (b === 0) {
      return 1;
  }
  return a * calculate_power(a, b - 1)
}