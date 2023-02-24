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
 var inorderTraversal = function(root) {
    const stack = []
    const results = []
    let cur = root

    while(cur || stack.length !== 0) {
        if (cur) {
            stack.push(cur)
            cur = cur.left
        } else {
            const node = stack.pop()
            results.push(node.val)
            cur = node.right
        }
    }

    return results
};
