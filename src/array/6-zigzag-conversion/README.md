## 6. Zig Zag Conversion

The goal is to write the characters of `s` in a zig-zag pattern across `numRows`
rows and then read them row by row.

### convertBF — build the entire grid

1. Guard against degenerative inputs (`numRows <= 1` or `s.length <= numRows`)
   because the zig-zag collapses to the original string.
2. Allocate a 2D board with `numRows` arrays and walk the board while tracking
   the current row, column, and direction.
3. Fill the board one character at a time, moving down a column or diagonally
   up-right by flipping the direction when we hit the top or bottom row.
4. Finally, scan the board row by row and concatenate the characters that were
   written.
   
```ts
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
```

This approach is easy to visualize but uses more memory because we store the
entire sparse grid. Time complexity is `O(n)` and space complexity is also
`O(n)` for the board.

### convertFlag — append directly to each row

1. Apply the same early-return guard as the brute-force solution.
2. Maintain an array of `numRows` strings representing the characters collected
   in each row.
3. Iterate over `s` and append each character to the active row, flipping the
   direction flag when we reach the first or last row so the pointer moves up
   and down the rows just like the zig-zag.
4. Join all row strings at the end.

```ts
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
```

Because we never materialize the 2D board we only store the row strings, which
keeps the complexity to `O(n)` time and `O(n)` space with a small constant
factor. The direction guard prevents the previous bug where `numRows = 1`
caused out-of-bounds writes.
