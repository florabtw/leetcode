const MIN_INTEGER = Math.pow(2, 31) * -1;
const MAX_INTEGER = Math.pow(2, 31) - 1;

var reverse = function(x) {
  const reverseInteger = (reversed, remainder) => {
    if (remainder < 1) return reversed;

    const swap = remainder % 10;

    const nextReversed = reversed * 10 + swap;
    const nextRemainder = Math.floor(remainder / 10);

    return reverseInteger(nextReversed, nextRemainder);
  };

  const isNegative = x < 0;
  const reversed = reverseInteger(0, Math.abs(x));

  const answer = isNegative ? -1 * reversed : reversed;

  if (answer < MIN_INTEGER) return 0;
  if (answer > MAX_INTEGER) return 0;

  return answer;
};
