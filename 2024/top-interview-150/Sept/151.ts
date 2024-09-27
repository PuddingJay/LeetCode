const reverseWords = (s: string): string => {
  return s.trim().split(' ').filter( a=> a).reverse().join(' ')
}

console.log(reverseWords("a good   example"));