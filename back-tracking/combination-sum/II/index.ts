export function combinationSum(candidates: number[], target: number): number[][] {
  const result: number[][] = [] 
  if(!candidates.length) return result

  candidates.sort((a,b) => (a - b))
  
  const used = new Array(candidates.length).fill(false)

  function backTracking(path: number[], index: number, sum: number) {
    if(sum > target) return 

    if(sum === target) return result.push([...path])

    for(let i = index ; i <= candidates.length ; i++) {
      // used[i - 1] === true的话表示在同一个树枝中出现过, 满足条件 
      // used[i - 1] === false 的话表示在上一个树层中出现过, 不满足条件, 直接跳过 
      if(i > 0 && candidates[i] === candidates[i - 1] && used[i - 1] == false) {
        continue
      } 

      path.push(candidates[i])
      sum += candidates[i]
      used[i] = true

      backTracking(path, index + 1, sum)

      used[i] = false
      path.pop()
      sum -= candidates[i]
    }
  }

  backTracking([], 0, 0)
  return result
}


//   1    1    2 
//  / \   
// 1   2
// /
// 2
