/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getStrongest = function (arr, k) {
  const m = getMedian(arr);

  arr.sort((a, b) => {
    if (Math.abs(a - m) === Math.abs(b - m)) {
      return b - a;
    }
    return Math.abs(b - m) - Math.abs(a - m);
  });

  return arr.slice(0, k);
};

var getMedian = function (arr) {
  arr.sort((a, b) => a - b);
  return arr[Math.floor((arr.length - 1) / 2)];
};
