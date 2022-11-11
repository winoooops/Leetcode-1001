export function canPartition(nums: number[]): boolean {
  const sum = nums.reduce((prev: number, curr: number) => prev + curr, 0);
  if(sum % 2 === 1) return false; 

  const size = sum / 2; 
  const dp: number[] = new Array(size + 1).fill(0);
  dp[0] = 0;

  for(let i = 0; i < nums.length; i++) {
    for(let j = size; j >= nums[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);
    }
  }

  return dp[size] === size;
}
