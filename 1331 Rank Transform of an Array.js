/**
 * @param {number[]} arr
 * @return {number[]}
 */
 var arrayRankTransform = function (arr) {
    const set = new Set(arr)
    const sortedArr = Array.from(set).sort((a,b) => a-b)
    const rankMap = {}
    sortedArr.forEach((n, i) => rankMap[n] = i + 1)
    return arr.map(n => rankMap[n])
};