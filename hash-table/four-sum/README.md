# 四数相加

给你四个整数数组 nums1、nums2、nums3 和 nums4 ，数组长度都是 n ，请你计算有多少个元组 (i, j, k, l) 能满足：

0 <= i, j, k, l < n
nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0


## 示例

```
输入：nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2]
输出：2
解释：
两个元组如下：
1. (0, 0, 0, 1) -> nums1[0] + nums2[0] + nums3[0] + nums4[1] = 1 + (-2) + (-1) + 2 = 0
2. (1, 1, 0, 0) -> nums1[1] + nums2[1] + nums3[0] + nums4[0] = 2 + (-1) + (-1) + 0 = 0
```

```
输入：nums1 = [0], nums2 = [0], nums3 = [0], nums4 = [0]
输出：1
```

## 思路

1. 遍历前两个数组A和B, 用Map来存储前两个数组 *元素之和*`a+b` 和 *元素出现的次数*,

2. 遍历后两个数组C和D, 如果在map中找到`0 - (c+d)`, 将map中出现的次数更新到统计次数上. 

```typescript
export function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
  const twoMap: Map<number,number> = new Map()
  let count = 0 
  
  for(let i of nums1) {
    for(let j of nums2){
      twoMap.set(i+j, (twoMap.get(i+j) || 0) + 1)
    }
  }
  
  for(let x of nums3) {
    for(let y of nums4){
      count += twoMap.get(0-(x+y)) || 0
    }
  } 
  
  return count
}
```


