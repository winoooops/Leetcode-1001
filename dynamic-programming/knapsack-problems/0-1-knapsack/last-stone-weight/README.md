# 1049. 最后一块石头的重量 II

有一堆石头，用整数数组 `stones` 表示。其中 `stones[i]` 表示第 `i` 块石头的重量。

每一回合，从中选出任意两块石头，然后将它们一起粉碎。假设石头的重量分别为 x 和 y，且 `x <= y`。那么粉碎的可能结果如下：

    如果 `x == y`，那么两块石头都会被完全粉碎；
    如果 `x != y`，那么重量为 x 的石头将会完全粉碎，而重量为 y 的石头新重量为 `y-x`。

最后，最多只会剩下一块 石头。返回此石头 最小的可能重量 。如果没有石头剩下，就返回 0。

 

## 示例

```
输入：stones = [2,7,4,1,8,1]
输出：1
解释：
组合 2 和 4，得到 2，所以数组转化为 [2,7,1,8,1]，
组合 7 和 8，得到 1，所以数组转化为 [2,1,1,1]，
组合 2 和 1，得到 1，所以数组转化为 [1,1,1]，
组合 1 和 1，得到 0，所以数组转化为 [1]，这就是最优值。
```

## 思路 

### 0/1背包 

从最后一次敲击操作出发, 那么有可能出现两种情况: 1) 敲击后没有石头; 2) 敲击后剩下一个石头. 

1. 敲击后没有石头, 也就意味着对于某一块石头(或者敲击后的剩余石头)来说, 一定会有另一块石头能够恰好和它抵消. 那么 我们其实可以把石头分为两堆, 只要这**两堆石头的重量相等**, 那么敲击结束后一定没有石头; 
2. 如果敲击后剩下一个石头, 那么 为了让最终的石头最小, 那么我们同样可以把石头分成两堆, 只要这**两堆石头重量的差值最小**就可以


> 要想满足最终剩下的石头为最小重量, 那么就需要首先 *尽量* 把两堆石头分成 **相同的重量**, 这样互相敲击之后就是最小的. 于是这道题目就和 416. 分割等和子集 十分类似了. 

### 动规五部曲

1. dp[j] 表示背包重量为 j , 能够背多重的石头
2. 递推公式: `dp[j] = Math.max(dp[j], dp[j - stone[i]] + stone[i])`
3. 初始值: 因为重量都不会是负数, 所以dp中元素的初始值设置为0就可以了. 
4. 遍历顺序: 首先根据 石头顺序遍历, 然后根据背包容量从大到小遍历. 
5. 

### 完整代码
```typescript 
export function lastStoneWeightII(stone: number[]): number {
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
  // 一堆石头的总重量是 dp[optimalSize] 另一堆是 dp[optimalSize]
  // 所以最小重量就是 (sum - dp[optimalSize]) - dp[optimalSize]

  return sum - dp[optimalSize] - dp[optimalSize];
}
```



