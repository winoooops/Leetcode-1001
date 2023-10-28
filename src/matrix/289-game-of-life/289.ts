import {isValid} from "../37-sudoku-solver/37";

export function gameOfLifeCopy(board: number[][]) {
  const m = board.length;
  const n = board[0].length;

  const copyBoard = board.map(row => [...row]);
  const neighbors = [0, 1, -1];

  for(let row = 0; row < m; row++) {
    for(let col = 0; col < n; col++) {
      let liveNeighbor = 0;
      // go to its neighbor
      for(let i = 0; i < 3; i++) {
        for(let j = 0; j < 3; j++) {
          if(!(neighbors[i] === 0 && neighbors[j] === 0)) {
            let r = row + neighbors[i];
            let c = col + neighbors[j];
            if((r < m && r>=0) && (c<n && c>=0) && copyBoard[r][c] === 1) {
              liveNeighbor++;
            }
          }
        }
      }

      if(copyBoard[row][col] === 1 && (liveNeighbor < 2 || liveNeighbor > 3)) {
        board[row][col] = 0;
      }

      if(copyBoard[row][col] === 0 && liveNeighbor === 3) {
        board[row][col] = 1;
      }
    }
  }
}

export function gameOfLifeOptimal(board: number[][]): void {
  const m = board.length;
  const n = board[0].length;

  for(let row = 0; row < m; row++) {
    for(let col = 0; col < n; col++) {

      let alive = calculateAlive(row, m, col, n, board);

      if(board[row][col] === 1) {
        if(alive == 2 || alive === 3) {
          board[row][col] += 2;
        }
      } else if(board[row][col] === 0) {
        if(alive === 3) {
          board[row][col] += 2;
        }
      }
    }
  }

  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      board[i][j] >>= 1;
    }
  }
}

export function calculateAlive(row: number, m: number, col: number, n: number, board: number[][]) {
  let alive = 0;

  for (let i = Math.max(0, row - 1); i <= Math.min(m - 1, row + 1); i++) {
    for (let j = Math.max(0, col - 1); j <= Math.min(n - 1, col + 1); j++) {
      if (row === i && col === j) continue;

      if (board[i][j] % 2 === 1) alive++;
    }
  }

  return alive;
}
