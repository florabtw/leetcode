function ListNode(val, next) {
 this.val = val;
 this.next = next;
}

var addTwoNumbers = function(l1, l2) {
  const toInteger = list => {
    const value = list.val;
    const next = list.next;

    if (!next) return String(value);

    return toInteger(next) + String(value);
  };

  const toListNode = number => {
    const digits = String(number)
      .split('')
      .map(c => Number(c));

    return digits.reduce((list, d) => {
      return new ListNode(d, list);
    }, null)
  };

  const n1 = BigInt(toInteger(l1))
  const n2 = BigInt(toInteger(l2))

  return toListNode(n1 + n2);
};
