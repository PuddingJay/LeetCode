const canPlaceFlowers = (flowerBed: number[], n: number): boolean => {
  let count = 0
  for (let i=0; i<flowerBed.length; i++){

    if (flowerBed[i] === 0) {
      if ((i === 0 || flowerBed[i-1] === 0) && (i === flowerBed.length - 1 || flowerBed[i+1] === 0)) {
        flowerBed[i] = 1
        count++
      }
    }
  }
  return count >= n
}

console.log(canPlaceFlowers([1,0,0,0,1], 1))