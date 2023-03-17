/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

//  Solution: 1

var reverseList = function (head) {
  const nodes = [];

  let cur = head;

  while (cur) {
    nodes.push(cur);
    cur = cur.next;
  }

  cur = null;

  while (nodes.length != 0) {
    const node = nodes.shift();
    node.next = cur;
    cur = node;
  }

  return cur;
};

//  Solution: 2

var reverseList = function (head) {
  let current = head;
  let prev = null,
    next = null;
  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};
