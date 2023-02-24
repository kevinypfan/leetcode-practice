/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    const counter = {}

    nums.forEach(n => counter[n] = counter[n] ? counter[n] + 1 : 1)

    return Object.keys(counter).find(key => counter[key] === 1)
};