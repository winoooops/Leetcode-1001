export function insertInterval(intervals: number[][], newInterval: number[] ): number[][] {
  const left: number[][] = []
  const right: number[][] = []
  let [begin, end] = newInterval;

  for(let interval of intervals) {
    if(interval[1] < begin) {
      left.push(interval);
    } else if(interval[0] > end) {
      right.push(interval);
    } else {
      begin = Math.min(interval[0], begin);
      end = Math.max(interval[1], end);
    }
  }

  return [...left, [begin, end], ...right];
}
