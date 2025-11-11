## Binary Search Technique

Binary search narrows the answer space by repeatedly halving a sorted domain.

### When to Reach For It
- Arrays already sorted or can be reasoned with monotonic predicate (e.g. `check(x)` switches from false to true once).
- You need `O(log n)` lookups rather than scanning linearly.
- “Find first/last occurrence”, “search insert position”, or “min time satisfying condition” patterns.

### Iterative Template
```ts
let left = 0;
let right = nums.length - 1;

while (left <= right) {
  const mid = left + Math.floor((right - left) / 2);
  if (nums[mid] === val) return mid;
  if (nums[mid] < val) left = mid + 1;
  else right = mid - 1;
}
return -1; // not found
```
- Use `left + (right - left) / 2` to avoid overflow on large ranges (important in Java/C++).
- `<=` keeps the last candidate in play; the loop exits when the search window collapses.

### Variations
- **Lower bound / first true**: adjust the loop to keep the answer in `left` and return it even when exact match is absent.
- **Binary search on answer**: instead of a sorted array, search the integer range that contains the solution and plug `mid` into a feasibility `check`.

### Pitfalls
- Forgetting to update both pointers leads to infinite loops.
- Using `<` instead of `<=` often skips single-element windows.
- Make sure the data meets the monotonic requirement; otherwise, results are undefined.
