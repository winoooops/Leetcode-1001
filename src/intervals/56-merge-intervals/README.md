# 56. Merge Intervals

Given an array of intervals where `intervals[i] = [starti, endi]`, merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.



## Example

```
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
```

```
Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
```


**Constraints**

* 1 <= intervals.length <= 104
* intervals[i].length == 2
* 0 <= starti <= endi <= 104

## Solution

### update intervals first and push
1. sort the array based on the starting value, this will make all the interval stays as close as possible
2. iterate through the array, if there's a case where `intervals[i][0] <= intervals[i-1][1]`, then there must be an overlapping, the new intervals should be `intervals[i-1][0], max(intervals[i][1])`
3. be careful when there's an interval left at the end that has been updated yet 

```ts
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
      console.log(ans);
    }
  }

  ans.push(prev);

  return ans;
}
```

### adding while update
```ts
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
```
