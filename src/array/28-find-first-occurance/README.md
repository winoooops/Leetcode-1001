# 28. Find the Index of the First Occurrence in a String

## Idea
The problem asks us to find the starting index of the first occurrence of a substring (`needle`) within a string (`haystack`). If the substring is not found, we return -1.

## Brute Force Approach

### Steps
1. Iterate through the `haystack` where the `needle` could possibly fit (up to `haystack.length - needle.length`).
2. For each position `i`, compare the characters of `haystack` starting at `i` with `needle`.
3. If a mismatch is found, break the inner loop and move to the next position in `haystack`.
4. If the inner loop completes (or a counter matches `needle.length`), we found the match; return `i`.

```ts
export function strStr(haystack: string, needle: string): number {
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    let matched = 0;
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        break;
      }
      matched++;
      if (matched === needle.length) {
        return i;
      }
    }
  }

  return -1;
}
```

### Complexity
- **Time**: `O((N - M) * M)` approximately `O(N * M)`, where `N` is the length of `haystack` and `M` is the length of `needle`.
- **Space**: `O(1)` as no extra space is used apart from loop variables.

## Future Improvement: KMP Algorithm
For linear time complexity `O(N + M)`, the Knuth-Morris-Pratt (KMP) algorithm can be used. It utilizes a Longest Prefix Suffix (LPS) array to skip redundant comparisons in the `haystack`.

```ts
// Placeholder for KMP implementation
// function strStrKMP(haystack: string, needle: string): number { ... }
```
