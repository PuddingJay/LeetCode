const reverseVowels = (s: string): string => {
  const vowels = ['a',  'i', 'u', 'e', 'o']
  const result:string[] = []
  const vowelInS = s.split('').filter( a => vowels.includes(a.toLowerCase()))
  
  for (let i = 0; i < s.length; i++) {

    if(vowels.includes(s[i].toLowerCase())) {
      const lastVowel = vowelInS.pop();
      if (lastVowel !== undefined) { 
        result.push(lastVowel);
      }
    } else {
      result.push(s[i])
    } 
  }

  return result.join('')
}

console.log(reverseVowels('IceCreAm'))