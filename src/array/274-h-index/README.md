# 274. H-Index

Given an array `citations` where `citations[i]` is the citation count of the
`i`-th paper, return the author's h-index. The h-index is the largest `h` such
that there are at least `h` papers with `≥ h` citations.

## Intuition

Once the citation counts are sorted in ascending order, scanning from left to
right lets us reason about how many papers remain to the right of each index.
If there are `n - i` papers remaining (including the current one) and the
smallest of them already has `≥ n - i` citations, then every paper to its right
also meets that threshold, so `h = n - i` is feasible.

## Approach

1. Sort the array in ascending order.
2. For each index `i`, compute `h = n - i`.  
   When `citations[i] ≥ h`, we have found at least `h` papers with at least `h`
   citations, so return that value.
3. If the scan completes without satisfying the condition, the answer is `0`.

```ts
export function hIndex(citations: number[]): number {
  const sorted = citations.sort((a, b) => a - b);
  for (let i = 0; i < sorted.length; i++) {
    const h = sorted.length - i;
    if (sorted[i] >= h) return h;
  }
  return 0;
}
```

### Examples

### Example 1 — Sorting Scan

```
citations = [3, 0, 6, 1, 5]
sorted    = [0, 1, 3, 5, 6]
```

| i | citations[i] | n - i | condition | h |
| - | ------------ | ----- | --------- | - |
| 0 | 0            | 5     | ✗         |   |
| 1 | 1            | 4     | ✗         |   |
| 2 | 3            | 3     | ✓         | 3 |

Answer: `3`.

### Example 2

```
citations = [1, 3, 1]
sorted    = [1, 1, 3]
```

| i | citations[i] | n - i | condition | h |
| - | ------------ | ----- | --------- | - |
| 0 | 1            | 3     | ✗         |   |
| 1 | 1            | 2     | ✗         |   |
| 2 | 3            | 1     | ✓         | 1 |

Answer: `1`.

### Example 3

```
citations = [100]
sorted    = [100]
```

| i | citations[i] | n - i | condition | h |
| - | ------------ | ----- | --------- | - |
| 0 | 100          | 1     | ✓         | 1 |

Answer: `1`.

## Alternative Approach — Counting Buckets

Counting sort style buckets avoid sorting altogether and still run in linear
time.

1. Let `n = citations.length` and allocate a `buckets` array of size `n + 1`.
   Index `i` counts papers with exactly `i` citations, but citations greater
   than `n` are all grouped into `buckets[n]` because the h-index never exceeds
   the number of papers.
2. For each citation value `v`, increment `buckets[Math.min(v, n)]`.
3. Traverse `buckets` from the end (`i = n` down to `0`) while maintaining a
   running total of papers seen so far. The first index where `total >= i`
   yields the h-index.
   
```ts
export function bucketHIndex(citations: number[]): number {
  // create a bueckt array that note down the number of articles for a given citation count
  // the maximum buckts should not exceeds citation.length
  // and we need to have one additional buckts for articles that have 0 citation
  const n = citations.length;
  const buckets: number[] = Array.from({length: n + 1}, () => 0);
  for (const citation of citations) {
    if (citation >= n) {
      buckets[n]++;
    } else {
      buckets[citation]++;
    }
  }

  let count = 0;
  for (let i = buckets.length - 1; i >= 0; i--) {
    count += buckets[i];
    if (count >= i) return i;
  }

  return count;
}
```

### Example

`citations = [4, 1, 0, 4, 3, 7]`, `n = 6`

1. Buckets after counting (indices `0`→`6`):
   - bucket `0` = 1
   - bucket `1` = 1
   - bucket `2` = 0
   - bucket `3` = 1
   - bucket `4` = 2
   - bucket `5` = 0
   - bucket `6` = 1 (`7` is capped into `n`)
2. Scan from the end:
   - `i = 6`: total = 1 (< 6)
   - `i = 5`: total = 1 (< 5)
   - `i = 4`: total = 3 (< 4)
   - `i = 3`: total = 4 → meets `total >= i`, so `h = 3`.

This matches the sorted approach while keeping the work to `O(n)` time and
`O(n)` extra space.



## Complexity

- Time: `O(n log n)` to sort the citation counts.
- Space: `O(1)` extra (sorting in place).

Alternative bucket approach:

- Time: `O(n)` to build and scan the buckets.
- Space: `O(n)` for the bucket array.
