export function permutationsII(nums: number[]): number[][] {
  const results: number[][] = []
  if(!nums.length) return results
  const path: number[] = []
  const used: boolean[] = new Array(nums.length).fill(false)

  nums.sort((a,b) => a - b)

  function backTrack() {
    if(path.length >= nums.length) return results.push([...path])

    for(let i = 0 ; i < nums.length; i++) {
      if(i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue 

      if(!used[i]) {
        path.push(nums[i])
        used[i] = true 

        backTrack()

        path.pop()
        used[i] = false
      }
    }
  }

  backTrack()

  return results

}
