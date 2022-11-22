export function unboundedKnapsack(weight: number[], value: number[], size: number): number {
  const dp: number[] = new Array(size + 1).fill(0);

  for (let i = 0; i < weight.length; i++) {
    for (let j = size; j >= weight[i]; j--) {

      for (let k = 0; k <= Math.floor(j / weight[i]); k++) {
        dp[j] = Math.max(dp[j], dp[j - k * weight[i]] + k * value[i])
      }
    }
  }

  return dp[size];
}


console.log(unboundedKnapsack([1, 3, 4], [15, 20, 30], 4));