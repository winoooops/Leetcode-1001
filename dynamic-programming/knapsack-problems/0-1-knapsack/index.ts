export function knapsack(weight: number[], value: number[], size: number): number {
  const dp: number[][] = new Array(weight.length).fill(0)
    .map(_ => new Array(size + 1).fill(0));

  // init 
  for (let i = weight[0]; i <= size; i++) {
    dp[0][i] = value[0];
  }

  for (let i = 1; i < weight.length; i++) {
    for (let j = 1; j <= size; j++) {
      // dp[i - 1][j] => not taking item 
      // dp[i - 1][j - weight] + value[i] => taking item
      if (j < weight[i]) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i]);
      }
    }
  }
  return dp[weight.length - 1][size]
}

console.log(knapsack([1, 3, 4, 5], [15, 20, 30, 55], 6))
console.log(knapsack([5, 3, 4, 2], [60, 50, 70, 30], 5))