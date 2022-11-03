# 62. 不同路径

一个机器人位于一个`m x n`网格的左上角 （起始点在下图中标记为 “Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。

问总共有多少条不同的路径？

![robot-maze](../../static/img/dp/robot_maze.png) 

## 示例

```
输入：m = 3, n = 7
输出：28
```

```
输入：m = 3, n = 2
输出：3
解释：
从左上角开始，总共有 3 条路径可以到达右下角。
1. 向右 -> 向下 -> 向下
2. 向下 -> 向下 -> 向右
3. 向下 -> 向右 -> 向下
```

```
输入：m = 7, n = 3
输出：28
```
```
输入：m = 3, n = 3
输出：6
```

## 思路 

### 二叉树
这题如果用二叉树深度递归的话会超时间, 可以改采用

### DP

机器人从(0 , 0) 位置出发，到(m - 1, n - 1)终点。

1. `dp[i][j]` 表示机器人走到第 i 行第 j 列的位置上. 
2. 因为机器人只有向左走(行上行动)和向下周(列上行动)两种选择, 所以要想走到第i行第j列`来说它可以从第i-1行第j列或者第i行j-1列出发. 即`dp[i][j] = dp[i-1][j] + dp[i][j-1]`
3. 因为在同行上行走和在同列上行走都自由一种走法, 所以初始值可以如下表示

    `for(let i = 0; i < m; i++) dp[i][0] = 1`
    `for(let j = 0; j < n; j++) dp[0][j] = 1` 
4. 递归顺序: 在格子里从左到右, 从上到下, 所以需要使用双层嵌套循环
5. `dp[1][1] = dp[0][1] + dp[1][0]`
  ![maze-solve](../../static/img/dp/maze-solve.png)


```typescript
export function uniquePath(m: number, n: number): number {
  const dp: number[][] = new Array(m).fill(0).map(_ => new Array(n).fill(0))

  for (let i = 0; i < m; i++) dp[i][0] = 1;
  for (let j = 0; j < n; j++) dp[0][j] = 1;

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    }
  }

  return dp[m - 1][n - 1]
}
```


# 63. 不同路径II 

一个机器人位于一个`m x n`网格的左上角 （起始点在下图中标记为 “Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish”）。

现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？

网格中的障碍物和空位置分别用 1 和 0 来表示。


## 示例

![robot-ob](../../static/img/dp/robot-maze-ob.jpg)
```
输入：obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
输出：2
解释：3x3 网格的正中间有一个障碍物。
从左上角到右下角一共有 2 条不同的路径：
1. 向右 -> 向右 -> 向下 -> 向下
2. 向下 -> 向下 -> 向右 -> 向右
```

![robot-ob2](../../static/img/dp/robot-maze-ob2.jpg)
```
输入：obstacleGrid = [[0,1],[0,0]]
输出：1
```

## 思路

在第i行第j列遇到障碍就表示这条走不通, 也就在这之后的的`dp[i][j] = 0`

```typescript
export function uniquePathWithObstacles(obstaclesGrid: number[][]): number {
  const m = obstaclesGrid.length;
  const n = obstaclesGrid[0].length;

  const dp: number[][] = new Array(m).fill(0).map(_ => new Array(n).fill(0)) // 每个格子默认初始值为0
  for(let i = 0; i < m && obstaclesGrid[i][0] === 0; i++) dp[i][0] = 1;
  for(let j = 0; j < n && obstaclesGrid[0][j] === 0; j++) dp[0][j] = 1;

  for(let i = 1; i < m; i++) {
    for(let j = 1; j < n; j++) {
      if(obstaclesGrid[i][j] === 1) continue; 
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    }
  }

  return dp[m - 1][n - 1]
}
```
