export function rotate(matrix: number[][]) {
  // n * n matrix
  const n = matrix.length;
  let temp: number;

  for(let i = 0; i < n; i++) {
    for(let j = i; j < n; j++) {
      temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  matrix.forEach(arr => arr.reverse());
}
