const longestCommonPrefix = (strs) => {
  if (strs.length === 0) {
    return "";
  }

  const base = strs[0];
  for (let i = 0; i < base.length; i++) {
    for (const word of strs.slice(i)) {
      if (i === word.length || word[i] !== base[i]) {
        return base.slice(0, i);
      }
    }
  }

  return base;
};

console.log(longestCommonPrefix(["flower", "flow", "flight", "flan"]));