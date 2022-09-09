export function jumpOne(nums: number[]): number {
  let currCoverage: number = 0 
  let nextCoverage: number = 0 
  let steps: number = 0 

  for(let i = 0; i < nums.length ; i++) {
    nextCoverage = Math.max(nextCoverage, i + nums[i])

    if(nextCoverage >= nums.length - 1) {
      steps++
      break
    }

    if(i === currCoverage) {
      currCoverage = nextCoverage
      steps++
    }
  }

  return steps
}

export function jumpTwo(nums: number[]): number {
  let currCoverage: number = 0 
  let nextCoverage: number = 0 
  let steps: number = 0 

  for(let i = 0; i < nums.length - 1 ; i++) {
    nextCoverage = Math.max(nextCoverage, i + nums[i])

    if(i === currCoverage) {
      currCoverage = nextCoverage
      steps++
    }
  }

  return steps
}
