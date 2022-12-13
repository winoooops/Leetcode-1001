export function numSquares(n: number) {
  const dp: number[] = new Array(n + 1).fill(Infinity);

  dp[0] = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = i * i; j <= n; j++) {
      dp[j] = Math.min(dp[j], dp[j - i * i] + 1)
    }
  }

  return dp[n];
}