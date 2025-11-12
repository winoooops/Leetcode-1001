export function canJump(nums: number[]): boolean {
  if (nums.length <= 1) return true;
  let coverage = 0;

  for (let i = 0; i < nums.length && i <= coverage; i++) {
    coverage = Math.max(coverage, i + nums[i]);

    if (coverage >= nums.length - 1) return true;
  }

  return false;
}
