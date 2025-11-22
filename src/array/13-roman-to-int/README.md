# 13. Roman to Number

Convert a Roman numeral string into its corresponding integer. Symbols follow
the standard subtractive rules (`IV = 4`, `IX = 9`, `XL = 40`, etc.) and the
input represents a valid value in the range `[1, 3999]`.

### Approach

- Build a lookup map for the seven symbols (`I`, `V`, `X`, `L`, `C`, `D`, `M`).
- Scan the string from right to left while keeping track of the **previous**
  value that has been added to the answer.
- If the current value is **smaller** than the previous value, subtract it —
  this captures the subtractive pairs (`IV`, `XC`, `CM`, ...).
- Otherwise add it to the running total and update `prev`.

This works because every subtractive pair places the smaller numeral **before**
the larger one, so when iterating from the end we know exactly when to subtract.

```ts
export function romanToInt(s: string): number {
  const map = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
  ]);

  let prev = 0;
  let result = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    const curr = map.get(s[i])!;
    if (curr < prev) {
      result -= curr;
    } else {
      result += curr;
    }
    prev = curr;
  }

  return result;
}
```

### Example

`s = "MCMXCIV"`

| Character | Value | prev | Action | result |
| --------- | ----- | ---- | ------ | ------ |
| V         | 5     | 0    | +5     | 5      |
| I         | 1     | 5    | -1     | 4      |
| C         | 100   | 1    | +100   | 104    |
| X         | 10    | 100  | -10    | 94     |
| M         | 1000  | 10   | +1000  | 1094   |
| C         | 100   | 1000 | -100   | 994    |
| M         | 1000  | 100  | +1000  | 1994   |

### Complexity

- Time: `O(n)` for a single pass through the string.
- Space: `O(1)` because the lookup map is constant-sized.
