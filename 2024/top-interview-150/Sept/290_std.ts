const wordPattern = (pattern: string, s: string): boolean => {
  const words = s.split(' ');

  if (words.length !== pattern.length) return false;

  const map = new Map<string, string>();
  const seen = new Map<string, string>();

  for (let i = 0; i < words.length; i++) {
    const char = pattern.charAt(i);
    const word = words[i];

    if (map.has(char) && map.get(char) !== word) return false;
    if (seen.has(word) && seen.get(word) !== char) return false;

    map.set(char, word);
    seen.set(word, char);
  }

  return true;
}

console.log(wordPattern("abba", "dog constructor constructor dog"));
