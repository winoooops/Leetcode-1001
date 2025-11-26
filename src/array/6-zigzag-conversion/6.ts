export function convertBF(s: string, numRows: number): string {
  if (numRows <= 1 || s.length <= numRows) {
    return s;
  }
  const board: string[][] = Array.from({length: numRows}, (): string[] => []);

  let index = 0;
  let col = 0;
  let row = 0;
  let inc = 1;
  while (index < s.length) {
    if (row === 0) {
      inc = 1;
    }

    if (row === numRows - 1) {
      inc = -1;
    }

    board[row][col] = s[index++];
    row += inc;
    col += inc > 0 ? 0 : 1;
  }

  let result = '';

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (!board[i][j]) continue;
      result += board[i][j];
    }
  }

  return result;
}

export function convertFlag(s: string, numRows: number): string {
  if (numRows <= 1 || s.length <= numRows) return s;
  const result: string[] = Array.from({length: numRows}, () => '');
  let inc = -1;
  let row = 0;
  for (const c of s) {
    if (row === 0 || row === numRows - 1) {
      inc *= -1;
    }
    result[row] += c;
    row += inc;
  }

  return result.join('');
}
