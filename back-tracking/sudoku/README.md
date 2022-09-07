# 解数

编写一个程序，通过填充空格来解决数独问题。

一个数独的解法需遵循如下规则： 数字 1-9 在每一行只能出现一次。 数字 1-9 在每一列只能出现一次。 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。 空白格用 '.' 表示。


## 示例
![sudoku](../../static/img/back-tracking/sudoku.png)

## 思路 

因为解决数独题的关键是决定每行每一列的单元格内需要放什么数字, 所以这里需要用双层for循环遍历单元格然后再开始递归. 遇到不符合条件的便回溯. 

### 判定数独是否合法 
1. 同行内没有重复元素 
2. 同列内没有重复元素 
3. 9宫格内没有重复元素 

```typescript 
export function isValid(board: string[][], candidate: string, row: number, col: number): boolean {
  // row 
  for (let i = 0; i < 9; i++) {
    if (candidate === board[row][i]) return false
  }

  // column 
  for (let j = 0; j < 9; j++) {
    if (candidate === board[j][col]) return false
  }

  // submatrix
  const startX = Math.floor(col / 3) * 3
  const startY = Math.floor(row / 3) * 3

  for (let i = startY; i < startY + 3; i++) {
    for (let j = startX; j < startX + 3; j++) {
      if (board[i][j] === candidate) return false
    }
  }

  return true
}
```

### 递归回溯 
1. 需要的参数: `board: string[][]`
2. 递归终止的条件: 
   * 如果尝试了0-9的数字都无法让数独合法, 那么就返回false
   * 如果找到了可以让数独合法的数字,立即返回true 
3. 完整代码 
```typescript 
export function solveSudoku(board: string[][]): boolean {
  for(let row = 0; row < board.length; row++) {
    for(let column = 0; column < board.length; column++) {
      if(board[row][column] !== ".") continue

      for(let c = 1; c <= 9; c++) {
        if(isValid(board, c.toString(), row, column)) {
          board[row][column] = c.toString()

          if(solveSudoku(board)) return true

          board[row][column] = "."
        }
      }
      return false
    }
  }
  return true
}

export function isValid(board: string[][], candidate: string, row: number, col: number): boolean {
  // row 
  for (let i = 0; i < 9; i++) {
    if (candidate === board[row][i]) return false
  }

  // column 
  for (let j = 0; j < 9; j++) {
    if (candidate === board[j][col]) return false
  }

  // submatrix
  const startX = Math.floor(col / 3) * 3
  const startY = Math.floor(row / 3) * 3

  for (let i = startY; i < startY + 3; i++) {
    for (let j = startX; j < startX + 3; j++) {
      if (board[i][j] === candidate) return false
    }
  }

  return true
}
```
