# Knapsack Problems 背包问题


## 经典背包(The 0/1 Knapsack Problems) 

> 0/1 意味着无法分割单个物品, 如果单个物品可以被分割的话, 那就用贪心算法先根据重量进行排序, 然后分割第一个装不下的物品.


有n件物品和一个最多能背重量为w 的背包。第i件物品的重量是weight[i]，得到的价值是value[i] 。每件物品只能用一次，求解将哪些物品装入背包里物品价值总和最大。
![knapsack problems](../../../static/img/dp/knapsack-problems-1.jpg)

### DP五部曲

![knapsack cells](../../../static/img/dp/knapsack-problems-2.jpg)
* 如果背包的重量来4, 那么我需要取什么样物品0, 物品1和物品2的组合来获得最大重量.



1. `dp[i][j]` 表示从下标为 `[0, i]` 的物品中取, 放进容量为 `j` 的背包, 价值总和最大为 `dp[i][j]`
2. 对于每一件物品来说, 只存在**取** 与 **不取出** 两种状态, 所以在动态规划递推的时候, 只需要拿到 取或者不取 的价值更大的就可以了. 
   * 不放物品: 与 `dp[i][j]` 的上个状态 `dp[i-1][j]` 相同 
   * 存放物品: `dp[i-1][j - weight[i]]` 为背包容量为 `j - weight[i]` 的时候不放物品的最大价值, 那么 `dp[i - 1][j - weight[i]] + value[i]` 就是背包放物品 `i`的最大价值
  所以递推公式就是: `dp[i][j] = Math.max(dp[i-1][j], dp[i-1][j-weight[i]] + value[i])`
3. 初始化: 
   * 如果背包总和 `j` 为0, 就是不存放物品, 那么 `dp[i][0] = 0` 
   * 因为第一次总是会存放 下标为0 的物品, 即 `i` 为 0, 如果 `j >= weight[0]`, `dp[0][j] = value[0]`; 如果 `j < weight[0]`, 那么 `dp[0][j] = 0`; 
   * 对于其他的地方, 初始值设为 0 即可;
4. 有两个遍历的维度, 物品和背包数量, 先遍历物品. 
5. 如下图
   ![knapsack-3](../../../static/img/dp/knapsack-problems-3.jpg)



### 完整代码 

```typescript 
export function knapsack(weight: number[], value: number[], size: number): number {
  const dp: number[][] = new Array(weight.length).fill(0)
    .map(_ => new Array(size + 1).fill(0));

  // init 
  for (let i = weight[0]; i <= size; i++) {
    dp[0][i] = value[0];
  }

  for (let i = 1; i < weight.length; i++) {
    for (let j = 1; j <= size; j++) {
      // dp[i - 1][j] => not taking item 
      // dp[i - 1][j - weight] + value[i] => taking item
      if (j < weight[i]) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i]);
      }
    }
  }
  return dp[weight.length - 1][size]
}
```

## 0/1 背包的一维DP数组 

注意到之前的`dp[i][j]` 其实都可以用`dp[j]`来表示, 其中j依旧代表背包重量. s

1. `dp[j]` 中表示容量为 `j`的背包, 所背的物品价值最大为dp[j]
2. 递推公式: 原本的重量为j, 放入了重量为weight[i]的物品之后, 重量变为`j - weight[i]`, 其所对应的价值为 `dp[j - weight[i]]`. 所以如果当前需要放入物品的话, `dp[j] = dp[j - weight[i]] + value[i]`; 如果当前不放入物品的话, 价值就是`dp[j]`. 所以合起来就是`dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i])`
3. 初始化: 背包重量为0的时候, 最大价值也为0, 所以`dp[0] = 0`; 根据推导公式 `dp[j] = dp[j - weight[i]] + value[i]`. 
4. 遍历顺序, 先遍历物品, 再遍历重量, 双层嵌套递归. 这里需要注意的是, 这里的背包容量是需要从大到小来的(根据递推公式可知). 
5. 


```typescript
export function knapsackTwo(weight: number[], value: number[], size: number): number {
  const dp: number[] = new Array(size + 1).fill(0);

  dp[0] = 0;

  for (let i = 0; i < weight.length; i++) {
    for (let j = size; j >= weight[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i])
    }
  }

  return dp[size];
}
```
