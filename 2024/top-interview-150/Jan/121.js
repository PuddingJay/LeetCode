/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let currentProfit = 0;
  let maximumProfit = 0;
  let day = 0

  for (let i = 0; i < prices.length; i++) {
    // console.log(`i: ${i} and day: ${day}`)
    // console.log(`${prices[i]} - ${prices[day]}`);
    if ((prices[i] - prices[day]) >= 0) {
      currentProfit = prices[i] - prices[day]
      // console.log(`current profit: ${currentProfit}`);
      // console.log(`maximum profit: ${maximumProfit}`);
      maximumProfit = Math.max(maximumProfit, currentProfit)
    } else {
      day = i
    }
  }
  // Other solution
  // for (let i = 1; i < prices.length; i++) {
  //   console.log(`${prices[i]} - ${prices[day]}`);

  //   currentProfit = prices[i] - prices[day];
  //   if (currentProfit >= 0 && currentProfit > maximumProfit) {
  //     maximumProfit = currentProfit;
  //     console.log(maximumProfit);
  //   } else if (currentProfit < 0) {
  //     day = i;
  //   }
  // }

  return maximumProfit
};

console.log(maxProfit([2, 1, 2, 1, 0, 1, 2]));