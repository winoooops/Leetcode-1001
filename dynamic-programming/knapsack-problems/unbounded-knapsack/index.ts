export function unboundedKnapsack(weight: number[], value: number[], size: number): number {
  const dp: number[] = new Array(size + 1).fill(0);

  // iterate throughg the items
  for (let i = 0; i < weight.length; i++) {
    // iterate through the sizes
    for (let j = size; j >= weight[i]; j--) {
      // in the context of size j, the maximum number of item i I can put in
      for (let k = 0; k <= Math.floor(j / weight[i]); k++) {
        dp[j] = Math.max(dp[j], dp[j - k * weight[i]] + k * value[i])
      }
    }
  }

  return dp[size];
}

export function realTrick(weight: number[], value: number[], size: number): number {
  const dp: number[] = new Array(size + 1).fill(0);

  for (let i = 1; i < weight.length; i++) {
    for (let j = weight[i]; j <= size; j++) {
      dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i]);
    }
  }

  return dp[size];
}


console.log(unboundedKnapsack([1, 3, 4], [15, 20, 30], 4));
console.log(realTrick([1, 3, 4], [15, 20, 30], 4));