# 51.N皇后 

按照国际象棋的规则，皇后可以攻击与之处在同一行或同一列或同一斜线上的棋子。

n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。

给你一个整数 `n` ，返回所有不同的 **n皇后问题** 的解决方案。

每一种解法包含一个不同的 n 皇后问题 的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。


## 示例
![queens](../../static/img/back-tracking/queens.jpeg)
```
输入：n = 4
输出：[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
解释：如上图所示，4 皇后问题存在两个不同的解法。
```

```
输入：n = 1
输出：[["Q"]]
```

## 思路 


所以实际上这个2维棋盘可以抽象成一棵树
![queens2](../../static/img/back-tracking/queens2.jpeg)


### 回溯法 

1. 递归需要的参数: 棋盘的大小`n: number`, 当前递归深度(第几行)`row: number`
2. 递归终止的条件: `if(row === n) result.push(chessboard)`
3. 单层需要处理的逻辑: 判断是否符合条件, 如果符合往下递归
  ```typescript 
  function backTracking(row: number, chessboard: string[][]) {
    // 终止条件 
    if(n === row) {
      return results.push([...chessboard].map(i => i.join("")))
    }

    // 遍历列
    for(let col = 0 ; col < n ; col++) {
      // 如果不符合条件直接跳过
      if(!isValid(chessboard, row, col, n)) continue

      // 符合条件更改棋盘
      chessboard[row][col] = "Q"

      // 往下递归
      backTracking(row + 1, chessboard)

      // 回溯
      chessboard[row][col] = "."
    }
  }
  ```

> 皇后可以横着, 竖着, 斜着走. 也就是说需要满足3个约束条件: 
> * 1) 不能同行
> * 2) 不能同列
> * 3) 不能同斜线

判断新的皇后是否能够让这个棋盘符合条件
```typescript 
function isValid(chessboard: string[][], row: number, col: number, n: number): boolean {
  // 判断列
  for(let i = 0 ; i < row; i++) {
    if(chessboard[i][col] === "Q") return false
  }

  // 判断左边135度
  let x = row - 1
  let y = col - 1

  /* !: 注意这里如果使用双层for循环的话就无法实现同时增减 */ 
  while(x >= 0 && y >= 0) {
    if(chessboard[x--][y--] === "Q") return false
  }

  // 判断右边45度
  x = row - 1 
  y = col + 1

  while(x >= 0 && y < n) {
    if(chessboard[x--][y++] === "Q") return false
  }

  return true
}

```

> 因为最终返回的结果可能不止一个, 所以填入结果的时候注意不要更改原数组. 

### 完整代码

```typescript 
export function solveNQueens(n: number): string[][] {
  const results: string[][] = []
  if(n <= 0) return results

  const chessboard: string[][] = new Array(n).fill(0).map(_ => new Array(n).fill("."))
  
  function backTracking(row: number, chessboard: string[][]) {
    if(n === row) {
      return results.push([...chessboard].map(i => i.join("")))
    }

    for(let col = 0 ; col < n ; col++) {
      if(!isValid(chessboard, row, col, n)) continue

      chessboard[row][col] = "Q"

      backTracking(row + 1, chessboard)

      chessboard[row][col] = "."
    }
  }

  backTracking(0, chessboard)

  return results
}

function isValid(chessboard: string[][], row: number, col: number, n: number): boolean {
  for(let i = 0 ; i < row; i++) {
    if(chessboard[i][col] === "Q") return false
  }

  let x = row - 1
  let y = col - 1

  while(x >= 0 && y >= 0) {
    if(chessboard[x--][y--] === "Q") return false
  }

  x = row - 1 
  y = col + 1

  while(x >= 0 && y < n) {
    if(chessboard[x--][y++] === "Q") return false
  }

  return true
}

```




