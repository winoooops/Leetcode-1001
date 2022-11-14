export function findTargetSumWays(nums: number[], target: number): number {
  const sum: number = nums.reduce((prev, curr) => prev + curr, 0);
  if ((sum + target) % 2 || Math.abs(target) > sum) return 0;
  const size: number = (sum + target) / 2;
  const dp: number[] = new Array(size + 1).fill(0);

  dp[0] = 1;

  for (let i = 0; i < nums.length; i++) {
    for (let j = size; j >= nums[i]; j--) {
      dp[j] = dp[j] + dp[j - nums[i]];
    }
  }

  return dp[size];
}