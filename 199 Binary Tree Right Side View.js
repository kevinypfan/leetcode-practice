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
 * @return {number[]}
 */
var rightSideView = function (root) {
  const reuslts = [];
  if (!root) return reuslts;
  const dfs = (node, level) => {
    if (!node) return;
    if (typeof reuslts[level] !== "number") reuslts[level] = node.val;
    dfs(node.right, level + 1);
    dfs(node.left, level + 1);
  };
  dfs(root, 0);

  return reuslts;
};
