# 12. Integer to Roman

Convert an integer `num` (`1 <= num <= 3999`) into its Roman numeral string.
Roman numerals use subtractive pairs such as `IV` (4), `IX` (9), and `CM` (900)
in addition to the basic symbols.

### Approach

The greedy strategy works because Roman numerals are canonical: the largest
symbol that fits is always part of the optimal representation.

1. Prepare a descending list of `(value, numeral)` pairs, including the
   subtractive ones:  
   `[(1000, 'M'), (900, 'CM'), (500, 'D'), ..., (4, 'IV'), (1, 'I')]`.
2. Walk through the list, subtracting `value` from `num` while it still fits and
   append the corresponding `numeral` to the answer.
3. Move to the next pair when the current value no longer fits.

```ts
export function intToRoman(num: number): string {
  const pairs = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
  ] as const;

  let result = '';

  for (const [value, symbol] of pairs) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;
}
```

### Example

`num = 1994`

| Step | Remaining | Symbol | Result |
| ---- | --------- | ------ | ------ |
| 1    | 1994      | `M`    | `M`    |
| 2    | 994       | `CM`   | `MCM`  |
| 3    | 94        | `XC`   | `MCMXC`|
| 4    | 4         | `IV`   | `MCMXCIV` |

### Complexity

- Time: `O(1)` — the loop iterates over a fixed set of 13 pairs.
- Space: `O(1)` — aside from the output string, only constant storage is used.
