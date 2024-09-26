const isValid = (s: string): boolean => {
  const stack: string[] = [];
  const mapping: Record<string, string> = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for(const c of s){
    if (c in mapping) {
      stack.push(c)
    } else if (Object.values(mapping).includes(c)) {
      const top = stack.pop();
      if(!top) continue

      if ( mapping[top] !== c) return false
    }
  }
  
  return !stack.length;
};

console.log(isValid("[()]"))
