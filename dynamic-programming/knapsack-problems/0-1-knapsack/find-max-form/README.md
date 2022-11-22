# 474. 一和零

给你一个二进制字符串数组 `strs` 和两个整数 `m` 和 `n` 。

请你找出并返回 `strs` 的最大子集的长度，该子集中 最多 有 `m` 个 0 和 `n` 个 1 。

> 如果 `x` 的所有元素也是 `y` 的元素，集合 `x` 是集合 `y` 的 子集 。

 

## 示例

```
输入：strs = ["10", "0001", "111001", "1", "0"], m = 5, n = 3
输出：4
解释：最多有 5 个 0 和 3 个 1 的最大子集是 {"10","0001","1","0"} ，因此答案是 4 。
其他满足题意但较小的子集包括 {"0001","1"} 和 {"10","1","0"} 。{"111001"} 不满足题意，因为它含 4 个 1 ，大于 n 的值 3 。
```

```
输入：strs = ["10", "0", "1"], m = 1, n = 1
输出：2
解释：最大的子集是 {"0", "1"} ，所以答案是 2 。
```

## 思路 

这里的 m 和 n 分别可以看成两个背包, 而数组中的元素是需要被装到背包里的元素. 因为有两个背包, 所以我们这里需要使用二维DP数组. 

### 动态五部曲

1. `i` 表示 `m` 背包的重量, `j` 表示 `n` 背包的重量, `dp[i][j]` 表示两个背包的最大子集.
2. 递推公式: dp[i][j]可以由前一个strs里的字符串推导出来, strs的字符串有 zeroNum个0, oneNum个1. 所以递推公式: `dp[i][j] = Math.max(dp[i][j], dp[i - zeroNum][j - oneNum]`;
3. dp数组的初始化: 保证初始化时候每一个格子都是0即可. 
4. 遍历顺序, 首先遍历物品, 即strs数组中的元素, 抓取这个元素当前由几个`0`和几个`1`. 然后再遍历背包`m`和背包`n`;
5. 推导例子: 
![474](/static/img/dp/474.jpg)


### 完整代码 

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

    // calculate the number of ones and zeros
    for (let c of strs[i]) {
      if (c === '0') zeroNum++
      else oneNum++
    }

    // iterate through the weight of both packages from large to small
    for (let i = m; i >= zeroNum; i--) {
      for (let j = n; j >= oneNum; j--) {
        // if not taking anything, the numbers remain to be dp[i][j]
        // if take anything, the number should be dp[i - zeroNum][j - oneNum] + 1
        dp[i][j] = Math.max(dp[i][j], dp[i - zeroNum][j - oneNum] + 1)
      }
    }
  }

  return dp[m][n];
}
```
