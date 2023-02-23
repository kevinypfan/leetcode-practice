/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */

 const dfs = (arr, i, m, ta, k, ans) => {
    if (i > m) {
        if (ta.reduce((a,b) => a+b,0) == k) ans.push(ta)
        return
    }

    dfs(arr, i+1, m, ta, k, ans)

    dfs(arr, i+1, m, [...ta, arr[i]], k, ans)

}

var subarraySum = function(nums, k) {
    const ans = []
    dfs(nums, 0, nums.length - 1, [], k, ans)
    return ans.length
};

console.log(subarraySum([1,2,3], 3))