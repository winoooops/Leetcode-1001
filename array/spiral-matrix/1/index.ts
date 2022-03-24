type Matrix = Array<Array<number>>

export function spiralMatrixOne(matrix: Matrix) {
  const list = []

  if(!matrix.length) return list

  let rowBegin = 0;
  let rowEnd = matrix.length - 1;

  let columnBegin = 0;
  let columnEnd = matrix[0].length - 1;

  while(rowBegin <= rowEnd && columnBegin <= columnEnd) {
    // 四个循环分别控制matrix的向右, 向下, 向左, 向上移动
    
    // 向右移动
    for(let i = columnBegin; i <= columnEnd; i++ ) {
      list.push(matrix[rowBegin][i])
    }
    rowBegin++

    // 向下移动
    for(let j = rowBegin; j <= rowEnd; j++) {
      list.push(matrix[j][columnEnd])
    }
    columnEnd--

    // 向右移动
    // 需要注意当rowBegin被增加到等于rowEnd的特殊情况
    if(rowBegin <= rowEnd) { 
      for(let x = columnEnd; x >= columnBegin; x--) {
        list.push(matrix[rowEnd][x])
      }
      rowEnd--
    }

    // 向上移动
    // 需要注意特殊情况
    if(columnBegin <= columnEnd) {
      for(let y = rowEnd; y >= rowBegin; y--) {
        list.push(matrix[y][columnBegin])
      }
      columnBegin++
    }
  }
  return list
}
