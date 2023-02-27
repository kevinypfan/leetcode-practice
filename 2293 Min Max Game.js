// Solution 1:

/**
 * @param {number[]} nums
 * @return {number}
 */
var minMaxGame = function (nums) {
  while (nums.length > 1) {
    let temp = [];
    for (let i = 0; i < nums.length / 2; i++) {
      console.log([nums[i * 2], nums[i * 2 + 1]]);
      if (i % 2 === 0) {
        temp.push(Math.min(nums[i * 2], nums[i * 2 + 1]));
      } else {
        temp.push(Math.max(nums[i * 2], nums[i * 2 + 1]));
      }
    }
    nums = temp;
  }
  return nums[0];
};
