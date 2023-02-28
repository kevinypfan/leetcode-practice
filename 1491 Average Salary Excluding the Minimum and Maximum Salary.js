/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
  salary.sort((a, b) => a - b);
  salary.pop();
  salary.shift();
  const sum = salary.reduce((a, b) => a + b, 0);
  const avg = sum / salary.length;
  return avg.toFixed(5);
};
