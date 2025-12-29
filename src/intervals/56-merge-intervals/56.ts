export function merge(intervals: number[][]): number[][] {
  intervals.sort((a,b) => a[0] - b[0]);
  const ans: number[][] = [];
  let prev = intervals[0];

  for(let i = 1; i < intervals.length; i++) {
    let curr = intervals[i];

    if(curr[0] <= prev[1]) {
      prev[1] = Math.max(prev[1], curr[1]);
    } else {
      ans.push(prev);
      prev = curr;
    }
  }

  ans.push(prev);

  return ans;
}

export function mergeTwo(intervals: number[][]): number[][] {
  intervals.sort((a,b) => a[0] - b[0]);
  const ans: number[][] = [];

  ans.push(intervals[0]);

  for(let i = 1; i < intervals.length; i++) {
    if(intervals[i][0] > ans[ans.length - 1][1]) {
      ans.push(intervals[i]);
    } else {
      ans[ans.length - 1][1] = Math.max(ans[ans.length-1][1], intervals[i][1]);
    }
  }

  return ans;
}
