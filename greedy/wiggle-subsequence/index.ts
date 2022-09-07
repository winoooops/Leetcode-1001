export function wiggleMaxLength(nums: number[]): number {
  let count: number = 1 
  if(nums.length <= 1) return count 

  let preDiff: number = 0 
  let currDiff: number = 0 

  for(let i = 1; i < nums.length; i++) {
    currDiff = nums[i] - nums[i - 1]

    if(
      (preDiff <= 0 && currDiff > 0) || 
      (preDiff >= 0 && currDiff < 0)
    ) {
      preDiff = currDiff
      count++
    }
  }

  return count 
}

export function wiggleMaxLengthWithDP(nums: number[]): number {
  const count: number = 1 
  if(nums.length <= 1) return count 

  const dp: number[][] = new Array(nums.length).fill(0).map(_ => [])
  dp[0][0] = 1 // 第一个数同时为波峰和波谷
  dp[0][1] = 1

  for(let i = 1; i < nums.length; i++) {
    dp[i][0] = 1 
    dp[i][1] = 1

    for (let j = 0; j < i; j++) {
        if (nums[j] < nums[i]) dp[i][0] = Math.max(dp[i][0], dp[j][1] + 1);
    }

    for (let j = 0; j < i; j++) {
        if (nums[j] > nums[i]) dp[i][1] = Math.max(dp[i][1], dp[j][0] + 1);
    }
  }

  return Math.max(dp[nums.length - 1][0], dp[nums.length - 1][1])
}
