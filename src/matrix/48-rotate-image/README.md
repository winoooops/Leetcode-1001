# 48. Rotate Image

You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

## Example

![example-1](../../../static/img/array/48-1.jpg)
```
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]
```

![example-1](../../../static/img/array/48-2.jpg)
```
Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
```

## Solution

Because I can't create another matrix to store the result,

1. transpose the matrix 
   ```
   [0,0] <-> [0,0]
   [0,1] <-> [1,0]
   [0,2] <-> [2,0]

   [1,1] <-> [1,1]
   [1,2] <-> [2,1]
   
   [2,2] <-> [2,2]
   ```
2. reverse each row
   ```
   [9,6,3], [8,5,2], [7,4,1]
   into  
   [7,4,1], [8,5,2], [9,6,4]
   ```
   
```ts
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

```


**another approach**:
```ts
function rotate(matrix: number[][]) {
  // n * n matrix
  const n = matrix.length;
  let temp: number;

  for(let i = 0; i < n; i++) {
    for(let j = 0; j < n - i; j++) {
      temp = matrix[i][j];
      matrix[i][j] = matrix[n - 1 - j][n-1-i];
      matrix[n - 1 - j][n - 1 - i] = temp;
    }
  }
  matrix.reverse();
}
```
