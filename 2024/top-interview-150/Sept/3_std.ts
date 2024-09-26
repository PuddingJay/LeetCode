const lengthOfLongestSubstring = (s: string): number => {
  let set = new Set()
  let left = 0
  let right = 0
  let max = 0

  while (right < s.length) {
    if (set.has(s[right])) {
      set.delete(s[left])
      left++
    } else {
      set.add(s[right])
      right++
    }
      max=Math.max(max, set.size)
  }
  return max
}

console.log(lengthOfLongestSubstring('abcabcbb'))