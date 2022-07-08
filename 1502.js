/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    const sortedArr = arr.sort((a,b) => a - b)

    const temp = sortedArr[1] - sortedArr[0]

    for (let i = 1; i < sortedArr.length - 1; i++) {
        if (temp !== (sortedArr[i+1] - sortedArr[i])) {
            return false
        }
    }
    return true
};

console.log(canMakeArithmeticProgression([2,4,1]))