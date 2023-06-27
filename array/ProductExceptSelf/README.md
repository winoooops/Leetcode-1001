# 238. 除自身以外数组的乘积
给你一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积 。

题目数据 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内。

请不要使用除法，且在 O(n) 时间复杂度内完成此题。



## 示例

```
输入: nums = [1,2,3,4]
输出: [24,12,8,6]
```

```
输入: nums = [-1,1,0,-3,3]
输出: [0,0,9,0,0]
```

## 思路

### 两次遍历
> 空间复杂度为`O(1)`, 时间复杂度为`O(n)`, 其中n为数组的长度
> 考虑到可以累乘, 可以依次累乘法当前元素左边的乘积 和 右边的成绩

```java
public class Solution {
    public int[] productExceptSelf(int[] nums)
    {
        int[] products = new int[nums.length];

        int temp = 1;
        for(int i = 0; i < nums.length; i++)
        {
            products[i] = temp;
            temp *= nums[i];
        }

        temp = 1;
        for(int i = nums.length - 1; i >= 0; i--)
        {
            products[i] *= temp;
            temp *= nums[i];
        }

        return products;
    }
}
```
```
以[1 2 3 4]数组为例
第一次遍历后products为[1, 1, 2, 6]
第二次遍历后为[24 12 8 6]
```

### 前缀积数组
> 空间复杂度为`O(1)`, 时间复杂度为`O(n)`

* 初始化`res`数组, 其中`res[i]`为i下标前所有数字的乘积
* 创建2个长度为`n+1`的bucket数组`pre`和`next`, 其中`pre[0] = next[n] = 1` 
* 首次遍历数组, 其中`pre[i]`为i下标签所有数字的乘积, `next[n-i-1]`为`n-i-1`下标后所有数字的乘积
* 再次遍历数组, `res[i]`为`pre[i]`和`next[i+1]`的乘积



```java
public class Solution {
    public int[] productExceptSelfArray(int[] nums)
    {
        int n = nums.length;
        int[] res = new int[n];
        int[] pre = new int[n];
        int[] next = new int[n];

        pre[0] = next[n - 1] = 1;
        for (int i = 1; i < n; i++) {
            pre[i] = pre[i-1] * nums[i-1];
            next[n - i - 1] = next[n - i] * nums[n - i];
        }

        for (int i = 0; i < n; i++) {
            res[i] = pre[i] * next[i];
        }
        return res;
    }
}
```

```
nums: 1 2 3 4 

pre:  1 x x x  
next: x x x 1

first loop:
pre:  1 1 2  6 
next: 24 12 4 1

second loop:
result:  24 12 8 6
```