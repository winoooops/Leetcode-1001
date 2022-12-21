# 70. 爬楼梯

假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 

## 示例
```
输入：n = 2
输出：2
解释：有两种方法可以爬到楼顶。
1. 1 阶 + 1 阶
2. 2 阶
```
```
输入：n = 3
输出：3
解释：有三种方法可以爬到楼顶。
1. 1 阶 + 1 阶 + 1 阶
2. 1 阶 + 2 阶
3. 2 阶 + 1 阶
```

## 思路 

### DP
因为对于某一层楼梯而言, 一定会有两种方式上来: 从前两阶梯上来, 或者从前一个阶梯上来.也就是说对于爬到这一层阶梯的方法一定是爬到前两层和前一层的和. 很容易通过推导出动态规划的递推公式. 

1. dp[i] 中的 i 表示某层阶梯
2. 爬到第i层的方法 = 爬到i-1层的方法 + 爬到i-2层的方法: `dp[i] = dp[i - 1] + dp[i - 2]`
3. 初始值: `dp[1] = 1; dp[2] = 2`
4. 按照层数遍历 
5. `dp[3] = dp[2] + dp[1]`, `dp[4] = dp[3] + dp[2]`

```typescript
export function climbStairs(n: number): number {
  const dp: number[] = [];

  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n]
}
```

## 进阶

如果把题目改为一步一个台阶，两个台阶，三个台阶，.......，直到 m个台阶。问有多少种不同的方法可以爬到楼顶呢？那么此时就是一个完全背包问题的排列（不同顺序有差）问题。

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

 
