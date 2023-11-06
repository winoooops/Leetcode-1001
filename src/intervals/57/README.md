# 57. Insert Interval

You are given an array of non-overlapping intervals intervals where `intervals[i] = [starti, endi]` represent the start and the end of the `ith` interval and intervals is sorted in ascending order by `starti`. 

You are also given an interval `newInterval = [start, end]` that represents the start and end of another interval.

Insert newInterval into intervals such that intervals is still sorted in ascending order by `starti` and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return intervals after the insertion.



## Example

```
Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]
```

```
Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
```


## Solution

### Insert and merge
> Time Complexity is `O(n)`, space complexity is `O(n)`

```ts
export function insertInterval(intervals: number[][], newInterval: number[] ): number[][] {
  let index = 0;
  while(index < intervals.length && intervals[index][0] <= newInterval[0]) {
    index++;
  }
  intervals.splice(index, 0, newInterval);

  const answer: number[][] = [];

  let prev = intervals[0];
  let curr;

  for(let i = 1; i < intervals.length; i++) {
    curr = intervals[i];
    if(curr[0] <= prev[1]) {
      prev[1] = Math.max(prev[1], curr[1]);
    } else {
      answer.push(prev);
      prev = curr;
    }
  }

  answer.push(prev);

  return answer;
}
```

### Left, Merged and Right

* declare two arrays `left` and `right` which respectively represents the left intervals and right intervals that are not overlapping with `newInterval`, go through the array, 
  * if the current interval `interval` is not overlapping `newInterval` on its left, then simply `left.push(interval)`
  * if the current interval `interval` is not overlapping `newInterval` on its right, then simply `right.push(interval)`
  * if there's an overlapping, then the combined interval should be `[min(interval[0], newInterval[0]), max(interval[1], newInterval[1])]`

```ts
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
```
