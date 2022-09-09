export function canJump(nums: number[]): boolean {
  let coverage: number = 0 

  for(let i = 0; i <= coverage; i++) {
    coverage = Math.max(coverage, i + nums[i])
    if(coverage >= nums.length - 1) return true 
  }

  return false 
}
