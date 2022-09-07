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
