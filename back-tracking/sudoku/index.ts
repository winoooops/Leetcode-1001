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
