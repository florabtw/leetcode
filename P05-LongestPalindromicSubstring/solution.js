var longestPalindrome = function(s) {
  const expandPalindrome = (startIndex, endIndex) => {
    if (startIndex === 0) return s.slice(startIndex, endIndex + 1);
    if (endIndex === s.length - 1) return s.slice(startIndex, endIndex + 1);

    const beforeChar = s[startIndex - 1];
    const afterChar = s[endIndex + 1];

    if (beforeChar === afterChar)
      return expandPalindrome(startIndex - 1, endIndex + 1);

    return s.slice(startIndex, endIndex + 1);
  }

  const palindromes = [];

  for(let i = 0; i < s.length; i++) {
    palindromes.push(expandPalindrome(i, i));

    if (s[i] === s[i+1]) palindromes.push(expandPalindrome(i, i + 1));
  }

  return palindromes.reduce((max, p) => max.length > p.length ? max : p, '');
};
