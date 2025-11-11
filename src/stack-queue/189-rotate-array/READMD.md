# 189. Rotate Array — Triple Reverse Notes

## Idea
- Rotating right by `k` is equivalent to moving the last `k` items to the front.
- Instead of extra storage, reuse the array and reverse sections in-place.

## Tripe Reversal

### Steps (mirrors `rotate` implementation)
1. Normalize `k` with `k % nums.length` to handle large shifts.
2. Reverse the entire array so the tail segment we care about moves to the front (but in reverse order).
3. Reverse the first `k` items to restore their original order.
4. Reverse the remaining `n - k` items for the same reason.

The helper `reverse(start, end)` just swaps pairs while `start < end`, giving O(end-start) work per call with O(1) extra space.

```ts
export function rotate(nums: number[], k: number): void {
  const n = k % nums.length;
  if (n === nums.length) return;

  function reverse(start: number, end: number): void {
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    }
  }
  reverse(0, nums.length - 1);
  reverse(0, n - 1);
  reverse(n, nums.length - 1);
}
````

### Complexity
- Time: `O(n)` — each element participates in at most three swaps.
- Space: `O(1)` — swaps happen in place, no additional arrays.
