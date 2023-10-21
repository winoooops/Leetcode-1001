export function spiralOrder(matrix: number[][]): number[] {
  const m = matrix.length;
  const n = matrix[0].length;
  const result: number[] = [];
  let rowBegin = 0, rowEnd = m - 1, colBegin = 0, colEnd = n - 1;

  while(rowBegin <= rowEnd && colBegin <= colEnd) {
    for(let i = colBegin; i <= colEnd; i++) {
      result.push(matrix[rowBegin][i]);
    }
    rowBegin++;

    for(let j = rowBegin; j <= rowEnd; j++) {
      result.push(matrix[j][colEnd]);
    }
    colEnd++;

    if(rowBegin <= rowEnd) {
      for(let x = colEnd; x >= colBegin; x--) {
        result.push(matrix[rowEnd][x]);
      }
      rowEnd--;
    }

    if(colBegin <= colEnd) {
      for(let y = rowEnd; y >= rowBegin; y--) {
        result.push(matrix[y][colBegin]);
      }
      colBegin++;
    }
  }

  return result;
}
