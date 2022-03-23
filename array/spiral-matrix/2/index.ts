export function sprialMatrixTwo(n: number) {
  const result: Array<number[]> = new Array(n).fill(1).map(i => new Array(n));

  let rowBegin = 0;
  let rowEnd = n - 1;
  let columnBegin = 0;
  let columnEnd = n - 1;
  let number = 1

  while(rowBegin <= rowEnd && columnBegin <= columnEnd) {
    // left -> right 
    for(let i = columnBegin ; i <= columnEnd ; i++) {
      result[rowBegin][i] = number
      number++
    }
    rowBegin++
    
    // top -> bottom
    for(let i = rowBegin ; i <= rowEnd; i++ ) {
      result[i][columnEnd] = number
      number++
    }
    columnEnd--

    // right -> left 
    for(let i = columnEnd; i >= columnBegin; i--) {
      result[rowEnd][i] = number
      number++
    }
    rowEnd--

    // bottom -> top 
    for(let i = rowEnd; i >= rowBegin; i--) {
      result[i][columnBegin] = number
      number++
    }
    columnBegin++
  }
  return result
}
