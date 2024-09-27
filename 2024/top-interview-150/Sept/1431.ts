const kidsWithCandies = (candies: number[], extraCandies: number): boolean[] => {
  const maxCandies = Math.max(...candies);

  return candies.map((candy) => candy + extraCandies >= maxCandies);
}

console.log(kidsWithCandies([12,1,12], 10))