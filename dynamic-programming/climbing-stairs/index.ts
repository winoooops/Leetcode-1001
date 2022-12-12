export function climbStairs(n: number): number {
  const dp: number[] = [];

  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n]
}

export function climbStairsAd(n: number, m: number): number {
  // n is the nth stairs one want to reach  
  // m is how many steps one can take 
  const dp: number[] = new Array(m).fill(0);
  dp[0] = 1

  // because this is a combination prob, loop the weight first, then the items
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (i >= j) {
        dp[i] = dp[i] + dp[i - j];
      }
    }
  }

  return dp[n];
}