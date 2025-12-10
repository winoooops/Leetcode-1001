# 438. Find All Anagrams in a String

[LeetCode 438](https://leetcode.com/problems/find-all-anagrams-in-a-string/)

Given two strings `s` and `p`, return an array of all the start indices of `p`'s anagrams in `s`.

## Solution Mind Wrapper

### 1. Invariant
A window `[slow, fast)` is a valid anagram of `p` if:
1. It has the same length as `p`.
2. It contains the exact same character counts as `p` (which we track via `missing` count).

### 2. Direction
Always move `fast` forward (grow). Move `slow` forward (shrink) only when the window size exceeds `p.length`.

### 3. State
- `needs`: A map of character counts required for `p`.
- `missing`: The total number of correct characters *still needed* to form an anagram.
  - Decrement `missing` when a character entering the window (`s[fast]`) is needed.
  - Increment `missing` when a character leaving the window (`s[slow]`) was needed.

### 4. Algorithm Skeleton
```typescript
let fast = 0, slow = 0;
while (fast < s.length) {
  // 1. Add s[fast] to window
  // Update needs/missing if s[fast] is relevant
  updateWhenValidCharEnters();
  fast++;

  // 2. Shrink if window is too big, can use `if()` asl well since it's only once
  while (fast - slow > p.length) {
    // Remove s[slow] from window
    // Update needs/missing if s[slow] was relevant
    updateWhenValidCharLeaves();
    slow++;
  }

  // 3. Check for valid solution
  if (fast - slow === p.length && missing === 0) {
    result.push(slow);
  }
}
```

### 5. Solution

```ts
export function findAnagrams(s: string, p: string): number[] {
  const result: number[] = [];
  if (s.length === 0 || p.length === 0) return result;

  // maintain a map that collects the chars needed
  // maintain a int to collect the missing char in total
  const needs: Map<string, number> = new Map();
  for (const c of p) {
    needs.set(c, (needs.get(c) ?? 0) + 1);
  }
  let missing = p.length;

  let fast = 0;
  let slow = 0;

  while (fast < s.length) {
    const c = s[fast];
    // if an valid char enters the window => missing--
    if (needs.has(c)) {
      const newVal = needs.get(c)! - 1;
      needs.set(c, newVal);

      if (newVal >= 0) {
        missing--;
      }
    }
    fast++;

    // make sure the window size can't exceeds target size
    while (fast - slow > p.length) {
      const left = s[slow];
      // if a valid cahr leaves the window => missing++;
      if (needs.has(left)) {
        const newVal = needs.get(left)! + 1;
        needs.set(left, newVal);

        if (newVal > 0) {
          missing++;
        }
      }
      slow++;
    }

    if (fast - slow === p.length && missing === 0) {
      result.push(slow);
    }
  }

  return result;
}
```

## Complexity
- **Time**: O(N), where N is `s.length`. Each character enters and leaves the window at most once.
- **Space**: O(1) (or O(K) where K is char set size, e.g., 26), for the `needs` map.
