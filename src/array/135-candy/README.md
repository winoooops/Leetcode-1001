# 135. Candy

`N` kids stand in a line and each has a rating. We must hand out candies such that:

1. Each kid gets at least one candy.
2. Any child with a higher rating than an immediate neighbor must receive more candies.

Find the minimum total candies required.

## Examples

- Input: `[1, 0, 2]` → Output: `5` (distribution `2, 1, 2`)
- Input: `[1, 2, 2]` → Output: `4` (distribution `1, 2, 1`)

## Approach: two-pass greedy

Meeting both neighbor constraints in a single sweep is tricky because a child’s final count depends on both sides. Instead, run two directional passes:

1. Initialize every entry in `candies` to `1`.
2. Left-to-right: if `ratings[i] > ratings[i - 1]`, set `candies[i] = candies[i - 1] + 1`.
3. Right-to-left: if `ratings[i] > ratings[i + 1]`, set `candies[i] = max(candies[i], candies[i + 1] + 1)`.

The maximum of the two passes enforces both neighbor constraints simultaneously. Summing the array gives the minimal total.

```ts
export function candy(ratings: number[]): number {
  const n = ratings.length;
  if (n === 0) return 0;

  const candies = Array.from({length: n}, () => 1);

  for (let i = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candies[i] = candies[i - 1] + 1;
    }
  }

  for (let i = n - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candies[i] = Math.max(candies[i], candies[i + 1] + 1);
    }
  }

  return candies.reduce((sum, count) => sum + count, 0);
}
```

### Complexity

- Time: `O(n)` — two linear passes.
- Space: `O(n)` — array storing candy counts.

## Alternative ideas

### Slope tracking (single pass)

This technique compresses the two passes into one sweep by measuring the length of the current ascending slope (`inc`) and the current descending slope (`dec`):

```ts
export function candySlope(ratings: number[]): number {
  const n = ratings.length;
  if (n === 0) return 0;

  let total = 1;
  let inc = 1; // length of the last increasing run
  let dec = 0; // length of the current decreasing run
  let prev = 1; // candies given to ratings[i - 1]

  for (let i = 1; i < n; i++) {
    if (ratings[i] >= ratings[i - 1]) {
      dec = 0;
      prev = ratings[i] === ratings[i - 1] ? 1 : prev + 1;
      total += prev;
      inc = prev;
    } else {
      dec++;
      if (dec === inc) dec++; // ensure peak gets max(inc, dec)
      total += dec;
      prev = 1;
    }
  }
  return total;
}
```

- When the slope rises or stays flat, reset the descending counter and grow `prev`.
- When the slope falls, grow `dec`; if the descending length catches the previous increasing length, give one extra candy to the former peak (by bumping `dec`). The current child now sits at the end of a decreasing run whose right neighbor already received `dec - 1` candies, so we can safely reset `prev = 1`—their eventual candy count is encoded by `dec`, not by `prev`.
- Add `prev` or `dec` to the running total each step. Space drops to `O(1)` because no array is needed, but the reasoning is subtler than the two-pass method.
- Intuition for the bump: when `dec === inc`, the descending run is as long as the preceding ascent. The peak’s candy count would otherwise equal the first child on the way down, so we conceptually “treat” the peak as the start of the descending segment and give it one extra candy, implemented by incrementing `dec`.

#### Worked example (with diagram)

Consider `ratings = [1, 2, 4, 3, 2, 1, 2]`. The slope view looks like a mountain followed by a valley:

```
rating:  1   2   4   3   2   1   2
shape :      ↑   ↑   ↓   ↓   ↓   ↑
             rising      falling  rising
```

| i | rating | comparison vs. `i-1` | `inc` | `dec` | `prev` (candies at `i`) | `total` | note |
| - | ------ | -------------------- | ----- | ----- | ----------------------- | ------- | ---- |
| 0 | 1      | seed value           | 1     | 0     | 1                       | 1       | everyone starts with one candy |
| 1 | 2      | up                   | 2     | 0     | 2                       | 3       | ascending slope grows `prev` |
| 2 | 4      | up                   | 3     | 0     | 3                       | 6       | peak length now `inc = 3` |
| 3 | 3      | down                 | 3     | 1     | 1                       | 7       | start counting a descending run |
| 4 | 2      | down                 | 3     | 2     | 1                       | 9       | descent continues |
| 5 | 1      | down                 | 3     | 4     | 1                       | 13      | `dec` would reach 3 → bump to 4 so peak gets extra candy |
| 6 | 2      | up                   | 2     | 0     | 2                       | 15      | reset `dec`, resume rising |

- During the long decline (indices `2 → 5`), the descent length (`dec`) reaches the earlier ascent length (`inc = 3`). Without the bump, the peak (index `2`) would still have only 3 candies, tying with the first kid on the descent. By bumping `dec`, we conceptually include the peak as the first node of the descending segment, giving it one extra candy so it remains strictly higher than both neighbors.
- Once the sequence rises again at index `6`, the descending counter resets and the algorithm continues with fresh `inc/dec` tracking.

The summed total (15) matches the answer produced by the simpler two-pass approach, but this method only keeps a few scalars in memory.

### Priority queue / topo order

Process children from low rating to high; each assignment depends on already settled neighbors. Easier to reason about correctness but slower (`O(n log n)`).

`135.spec.ts` iterates over a list of implementations so alternative strategies can be added and validated side-by-side.
