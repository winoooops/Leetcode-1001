export function merge(intervals: number[][]): number[][] {
  intervals.sort((a,b) => a[0] - b[0]);
  const result: number[][] = []

  let prev = intervals[0]
  let curr: number[]

  result.push(prev)

  for(let i = 1; i < intervals.length; i++) {
    curr = intervals[i]
    prev = result.pop()! 

    if(curr[0] > prev[1]) {
      result.push(prev)
      result.push(curr)
    } else {
      prev[1] = Math.max(prev[1], curr[1])
      result.push(prev)
    }
  }
  
  return result;
}
