export function permutations(nums: number[]): number[][] {
  const results: number[][] = []
  const used: boolean[] = new Array(nums.length).fill(false)

  if(!nums.length) return results

  function backTracking(path: number[]) {
    if(path.length === nums.length) return results.push([...path])

    for(let i = 0 ; i < nums.length ; i ++) {
      if(used[i] === true) continue

      path.push(nums[i])
      used[i] = true

      backTracking(path)

      path.pop()
      used[i] = false
    }
    
  }

  backTracking([])

  return results
}
