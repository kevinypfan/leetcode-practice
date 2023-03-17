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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const results = [];
  dfs(root, `${root.val}`, results);
  return results;
};

var dfs = (node, s, results) => {
  if (node.left === null && node.right === null) return results.push(s);

  if (node.left) dfs(node.left, s + "->" + node.left.val, results);
  if (node.right) dfs(node.right, s + "->" + node.right.val, results);
};
