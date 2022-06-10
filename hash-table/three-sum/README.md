# 三数之和

你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。

注意： 答案中不可以包含重复的三元组。

## 示例

给定数组 nums = [-1, 0, 1, 2, -1, -4]，

满足要求的三元组集合为： [ [-1, 0, 1], [-1, -1, 2] ]

## 思路

如果直接用两层for循环做哈希, 那么有可能会出现重复的组合, 这点和题目要求不一致, 所以不推荐使用哈希加去重的解法.

### 双指针

我们可以考虑使用快慢指针的方法:
* 首先将数组排序, 排序后方便我们去重复
* 遍历数组中的元素, 确定a的位置(下标为i)
* 确定慢指针在i+1的位置上(对应b), 快指针在数组的右边(对应c, 初始为length-1)
* 比较`a + b + c`和 0 的大小, 直到b和c重合
  * `a + b + c > 0`, 那么快指针往左边移动
  * `a + b + c < 0`, 那么慢指针向右边移动
  * `a + b + c = 0`
    * 统计三个下标
    * 慢指针持续+1, 直到遇到不重复元素
    * 快指针持续-1, 直到遇到不重复元素

```typescript 
export function threeSum(nums: number[]): number[][] {
  const result = []

  nums.sort((a,b) => a - b)

  for(let i = 0; i < nums.length; i++) {
    // 如果当前最小的数字就大于0, 直接返回
    if(nums[i] > 0) return result

    // 如果数字重复(排序后一定在一起), 跳过
    if(i > 0 && nums[i] === nums[i-1]) continue;

    // 快慢指针
    let l = i + 1 
    let r = nums.length - 1 

    while(l < r) {
      let sum = nums[i] + nums[l] + nums[r]

      if(sum > 0) {
        r--
      }
      else if (sum < 0) {
        l++
      }

      else {
        result.push([nums[i], nums[l], nums[r]])
        l++
        r--
        // 去重
        while(nums[r] === nums[r+1]){
          r--
        }

        while(nums[l] === nums[l -1]) {
          l++
        }

      }
    }

  }

  return result
}

```


