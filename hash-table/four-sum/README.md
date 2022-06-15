# 四数相加1

给你一个由 n 个整数组成的数组 nums ，和一个目标值 target 。请你找出并返回满足下述全部条件且不重复的四元组 [nums[a], nums[b], nums[c], nums[d]] （若两个四元组元素一一对应，则认为两个四元组重复）：

* `0 <= a, b, c, d < n`
* a, b, c, d 互不相同
* `nums[a] + nums[b] + nums[c] + nums[d] === target`

你可以按照任意顺序返回答案

## 示例
```
输入：nums = [1,0,-1,0,-2,2], target = 0
输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
```

```
输入：nums = [2,2,2,2,2], target = 8
输出：[[2,2,2,2]]
```

## 思路

就是[三数之和](../three-sum/README.md)之上再套用一层for循环, 利用快慢双指针解题, 但是需要注意

* 需要做剪枝, 在三数之和的时候可以通过判断`nums[i] > 0`, 此时需要判断`nums[i] > target && (nums[i] >= 0 || target >=0)`
* 三数之和的时间复杂度是$O(n^2)$, 四数之和的时间复杂度是$O(n^3)$


```typescript 
export function fourSum(nums: number[], target: number) {
  const result = []

  if(nums.length < 4) return result;
  nums.sort((a,b) => a - b)

  for(let i = 0; i < nums.length - 3 ; i++) {
    if(i > 0 && nums[i] === nums[i - 1]) continue;

    for(let j = i + 1 ; j < nums.length - 2; j++) {
      if(j> i + 1 && nums[j] === nums[j-1]) continue;

      let l = j + 1 
      let r = nums.length - 1 

      while(l < r) {
        let sum = nums[i] + nums[j] + nums[l] + nums[r]
        if(sum === target) {
          result.push([nums[i], nums[j], nums[l], nums[r]])
          l++
          r--
          while(l < r && nums[l] === nums[l - 1]) l ++
          while(l < r && nums[r] === nums[r + 1]) r--
        }
        else if (sum < target) {
          l++
        }
        else {
          r--
        }
      }
    }
  }
  return result
}
```

# 四数相加2

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


