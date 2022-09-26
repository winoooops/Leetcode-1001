export function eraseOverlapIntervals(intervals: number[][]): number {
  intervals.sort((a,b) => a[1] - b[1])

  let count: number = 1 // 非交叉区间的个数 
  let end: number = intervals[0][1] // 记录第一个区间的右边界 

  // 计算不重复区间
  for(let i = 1; i < intervals.length; i++) {
    if(end <= intervals[i][0]) {
      end = intervals[i][1]
      count++
    }
  }

  return intervals.length - count
}
