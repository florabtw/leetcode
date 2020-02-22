function ListNode(val, next) {
 this.val = val;
 this.next = next;
}

var addTwoNumbers = function(node1, node2, remainder = false) {
  if (!node1 && !node2) return remainder ? new ListNode(1, null) : null;

  const next1 = node1 ? node1.next : null;
  const next2 = node2 ? node2.next : null;

  const val1 = node1 ? node1.val : 0;
  const val2 = node2 ? node2.val : 0;

  const sum = val1 + val2 + (remainder ? 1 : 0);
  const digit = sum % 10;
  const hasRemainder = sum / 10 >= 1;

  return new ListNode(digit, addTwoNumbers(next1, next2, hasRemainder));
};
