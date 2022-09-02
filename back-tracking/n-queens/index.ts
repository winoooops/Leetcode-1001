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

