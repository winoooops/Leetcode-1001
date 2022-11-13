export function findTargetSumWays(nums: number[], target: number): number {
  const sum = nums.reduce((prev, curr) => prev + curr, 0);

  if ((target - sum) % 2 === 1) return 0;
  if (Math.abs(target) > sum) return 0;

  const size = (target + sum) / 2;
  const dp: number[] = new Array(size + 1).fill(0);

  dp[0] = 1;

  for (let i = 0; i < nums.length; i++) {
    for (let j = size; j >= nums[i]; j--) {
      dp[j] = dp[j] + dp[j - nums[i]]
    }
  }

  return dp[size];
}