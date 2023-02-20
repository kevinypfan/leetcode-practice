/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function (arr, start) {
  const visited = new Set();
  return dfs(arr, start, visited);
};

var dfs = function (arr, index, visited) {
  if (index < 0 || index >= arr.length) return false;
  if (arr[index] === 0) return true;
  if (!visited.has(index)) {
    visited.add(index);
    return (
      dfs(arr, index + arr[index], visited) ||
      dfs(arr, index - arr[index], visited)
    );
  }
  return false;
};
