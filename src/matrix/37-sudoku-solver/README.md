# 37. Sudoku Solver

Write a program to solve a Sudoku puzzle by filling the empty cells.

A sudoku solution must satisfy all of the following rules:

* Each of the digits 1-9 must occur exactly once in each row.
* Each of the digits 1-9 must occur exactly once in each column.
* Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.

The '.' character indicates empty cells.

## Example

![sudoku-solver](../../../static/img/back-tracking/sudoku-solver.png)

```
Input: 
  board = [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
  ]
Output: 
  [
    ["5","3","4","6","7","8","9","1","2"],
    ["6","7","2","1","9","5","3","4","8"],
    ["1","9","8","3","4","2","5","6","7"],
    ["8","5","9","7","6","1","4","2","3"],
    ["4","2","6","8","5","3","7","9","1"],
    ["7","1","3","9","2","4","8","5","6"],
    ["9","6","1","5","3","7","2","8","4"],
    ["2","8","7","4","1","9","6","3","5"],
    ["3","4","5","2","8","6","1","7","9"]
  ]
Explanation: The input board is shown above and the only valid solution is shown below:
```
![solution](../../../static/img/back-tracking/sudoku.png)


## Solution

### Backtrace

use **BackTracing** to go deep into the matrix so that everyone element between 1-9 could be place within every sub-matrices.

1. Determine `backTracing` function and args: 
   * because it only need to modify the sudoku without returning anything, so we could use `true or false` to check it could find a solution or not  
2. Determine loop termination condition: 
   * for the current iteration, there's a number that could fit in the sudoku puzzle that does not violate the 3 rules
3. Logics in each iteration:
  ```
  map(int num from 1 to 9): 
    if(isValid(num, board, row, col): 
      board[row][col] = num.toString() 
      // do the depth callback here
      if(backTracing(board)): 
        return true
      endif
      // backTrace, reset
      board[row][col] = "."
    endif
  endmap
  
  // if no valid result
  return false
  ```
