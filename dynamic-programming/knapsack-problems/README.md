# 背包问题总结 

## 背包问题分类 
![knapsack-problem-category](/static/img/dp/knapsack-category.png)

## 公式总结 

### 动态规划五部曲

1. 确定dp数组（dp table）以及下标的含义
2. 确定递推公式
3. dp数组如何初始化
4. 确定遍历顺序
5. 举例推导dp数组

### 背包递推公式 

* 能否能装满背包, 最多转多少 => `dp[j] = Math.max(dp[j] + dp[j - nums[i]])`
  * [416.Partition-equal-sub-set(01背包)](/dynamic-programming/knapsack-problems/0-1-knapsack/partition-equal-subset-sum/)
    ```typescript
    /* 416. Partition-equal-sub-set */
    // if the S is the positive part, then S = sum / 2 
    // and the size of the knapsack is S 
    // determine if the dp[size] === size
    export function canPartition(nums: number[]): boolean {
      const sum = nums.reduce((prev: number, curr: number) => prev + curr, 0);
      if(sum % 2 === 1) return false; 

      const size = sum / 2; 
      const dp: number[] = new Array(size + 1).fill(0);
      dp[0] = 0;

      for(let i = 0; i < nums.length; i++) {
        for(let j = size; j >= nums[i]; j--) {
          dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);
        }
      }

      return dp[size] === size;
    }   
    ```
  * [1049.The weight of last stone(01背包)](/dynamic-programming/knapsack-problems/0-1-knapsack/last-stone-weight/) 
    ```typescript 
    const sum: number = stone.reduce((prev, curr) => prev + curr, 0);
    const optimalSize: number = Math.floor(sum / 2);
    const dp: number[] = new Array(optimalSize + 1).fill(0);

    for (let i = 0; i < stone.length; i++) {
      for (let j = optimalSize; j >= stone[i]; j--) {
        dp[j] = Math.max(dp[j], dp[j - stone[i]] + stone[i]);
      }
    }

    // 因为 optimalSize = Math.floor(sum / 2) 向下取整
    // 所以 sum - dp[optimalSize] >= dp[optimalSize]
    // 一堆石头的总重量是 dp[optimalSize] 另一堆是 sum - dp[optimalSize]
    // 所以最小重量就是 (sum - dp[optimalSize]) - dp[optimalSize]

    return sum - dp[optimalSize] - dp[optimalSize];
    ```
* 装满背包有几种方法 => `dp[j] += dp[j - nums[i]]`
  * [494. 目标和(01背包)](/dynamic-programming/knapsack-problems/0-1-knapsack/find-target-sum-ways/)
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

      return dp[size]
    ```
  * [518.零钱兑换II(完全背包)](/dynamic-programming/knapsack-problems/unbounded-knapsack/change/)
    ```typescript 
    export function change(coins: number[], amount: number): number {
      const dp: number[] = new Array(amount + 1).fill(0);

      dp[0] = 1;

      for (let i = 0; i < coins.length; i++) {
        for (let j = coins[i]; j <= amount; j++) {
          dp[j] = dp[j] + dp[j - coins[i]];
        }
      }

      return dp[amount];
    }
    ``` 
  * [377. 组合总和IV](/dynamic-programming/knapsack-problems/unbounded-knapsack/combination-sum/) 
    ```typescript 
    export function combinationSum(nums: number[], target: number) {
      const dp: number[] = new Array(target + 1).fill(0);

      dp[0] = 1; 

      for (let i = 0; i <= target; i++) {
        for (let j = 0; j < nums.length; j++) {
          if (i >= nums[j]) {
            dp[i] = dp[i] + dp[i - nums[j]]
          }
        }
      }

      return dp[target];
    }
    ```
  * [70. 爬楼梯进阶版](/dynamic-programming/climbing-stairs/)(一步一个台阶，两个台阶，三个台阶，.......，直到`m`个台阶)
    ```typescript 
    export function climbStairsAd(n: number, m: number): number {
      // n is the nth stairs one want to reach  
      // m is how many steps one can take 
      const dp: number[] = new Array(m).fill(0);
      dp[0] = 1

      // because this is a combination prob, loop the weight first, then the items
      for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
          if (i >= j) {
            dp[i] = dp[i] + dp[i - j];
          }
        }
      }

      return dp[n];
    }
    ```
* 背包最大价值 => `dp[j] = Math.max(dp[j], dp[j - nums[i] + values[i]])`
  * [474.一和零](/dynamic-programming/knapsack-problems/0-1-knapsack/find-max-form/) 
    ```typescript 
    export function findMaxForm(strs: string[], m: number, n: number) {
      const dp: number[][] = new Array(m + 1).fill(0).map(_ => new Array(n + 1).fill(0));

      let zeroNum: number;
      let oneNum: number;


      for (let i = 0; i < strs.length; i++) {
        // reset the zeroNum and oneNum
        // dp[i][j] relys on the previous dp item
        zeroNum = 0;
        oneNum = 0;

        for (let c of strs[i]) {
          if (c === '0') zeroNum++
          else oneNum++
        }

        for (let i = m; i >= zeroNum; i--) {
          for (let j = n; j >= oneNum; j--) {
            dp[i][j] = Math.max(dp[i][j], dp[i - zeroNum][j - oneNum] + 1)
          }
        }
      }

      return dp[m][n];
    }
    ```
* 装满背包最小个数 => `dp[j] = Math.min(dp[j], dp[j - nums[i]])`
  * [322.零钱兑换](/dynamic-programming/knapsack-problems/unbounded-knapsack/change/I/)
    ```typescript 
    export function findMaxForm(strs: string[], m: number, n: number) {
      const dp: number[][] = new Array(m + 1).fill(0).map(_ => new Array(n + 1).fill(0));

      let zeroNum: number;
      let oneNum: number;


      for (let i = 0; i < strs.length; i++) {
        // reset the zeroNum and oneNum
        // dp[i][j] relys on the previous dp item
        zeroNum = 0;
        oneNum = 0;

        for (let c of strs[i]) {
          if (c === '0') zeroNum++
          else oneNum++
        }

        for (let i = m; i >= zeroNum; i--) {
          for (let j = n; j >= oneNum; j--) {
            dp[i][j] = Math.max(dp[i][j], dp[i - zeroNum][j - oneNum] + 1)
          }
        }
      }

      return dp[m][n];
    }
    ```
  * [279.完全平方数](/dynamic-programming/knapsack-problems/unbounded-knapsack/perfect-square/)
    ```typescript 
    export function numSquares(n: number) {
      const dp: number[] = new Array(n + 1).fill(Infinity);

      dp[0] = 0;

      for (let i = 1; i <= n; i++) {
        for (let j = i * i; j <= n; j++) {
          dp[j] = Math.min(dp[j], dp[j - i * i] + 1)
        }
      }

      return dp[n];
    }
    ```


### 背包遍历顺序 

对于0/1背包来说, 先遍历物品还是先遍历背包重量没有差别; 如果DP是二维数组, 内层循环从小打到; 如果是一维数组, 内层循环从大到小.

对于完全背包来说, 内层循环都是从小到大的(因为可重复)

* 顺序造成不同的, 就是排列问题. 先遍历背包重量, 再遍历物品; 
* 组合问题, 先遍历物品, 再遍历背包重量

## 背包问题汇总总结 
![knapsack-problem-review](/static/img/dp/knapsack-review.jpeg)