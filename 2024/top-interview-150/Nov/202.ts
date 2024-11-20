const sumOfSquares = (n: number): number => {
  return n.toString().split("").reduce((acc, digit) => acc + Math.pow(parseInt(digit), 2), 0);
}
  
const isHappy = (n: number): boolean => {
  const map = new Map<number, boolean>();

  while (n !== 1 && !map.get(n)) {
    map.set(n, true);
    n = sumOfSquares(n);
  }
  return n === 1;
}