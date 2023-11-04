/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let larger;
  let smaller
  if (num1.length > num2.length) {
    larger = num1;
    smaller = num2;
  } else {
    smaller = num1;
    larger = num2;
  }

  let result = 0;
  for (let i = larger.length - 1; i >= 0; i--) {
    const smallerNum = Number(smaller[i]) || 0;
    result += Number(larger[i]) + smallerNum;
  }

  return result.toString();
  // larger = "123"
  // smaller = "11"
};