const isIsomorphic = (s: string, t: string): boolean => {
  const map = new Map<string, string>();
  const map2 = new Map<string, string>();

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    if (map.has(charS) && map.get(charS) !== charT) return false;
    if (map2.has(charT) && map2.get(charT) !== charS) return false;

    map.set(charS, charT);
    map2.set(charT, charS);
  }
  return true;
}

console.log(isIsomorphic("egg", "add"))
console.log(isIsomorphic("foo", "bar"))
console.log(isIsomorphic("paper", "title"))