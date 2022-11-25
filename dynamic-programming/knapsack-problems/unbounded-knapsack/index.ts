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
  const dp: number[][] = new Array(weight.length).fill(0).map(_ => new Array(size + 1).fill(0));

  for (let j = 0; j <= size; j++) {
    let count = Math.floor(j / weight[0]);
    dp[0][j] = value[0] * count;
  }

  for (let i = 1; i < weight.length; i++) {
    for (let j = 0; j <= size; j++) {
      if (j >= weight[i]) {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - weight[i]] + value[i]);
      }
    }
  }

  return dp[weight.length - 1][size];
}
