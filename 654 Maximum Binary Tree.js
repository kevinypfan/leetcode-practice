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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  const maxn = Math.max(...nums);
  const maxi = nums.indexOf(maxn);

  var l = nums.slice(0, maxi);
  var r = nums.slice(maxi + 1, nums.length);

  let root = new TreeNode(maxn);

  recursive(l, root, "l");
  recursive(r, root, "r");

  return root;
};

const recursive = (nums, node, side) => {
  console.log({ nums, node, side });
  if (nums.length <= 0) return;
  const maxn = Math.max(...nums);
  const maxi = nums.indexOf(maxn);

  if (side === "l") {
    node.left = new TreeNode(maxn);
  } else if (side === "r") {
    node.right = new TreeNode(maxn);
  }

  const l = nums.slice(0, maxi);
  const r = nums.slice(maxi + 1, nums.length);

  if (side === "l") {
    recursive(l, node.left, "l");
    recursive(r, node.left, "r");
  }

  if (side === "r") {
    recursive(l, node.right, "l");
    recursive(r, node.right, "r");
  }
};

//  Solution: 2

var constructMaximumBinaryTree = function (nums) {
  if (nums.length == 0) {
    return null;
  }

  if (nums.length == 1) {
    return new TreeNode(nums[0]);
  }

  let maxIndex = getMaxIndex(nums);
  let maxVal = nums[maxIndex];
  let rootNode = new TreeNode(maxVal);
  rootNode.left = constructMaximumBinaryTree(nums.slice(0, maxIndex));
  rootNode.right = constructMaximumBinaryTree(
    nums.slice(maxIndex + 1, nums.length)
  );

  return rootNode;
};
var getMaxIndex = function (arr) {
  // just a utility function for getting the max index.
  let maxIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[maxIndex]) {
      maxIndex = i;
    }
  }
  return maxIndex;
};
