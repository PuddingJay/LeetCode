const gcdOfStrings = (str1: string, str2: string): string => {
  if (str1 + str2 !== str2 + str1) return ''

  let max = Math.max(str1.length, str2.length)
  let min = Math.min(str1.length, str2.length)

  while (min) {
    let temp = min 
    min = max % min
    max = temp 
  }

  return str1.substring(0, max)
}


console.log(gcdOfStrings("TAUXXTAUXXTAUXXTAUXXTAUXX", "TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX"))
