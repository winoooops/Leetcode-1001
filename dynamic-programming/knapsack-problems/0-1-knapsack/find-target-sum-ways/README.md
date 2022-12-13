# 494. 目标和

给你一个整数数组 `nums` 和一个整数 `target` 。

向数组中的每个整数前添加 '+' 或 '-' ，然后串联起所有整数，可以构造一个 表达式 ：

  例如，`nums = [2, 1]` ，可以在 2 之前添加 '+' ，在 1 之前添加 '-' ，然后串联起来得到表达式 "+2-1" 。

返回可以通过上述方法构造的、运算结果等于 target 的不同 表达式 的数目。


## 示例

```
输入：nums = [1,1,1,1,1], target = 3
输出：5
解释：一共有 5 种方法让最终目标和为 3 。
-1 + 1 + 1 + 1 + 1 = 3
+1 - 1 + 1 + 1 + 1 = 3
+1 + 1 - 1 + 1 + 1 = 3
+1 + 1 + 1 - 1 + 1 = 3
+1 + 1 + 1 + 1 - 1 = 3
```

```
输入：nums = [1], target = 1
输出：1
```

## 思路

### 0/1 背包 

这里可以把串联的过程分成 `"+"` 的一半, 和 `"-"` 的另一半. 

假设 `X` 为加法的总和, 那么 `sum - X`就是减法的总和, 为了满足题意, 我们需要找到 `X - (sum - X) = target`的集合, 那么也就是说加法的那一半 `X = (target + sum) / 2`. 

![494-2](/static/img/dp/494-2.png)

此时需要考虑两种特殊情况, 此时是无解的. 

* `(target + sum) % 2`
* `Math.abs(target) > sum ` 

### 动规五部曲 

1. 对于 装满容量为 `j` 的包有 `dp[j]` 种**方法**
2. 递推公式: 对于第 `i` 个数字来说, 只存在两种情况(加和减). `dp[j]` 有可能是从 上一个数字加上来的, 也就是 `dp[j]` ; 或者是从 上一个数字减 下来, 也就是 `dp[j - nums[i]]`;
    ```
    有哪些来源可以推出dp[j]呢？

    只要搞到nums[i]），凑成dp[j]就有dp[j - nums[i]] 种方法。

    例如：dp[j]，j 为5，

    * 已经有一个1（nums[i]） 的话，有 dp[4]种方法 凑成 容量为5的背包。 // 4种方法加上一个确定的结果仍旧为4
    * 已经有一个2（nums[i]） 的话，有 dp[3]种方法 凑成 容量为5的背包。 
    * 已经有一个3（nums[i]） 的话，有 dp[2]中方法 凑成 容量为5的背包
    * 已经有一个4（nums[i]） 的话，有 dp[1]中方法 凑成 容量为5的背包
    * 已经有一个5 （nums[i]）的话，有 dp[0]中方法 凑成 容量为5的背包

    那么凑整dp[5]有多少方法呢，也就是把 所有的 dp[j - nums[i]] 累加起来。

    所以求组合类问题的公式，都是类似这种：
    ```
3. 初始化: `dp[j]`初始值均为0, 并且dp[0] 一定要初始化为1(装满容量为0的背包的方法是什么也不装, 但也是方法);
4. 遍历顺序: 外层遍历数组, 内层遍历可能出现的和. 
5. 实际例子: `nums = [1, 1, 1, 1, 1]; target = 3`, `size = (S + sum) / 2` 
   ![494](/static/img/dp/494.jpg)


### 完整代码 

```typescript 
export function findTargetSumWays(nums: number[], target: number): number {
  const sum: number = nums.reduce((prev, curr) => prev + curr, 0);
  if ((sum + target) % 2 || Math.abs(target) > sum) return 0;
  const size: number = (sum + target) / 2;
  const dp: number[] = new Array(size + 1).fill(0);

  dp[0] = 1;

  for (let i = 0; i < nums.length; i++) {
    for (let j = size; j >= nums[i]; j--) {
      dp[j] = dp[j] + dp[j - nums[i]];
    }
  }

  return dp[size];
}
```


