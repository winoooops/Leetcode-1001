export function combinationSum(n: number, k: number): number[][] {
  let sum: number = 0
  const path: number[] = []

  function backTracking(start: number) {
    if(sum > n) return 
    if (path.length === k) {
      if (sum === n) {
        result.push([...path])
      }
      return
    }

    for (let i = start; i <= 9 - (k - path.length) + 1; i++) {
      sum += i
      path.push(i)

      backTracking(i + 1)

      sum -= i
      path.pop()!

    }
  }

  const result: number[][] = []


  backTracking(1)

  return result
}
