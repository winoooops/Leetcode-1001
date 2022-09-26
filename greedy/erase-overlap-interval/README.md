# 435. 无重叠区间

给定一个区间的集合 `intervals` ，其中 `intervals[i] = [starti, endi]` 。返回 需要移除区间的最小数量，使剩余区间互不重叠 。

 

## 示例

```
输入: intervals = [[1,2],[2,3],[3,4],[1,3]]
输出: 1
解释: 移除 [1,3] 后，剩下的区间没有重叠。
```

```
输入: intervals = [ [1,2], [1,2], [1,2] ]
输出: 2
解释: 你需要移除两个 [1,2] 来使剩下的区间没有重叠。
```

```
输入: intervals = [ [1,2], [2,3] ]
输出: 0
解释: 你不需要移除任何区间，因为它们已经是无重叠的了。
```

## 思路

1. 不需要去模拟删除哪个区间, 只需要通过计算不重复区间即可
2. 取右边界来进行排序, 那就要判断右边界与当前区间的左边界; 取左边界来排序的话, 就要判断左边界和当前区间的右边界. 

### 贪心
右边界排序之后，局部最优：优先选右边界小的区间，所以从左向右遍历，留给下一个区间的空间大一些，从而尽量避免交叉。全局最优：选取最多的非交叉区间。

```typescript
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
```



