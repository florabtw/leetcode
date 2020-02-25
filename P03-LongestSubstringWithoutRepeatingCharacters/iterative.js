var lengthOfLongestSubstring = function(string) {
  let seen = {};
  let startIndex = 0;
  let endIndex = 0;
  let maxSize = 0;

  for (let endIndex = 0; endIndex < string.length; endIndex++) {
      const windowSize = endIndex - startIndex + 1;

      const endCharacter = string[endIndex];
      const hasSeenCharacter = seen[endCharacter] >= startIndex;

      maxSize = Math.max(windowSize - Number(hasSeenCharacter), maxSize);

      if (hasSeenCharacter) {
            startIndex = seen[endCharacter] + 1;
          }

      seen[endCharacter] = endIndex;
    }

  return maxSize;
};
