# 56. 合并区间 

以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。

 
## 示例

```
输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
输出：[[1,6],[8,10],[15,18]]
解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
```

```
输入：intervals = [[1,4],[4,5]]
输出：[[1,5]]
解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。
```

## 思路 

### 贪心 

对区间进行排序后(起始从小到大), 只需要比较当前区间的起始比上一个区间的终点即可决定是否合并. 

```typescript 
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
```

