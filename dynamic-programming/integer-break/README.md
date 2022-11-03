# 343. 整数拆分

给定一个正整数 n ，将其拆分为 k 个 正整数 的和（ k >= 2 ），并使这些整数的乘积最大化。

返回 你可以获得的最大乘积 。


## 示例
```
输入: n = 2
输出: 1
解释: 2 = 1 + 1, 1 × 1 = 1。
```
```
输入: n = 10
输出: 36
解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36。
```

1. `dp[i]`表示数字i能够取得的最大数值
2. 因为对数字i进行划分的话, 切出来的值j一定是小于i的, 那么在动态规划中, 就一定能够找到dp[j]; 那么此时, 对于数字 i 来说, 现在存在三种可能的情况 -- `dp[i]`(内部拆分i) `(i-j) * j(拆成2个数)` 和`dp[i - j]*j(i-j内部再次拆分)` 
3. 初始值: `dp[2] = dp[1] * dp[1]`
4. 按照当前数字i和内部拆分节点j来进行递推
5. 举例
![integer-break](../../static/img/dp/integerbreak.png)

```typescript
export function integerBreak(n: number): number {
  const dp: number[] = new Array(n + 1).fill(0);

  dp[2] = 1;

  for (let i = 3; i <= n; i++) {
    for (let j = 1; j < i / 2; j++) {
      dp[i] = Math.max(dp[i], (i - j) * j, dp[i - j] * j);
    }
  }

  return dp[n];
}
```

