/**
 * @param {number[]} nums
 * @return {number}
 */
 var findTheArrayConcVal = function(nums) {
    let result = 0
    while (nums.length !== 0) {
        if (nums.length > 1) {
            const f = nums.shift() 
            const l = nums.pop()

            result += +`${f}${l}`
        } else {
            result += nums.pop()
        }
    }

    return result
};