export function maxSubArray(nums: number[]): number {
  let sum: number = 0 
  let result: number = -Infinity

  for(let i = 0; i < nums.length ;i++) {
    sum += nums[i]
    result = Math.max(result, sum)
    if(sum < 0) sum = 0
  }

  return result
}

export function maxSubArrayWithDP(nums: number[]): number {
  if(!nums.length) return 0

  let result = nums[0]
  const dp: number[] = []
  dp[0] = nums[0]

  for(let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
    result = Math.max(result, dp[i])
  }

  return result
}
