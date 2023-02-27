/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProduct = function(nums) {
    let result = 0
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const temp = (nums[i] - 1) * (nums[j] - 1)
            if (temp > result) {
                result = temp
            }
        }
    }
    return result
};
