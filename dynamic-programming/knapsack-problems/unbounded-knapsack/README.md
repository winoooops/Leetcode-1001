# 完全背包 

假设有 `n` 种物品, 每种物品有一个重量`weight[i]`和一个价值`value[i]`. 但每种物品的数量是**无限**的; 同时有一个背包, 最大载重量为 M, 现在从 n 中选取若干件(同一种物品可以选择多次), 使其重量的和小于或等于 M, 使得价值的和最大. 

> **完全背包和01背包问题唯一不同的地方就是，每种物品有无限件。**

## 思路 

因为一个物品现在可以拿无限个, 所以队友某一件物品来说, 可以采取的拿取策略的下限就是一个都不拿即 0 个, 上限就是拿取 `当前重量 / 物品重量` 个, 记作 k 个. 所以这个问题可以在 [0/1背包](../0-1-knapsack/)的基础上多一个0-k的循环(**每一个子问题都是一个0/1背包问题**).

### 朴素算法: 三层循环转化成0/1背包 

```typescript
export function unboundedKnapsack(weight: number[], value: number[], size: number): number {
  const dp: number[] = new Array(size + 1).fill(0);

  // iterate throughg the items
  for (let i = 0; i < weight.length; i++) {
    // iterate through the sizes
    for (let j = size; j >= weight[i]; j--) {
      // in the context of size j, the maximum number of item i I can put in
      for (let k = 0; k <= Math.floor(j / weight[i]); k++) {
        dp[j] = Math.max(dp[j], dp[j - k * weight[i]] + k * value[i])
      }
    }
  }

  return dp[size];
}
```

### 优化算法 

首先用表格递推的话, 我们可以列出下面这个递推表格. 
![complete](/static/img/dp/complete-knapsack.png)

通过观察我们可以看出, 对于某一个格子来说, 可以选择拿前一个物品的对应的重量 `dp[i-1][j]`; 因为可以重复选取, 也可以选择同一行去掉当前物品重量格子对应的重量 `dp[i][j - w[i]] + value[i]`

所以这个优化算法用动规五部曲就是: 

1. dp[i][j] 表示 对第 i 个物品并且背包重量为 j 时可以装下的最大重量. 
2. 递推公式: `dp[i][j] = Math.max(dp[i-1][j], dp[i][j - weight[i]] + value[i])`
3. 初始值: 每一个格子初始值为 0 即可
4. 遍历的顺序: 先遍历物品, 再遍历重量 
5. 递推过程如上图



> 扩展: 把递推公式压缩之后会发现 `dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i]`, 这个公式和0/1背包的递推公式一模一样. **注意我们在0/1背包时候采用的是倒序遍历, 在完全背包中需要用正序遍历.**
