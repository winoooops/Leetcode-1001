export function rob(nums: number[]): number {
  if (nums.length === 1) return nums[0];

  // Three cases:
  // 1. rob head, no tail
  const nums1 = nums.slice(0, nums.length - 1);
  // 2. rob tail, no head 
  const nums2 = nums.slice(1, nums.length);
  // 3. rob no head no tail
  const nums3 = nums.slice(1, nums.length - 1);

  return Math.max(helper(nums1), helper(nums2), helper(nums3));
}

function helper(nums: number[]): number {
  if (nums.length <= 1) return nums.length === 0 ? 0 : nums[0];

  const dp: number[] = new Array(nums.length).fill(0);

  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }

  return dp[nums.length - 1];
}