"use strict";

const profit = (arr) => {
  let minPriceIndex = 0;
  let maximumProfit = 0;
  let buyPriceIndex = 0;
  let sellPriceIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[minPriceIndex]) {
      minPriceIndex = i;
    }

    const currentProfit = arr[i] - arr[minPriceIndex];

    if (currentProfit > maximumProfit) {
      maximumProfit = currentProfit;
      buyPriceIndex = minPriceIndex;
      sellPriceIndex = i;
    }
  }

  return maximumProfit > 0 ? [buyPriceIndex, sellPriceIndex] : [];
};

console.log(profit([13, 6, 3, 4, 10, 2, 3])); // # [2, 4] >> купили за 3 (индекс 2) и продали за 10 (индекс 4)

console.log(profit([13, 6, 3, 1])); // # [] >> нет выигрышных вариантов
