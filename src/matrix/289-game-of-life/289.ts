import {isValid} from "../37-sudoku-solver/37";

export function gameOfLife(board: number[][]): void {
  const m = board.length;
  const n = board[0].length;

  const copyBoard = board.map(row => [...row]);
  console.log(copyBoard);
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
