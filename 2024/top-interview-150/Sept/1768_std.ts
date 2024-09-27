const mergeAlternately = (word1: string, word2: string): string => {
  const wordLonger = Math.max(word1.length, word2.length)
  let result = ''

  for (let i = 0; i < wordLonger; i++) {
    result += (word1[i] ?? '') +  (word2[i] ?? '')
  }

  return result
}

console.log(mergeAlternately('Hello', 'World'))