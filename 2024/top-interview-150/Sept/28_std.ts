const strStr = (haystack: string, needle: string): number => {
  for(let i = 0, j = needle.length; j<= haystack.length; i++, j++) {
      const word = haystack.substring(i,j)
      if(word === needle) {
          return i
      }
  }
  return -1
};
