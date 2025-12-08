# Sliding Window Control

Sliding windows keep a moving interval `[left, right]` while tracking just enough state (counts, sums, distinct elements) to know if the interval is valid. Expand to include new elements, then contract to restore the invariant or chase a smaller window.

## No-brainer cheatsheet

1. Define the invariant: when is a window valid (sum >= target, duplicates absent, distinct <= k)?
2. Pick direction: walk `right` forward once; never move it back. Initialize `left = 0`, empty state, and a worst-case answer.
3. Add `nums[right]`/`s[right]` into state each step.
4. While the window is invalid (or can be tightened when valid), move `left` forward, removing its element from state.
5. Update the answer only when the invariant is satisfied (record length, substring, or count).
6. Keep state O(1): running sum, frequency map, distinct counter, and (for replacements) track the most frequent character in the window.
7. For fixed-size windows, skip the inner while-loop and slide by adding `right`, removing `left`, then bump both pointers.

### Example: 209. Minimum Size Subarray Sum

- Invariant: window is valid when `sum >= target`.
- Grow `right`, accumulating `sum`. Each new element could make the window valid.
- When valid, shrink from `left` while still `sum >= target`; update the best length during this shrink (tightest window that works).
- State is just `sum` and two indices, so each element enters and leaves once: O(n) time, O(1) space.
- Pseudocode sketch:

```ts
let left = 0;
let sum = 0;
let best = Infinity;

for (let right = 0; right < nums.length; right++) {
  sum += nums[right];
  while (sum >= target) {
    best = Math.min(best, right - left + 1);
    sum -= nums[left++];
  }
}

return best === Infinity ? 0 : best;
```

## Problems & notes

- [3. Longest Substring Without Repeating Characters](./3-longest-substring-without-repeating/README.md)
- [30. Substring with Concatenation of All Words](./30-substring-concatenation/README.md)
- [76. Minimum Window Substring](./76-min-window-substring/README.md)
- [209. Minimum Size Subarray Sum](./209-minimum-subarray-sum/README.md)
