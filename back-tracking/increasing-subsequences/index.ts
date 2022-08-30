export function increasingSub(nums: number[]): number[][] {
  const results: number[][] = []

  if(!nums.length) return results

  function backTracking(start: number, path: number[]) {
    if(path.length >= 2) results.push([...path])

    if(start > nums.length) return 

    const lvlSet: Set<number> = new Set()

    for(let i = start ; i < nums.length ; i++) {
      let prev = path[path.length - 1]
      if(nums[i] < prev || lvlSet.has(nums[i])) continue

      path.push(nums[i])
      lvlSet.add(nums[i])

      backTracking(i + 1, path)

      path.pop()
    }
  }


  backTracking(0, [])

  return results
}


