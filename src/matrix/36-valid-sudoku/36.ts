export function isValidSudokuOptimal(board: string[][]): boolean {
  const boardSize = board.length;
  const boxSize = boardSize / 3;
  const EMPTY = ".";

  const rowSet = new Set();
  const colSet = new Set();
  const boxSet = new Set();

  // one iteration check 3 rules
  for(let i = 0; i < boardSize; i++) {
    // because is a 9*9 boards, so the length of each iteration is the same
    // clear before next iteration round
    rowSet.clear();
    colSet.clear();
    boxSet.clear();

    for(let j = 0; j < boardSize; j++) {
      const rowEle = board[i][j];
      const colEle = board[j][i];

      if(rowEle !== EMPTY) {
        if(rowSet.has(rowEle)) return false;
        rowSet.add(rowEle);
      }

      if(colEle !== EMPTY) {
        if(colSet.has(colEle)) return false;
        colSet.add(colEle);
      }

      let x = Math.trunc(i / 3) * 3 + Math.trunc(j / 3);
      let y = (i % 3) * 3 + j % 3;
      // console.log(`now checking [${i}][${j}], [${j}][${i}], [${x}][${y}]`)
      // console.log(`the element is in box_${Math.trunc(i / 3) + Math.trunc(j / 3)}`)
      const boxEle = board[x][y];
      if(boxEle !== EMPTY) {
        if(boxSet.has(boxEle)) return false;
        boxSet.add(boxEle);
      }
    }
  }

  return true;
}

export function isValidSudokuSimulation(board: string[][]): boolean {
  const boardSize = board.length;
  const boxSize = boardSize / 3;
  const EMPTY = ".";

  const rowMap:Map<number, Set<number>> = new Map();
  const colMap:Map<number, Set<number>> = new Map();
  const boxMap:Map<number, Set<number>> = new Map();

  for(let i = 0; i < 9; i++) {
    rowMap.set(i, new Set());
    colMap.set(i, new Set());
    boxMap.set(i, new Set());
  }

  for(let i = 0; i < boardSize; i++) {
    for(let j = 0; j < boardSize; j++) {
      if(board[i][j] === EMPTY) continue;

      const num = Number(board[i][j]);

      const box_idx = Math.floor(i / 3) * boxSize + Math.floor(j / 3);

      if(rowMap.get(i)?.has(num) || colMap.get(j)?.has(num) || boxMap.get(box_idx)?.has(num)) return false;

      rowMap.get(i)?.add(num);
      colMap.get(j)?.add(num);
      boxMap.get(box_idx)?.add(num);
    }
  }

  return true;
}
