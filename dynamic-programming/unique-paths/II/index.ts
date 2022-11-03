export function uniquePathWithObstacles(obstaclesGrid: number[][]): number {
  const m = obstaclesGrid.length;
  const n = obstaclesGrid[0].length;

  const dp: number[][] = new Array(m).fill(0).map(_ => new Array(n).fill(0)) // 每个格子默认初始值为0
  for(let i = 0; i < m && obstaclesGrid[i][0] === 0; i++) dp[i][0] = 1;
  for(let j = 0; j < n && obstaclesGrid[0][j] === 0; j++) dp[0][j] = 1;

  for(let i = 1; i < m; i++) {
    for(let j = 1; j < n; j++) {
      if(obstaclesGrid[i][j] === 1) continue; 
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    }
  }

  return dp[m - 1][n - 1]
}
