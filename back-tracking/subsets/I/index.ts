export function subsets(nums: number[]): number[][] {
  const results: number[][] = [] 
  if(!nums.length) return results

  function backTracking(startIdx: number, path: number[]) {
    results.push([...path])

    if(startIdx >= nums.length) {
      return 
    }

    for(let i = startIdx ; i < nums.length ; i++) {
      path.push(nums[i])

      backTracking(i + 1, path)

      path.pop()
    }
  }

  backTracking(0, [])

  return results
}
