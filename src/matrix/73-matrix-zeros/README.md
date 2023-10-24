# 73. Set Matrix Zeroes 

Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

> You must do it in place.

## Example

![73-1](../../../static/img/array/73-1.jpg)
```
Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]
```



![73-2](../../../static/img/array/73-2.jpg)
```
Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
```



## Solution

### 1. use 2 marker list
> Time Complexity: ` O(mn)` because need to iterate the matrix for twice, space complexity: `O(m + n)`

```ts
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
```

### 2. use 2 constants

1. in order to prevent row 0 and col 0 converting everything to 0, ust 2 constant to take down whethere they should be 0s in the end;
2. go through every element from `(1->m)` rows and `(1-n)`cols, if the element is 0, make `matrix[i][0]` and `matrix[0][j]` to be 0
3. go through every element again from `(1->m)` rows and `(1-n)`cols, convert they into 0, if its `matrix[i][0] ` and `matrix[0][j]` equal to 0.
4. lastly convert the first row and first columns based on the 2 constants from step 1

```ts
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
```


