export function combinationSum(candidates: number[], target: number): number[][] {
  const result: number[][] = [] 
  if(!candidates.length) return result

  function backTracking(index: number, path: number[], sum: number) {
    if(sum > target) return 

    if(sum === target) {
      return result.push([...path])
    }

    
    for(let i = index ; i < candidates.length ; i++) {
      sum += candidates[i]
      path.push(candidates[i])

      // 注意, 这里传入i的值来去重
      backTracking(i, path, sum)

      sum -= candidates[i]
      path.pop()
    }
  }

  backTracking(0, [], 0)
  return result
}
