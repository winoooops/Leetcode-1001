# 有序数组的平方


给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。
 

示例 1：

```
输入：nums = [-4,-1,0,3,10]
输出：[0,1,9,16,100]
解释：平方后，数组变为 [16,1,0,9,100]
排序后，数组变为 [0,1,9,16,100]
```

示例 2：
```
输入：nums = [-7,-3,2,3,11]
输出：[4,9,9,49,121]
```

提示：

* 1 <= nums.length <= 104
* -104 <= nums[i] <= 104
* nums 已按 非递减顺序 排序
 

进阶：

请你设计时间复杂度为 O(n) 的算法解决本问题


## 暴力解法

直接先平方再排序, 但是时间复杂度为`O(n + n\log n)`

## 双指针

数组其实是有序的， 只不过负数平方之后可能成为最大数了。

那么数组平方的最大值就在数组的两端，不是最左边就是最右边，不可能是中间。

```typescripts
export function sortSquares(nums: number[]): number[] {
  const length = nums.length 
  const result: number[]= new Array(length)

  let i = 0
  let j = length - 1 
  let k = length - 1
  while(i <= j) {
    if(Math.abs(nums[i]) > Math.abs(nums[j])) {
      result[k] = nums[i] * nums[i]
      i ++
    } else {
      result[k] = nums[j] * nums[j]
      j --
    }
    k--
  }
  console.log(i)
  console.log(j)
  console.log(result)
  return result 
}

```

