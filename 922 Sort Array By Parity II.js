// Solution 1:

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
  const results = [];

  while (nums.length > 0) {
    if (results.length % 2 === 0) {
      const idx = nums.findIndex((n) => n % 2 === 0);
      const val = nums[idx];
      nums.splice(idx, 1);
      results.push(val);
    } else {
      const idx = nums.findIndex((n) => n % 2 != 0);
      const val = nums[idx];
      nums.splice(idx, 1);
      results.push(val);
    }
  }

  return results;
};

// Solution 2:

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
  const even = [];
  const odd = [];
  const results = [];

  nums.forEach((n) => {
    if (n % 2 === 0) {
      even.push(n);
    } else {
      odd.push(n);
    }
  });

  even.forEach((n, idx) => {
    results.push(n);
    results.push(odd[idx]);
  });

  return results;
};
