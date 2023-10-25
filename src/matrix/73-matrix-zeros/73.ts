export function setZerosOne(matrix: number[][]) {
  const m = matrix.length;
  const n: number = matrix[0].length;

  const rowMarker: boolean[] = new Array(m).fill(false);
  const colMarker: boolean[] = new Array(n).fill(false);

  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      if(matrix[i][j] === 0) {
        rowMarker[i] = true;
        colMarker[j] = true;
      }
    }
  }

  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      if(rowMarker[i] || colMarker[j]) {
        matrix[i][j] = 0;
      }
    }
  }
}

export function setZerosTwo(matrix: number[][]) {
  const m = matrix.length;
  const n = matrix[0].length;
  let flagCol = false;
  let flagRow = false;

  for(let i = 0; i < m; i++) {
    if(matrix[i][0] === 0) {
      flagCol = true;
      break;
    }
  }

  for(let j = 0; j < n; j++) {
    if(matrix[0][j] === 0) {
      flagRow = true;
      break;
    }
  }


  for(let i = 1; i < m; i++) {
    for(let j = 1; j < n; j++) {
      if(matrix[i][j] === 0) {
        matrix[i][0] = matrix[0][j] = 0;
      }
    }
  }

  for(let i = 1; i < m; i++) {
    for(let j = 1; j < n; j++) {
      if(matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  if(flagCol) {
    for(let i = 0; i < m ;i++) {
      matrix[i][0] = 0;
    }
  }

  if(flagRow) {
    for(let j = 0; j < n; j++) {
      matrix[0][j] = 0;
    }
  }
}
