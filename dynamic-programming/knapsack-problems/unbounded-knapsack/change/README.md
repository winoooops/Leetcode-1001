# 518. 零钱兑换 II

给你一个整数数组 `coins` 表示不同面额的硬币，另给一个整数 `amount` 表示总金额。

请你计算并返回可以凑成总金额的硬币组合数。如果任何硬币组合都无法凑出总金额，返回 0 。

假设每一种面额的硬币有无限个。 

题目数据保证结果符合 32 位带符号整数。
 

## 示例

```
输入：amount = 5, coins = [1, 2, 5]
输出：4
解释：有四种方式可以凑成总金额：
5=5
5=2+2+1
5=2+1+1+1
5=1+1+1+1+1
```

```
输入：amount = 3, coins = [2]
输出：0
解释：只用面额 2 的硬币不能凑成总金额 3 。
```

```
输入：amount = 10, coins = [10] 
输出：1
```

## 思路 

注意到钱币数量不限这个特性, 把钱币的币值看成物品的重量和价值, 那么这道题目就可以转化为 **无限背包**版本的 [目标和问题](/dynamic-programming/knapsack-problems/0-1-knapsack/find-target-sum-ways/). 

### 动态规划五部曲

1. `dp[j]` 表示 重量为 j 的背包可以装下钱币的**组合**
2. 递推公式: 因为这道题是组合问题, 在钱币无限的前提下, 所以对于某一个格子的背包来说, 它可以有放和不放钱币这两种选择, 分别对应`dp[j]` 和 `dp[j - coins[i]]`. 于是, `dp[j] += dp[j - coins[i]]`;
3. 初始值: 每一个格子都设置为0, 并且注意到不放物品同时也是一种**组合**, 所以`dp[0] = 1`;
4. 遍历顺序: 因为是**组合问题**, 所以先循环遍历物品再遍历背包; 
5. 递推过程: 
    ![518](/static/img/dp/518.jpg)

> 如果求组合数就是外层for循环遍历物品，内层for遍历背包; 如果求排列数就是外层for遍历背包，内层for循环遍历物品。

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
