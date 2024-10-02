const createCounter= (n: number): () => number => {
  let count = n;
  return () => count++
}