export function subsetsWithDup(nums: number[]): number[][] {
  const results: number[][] = [] 
  const used: boolean[] = new Array(nums.length).fill(false)
  if(!nums) return results

  nums.sort((a,b) => a - b)

  function backTrack(startIndex: number, path: number[]){
    results.push([...path])

    if(startIndex >= nums.length) return 

    for(let i = startIndex ; i < nums.length ; i++) {
      if(i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue 

      path.push(nums[i])
      used[i] = true 

      backTrack(i + 1, path)

      path.pop()
      used[i] = false 
    }
  }

  backTrack(0, [])

  return results
}
