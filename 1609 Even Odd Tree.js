//  Solution: 1

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isEvenOddTree = function (root) {
  const results = [];
  dfs(root, 0, results);
  console.log(results);
  for (let i = 0; i < results.length; i++) {
    if (i % 2 === 0) {
      if (!checkStrictlyIncreasing(results[i])) return false;
      if (!results[i].every((n) => n % 2 > 0)) return false;
    } else {
      // results[i].every(n => n % 2 === 0)
      if (!checkStrictlyDecreasing(results[i])) return false;
      if (!results[i].every((n) => n % 2 === 0)) return false;
    }
  }
  return true;
};

var dfs = function (node, level, results) {
  if (!node) return;
  if (results[level]) {
    results[level].push(node.val);
  } else {
    results[level] = [node.val];
  }
  dfs(node.left, level + 1, results);
  dfs(node.right, level + 1, results);
};

var checkStrictlyIncreasing = function (array) {
  let result = true;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] >= array[i + 1]) {
      result = false;
      break;
    }
  }
  return result;
};

var checkStrictlyDecreasing = function (array) {
  let result = true;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] <= array[i + 1]) {
      result = false;
      break;
    }
  }
  return result;
};
