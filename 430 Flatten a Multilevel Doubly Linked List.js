// solution 1

/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
  const results = [];
  dfs(head, results);
  for (let i = 0; i < results.length - 1; i++) {
    results[i].next = results[i + 1];
    results[i].child = null;
    results[i + 1].prev = results[i];
  }
  return results[0];
};

var dfs = function (node, results) {
  if (!node) return;
  results.push(node);
  dfs(node.child, results);
  dfs(node.next, results);
};

// solution 2

/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
  const stack = [];
  dfs(head, stack);
  return head;
};

var dfs = function (node, stack) {
  if (!node) return;

  if (node.child) {
    if (node.next) stack.push(node.next);
    const clildNode = node.child;
    clildNode.prev = node;
    node.next = clildNode;
    node.child = null;
  }

  if (!node.next && stack.length > 0) {
    const stackNode = stack.pop();
    node.next = stackNode;
    stackNode.prev = node;
  }

  dfs(node.next, stack);
};
