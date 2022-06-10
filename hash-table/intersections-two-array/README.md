# 两个数组的交集

给定两个数组 *nums1* 和 *nums2* ，返回它们的交集 。输出结果中的每个元素一定是**唯一**的。我们可以不考虑输出结果的顺序 。

## 示例
```
输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2]

```

```
输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[9,4]
解释：[4,9] 也是可通过的
```

## 思路

> 但元素的数量受限制时, 可使用数组做哈希; 但如果哈希值少且分散, 就不适合用数组解题.

因为题说明了可以不考虑顺序, 所以这里可以使用`unordered_set`.

```typescript 
export function intersections(nums1: number[], nums2: number[]): number[] {

  const result: Set<number> = new Set()
  const setOne: Set<number> = new Set(nums1)

  for(let i of nums2) {
    if(setOne.has(i)){
      result.add(i)
    }
  }

  return Array.from(result)
}
```


```typescript 
export function intersections(nums1: number[], nums2: number[]): number[] {
  return Array.from(new Set(nums1.filter(i => nums2.includes(i))))
}
```
