const longestSubstring = (
  string,
  seen = {},
  startIndex = 0,
  endIndex = 0,
  maxSize = 0
) => {
  const windowSize = endIndex - startIndex + 1;

  if (endIndex === string.length) return Math.max(windowSize - 1, maxSize);

  const endCharacter = string[endIndex];
  const hasSeenCharacter = seen[endCharacter] >= startIndex;

  if (hasSeenCharacter) {
    if (windowSize > maxSize) maxSize = windowSize - 1;

    startIndex = seen[endCharacter] + 1;
  }

  seen[endCharacter] = endIndex;

  return longestSubstring(string, seen, startIndex, endIndex + 1, maxSize);
};

var lengthOfLongestSubstring = function(s) {
  return longestSubstring(s);
};
