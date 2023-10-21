export function isValid(board: string[][], candidate: string, row: number, col: number): boolean {
  // check row
  for(let i = 0; i < 9; i++) {
    if(candidate === board[row][i]) return false;
  }

  // check col
  for(let j = 0; j < 9; j++) {
    if(candidate === board[j][col]) return false;
  }

  // check within it's sub-matrix
  const startX = Math.floor(row / 3) * 3;
  const startY = Math.floor(col / 3) * 3;

  for(let x = startX; x < startX + 3; x++) {
    for(let y = startY; y < startY + 3; y++) {
      if(candidate === board[x][y]) return false;
    }
  }

  return true;
}


export function sudokuSolver(board: string[][]): boolean{
  for(let row = 0; row < 9; row++) {
    for(let col = 0; col < 9; col++) {
      if(board[row][col] !== ".") continue;

      for(let c = 1; c <= 9; c++) {
        if(isValid(board, c.toString(), row, col)) {
          board[row][col] = c.toString();

          if(sudokuSolver(board)) return true;

          board[row][col] = ".";
        }
      }
      return false;
    }
  }

  return true;
}
