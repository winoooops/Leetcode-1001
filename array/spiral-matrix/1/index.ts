type Matrix = Array<Array<number>>

export function spiralMatrixOne(matrix: Matrix) {
  const list = []

  if(!matrix.length) return list

  let rowBegin = 0;
  let rowEnd = matrix.length - 1;

  let columnBegin = 0;
  let columnEnd = matrix[0].length - 1;

  while(rowBegin < rowEnd && columnBegin < columnEnd) {
    // 四个循环分别控制matrix的向右, 向下, 向左, 向上移动
    
    // 向右移动
    for(let i = columnBegin; i < columnEnd; i++ ) {
      list.push(matrix[rowBegin][i])
    }

    // 向下移动
    for(let j = rowBegin; j < rowEnd; j++) {
      list.push(matrix[j][columnEnd])
    }

    // 向右移动
    for(let x = columnEnd; x > columnBegin; x--) {
      list.push(matrix[rowEnd][x])
    }

    // 向上移动
    for(let y = rowEnd; y > rowBegin; y--) {
      list.push(matrix[y][columnBegin])
    }
    
    rowBegin++
    rowEnd--
    columnBegin++
    columnEnd--
  }
  
  if(rowBegin === rowEnd) {
    for(let z = columnBegin; z <= columnEnd ;z++){
      list.push(matrix[rowBegin][z])
    }
  } else if(columnBegin === columnEnd) {
    for(let z = rowBegin; z <= rowEnd; z++) {
      list.push(matrix[z][columnBegin])
    }
  }

  return list
}
