export function lastStoneWeightII(stone: number[]): number {
  const sum: number = stone.reduce((prev, curr) => prev + curr, 0);
  const optimalSize: number = Math.floor(sum / 2);
  const dp: number[] = new Array(optimalSize + 1).fill(0);

  for (let i = 0; i < stone.length; i++) {
    for (let j = optimalSize; j >= stone[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - stone[i]] + stone[i]);
    }
  }

  // 因为 optimalSize = Math.floor(sum / 2) 向下取整
  // 所以 sum - dp[optimalSize] >= dp[optimalSize]
  // 一堆石头的总重量是 dp[optimalSize] 另一堆是 dp[optimalSize]
  // 所以最小重量就是 (sum - dp[optimalSize]) - dp[optimalSize]

  return sum - dp[optimalSize] - dp[optimalSize];
}