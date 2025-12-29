# 14. Longest Common Prefix

Given an array of strings `strs`, return the longest common prefix shared by all of them. If no such prefix exists, return an empty string.

**Constraints**

* `1 <= strs.length <= 200`
* `0 <= strs[i].length <= 200`
* `strs[i]` consists of lowercase English letters

## Examples
```
Input: strs = ["flower","flow","flight"]
Output: "fl"
```

```
Input: strs = ["dog","racecar","car"]
Output: ""
```

## Solution

### Vertical Scanning
* Use the first word as an anchor and check its prefixes column by column across the remaining words.
* The moment a prefix fails to appear in another word, the previous prefix is the answer.
* Time complexity: `O(n * m)` where `n` is the number of words and `m` the length of the first word. Space complexity: `O(1)`.

```ts
export function lcpVertical(strs: string[]): string {
  let target: string = strs[0];
  for (let i = 0; i < strs[0].length; i++) {
    target = strs[0].substring(0, i + 1);
    for (let j = 1; j < strs.length; j++) {
      const sub = strs[j].substring(0, i + 1);
      if (sub !== target) {
        return strs[0].substring(0, i);
      }
    }
  }

  return target;
}
```

### Divide and Conquer on Subarrays
* Recursively split the array in half, compute the longest common prefix within each half, and merge the result by comparing the two prefixes character by character.
* Reduces redundant comparisons when many strings share long prefixes because each character is only compared along its branch of the recursion tree.
* Time complexity: `O(n * m)` in the worst case, but the divide-and-conquer pattern shortens comparisons when prefixes diverge early. Space complexity: `O(log n)` because of the recursion stack.

```ts
export function lcpSub(strs: string[]): string {
  function lcp(start: number, end: number): string {
    if (start === end) return strs[start];
    const mid = Math.floor((start + end) / 2);
    const lcpLeft = lcp(start, mid);
    const lcpRight = lcp(mid + 1, end);
    const min = Math.min(lcpLeft?.length, lcpRight?.length);

    for (let i = 0; i <= min; i++) {
      if (lcpLeft[i] !== lcpRight[i]) {
        return lcpLeft.substring(0, Math.max(0, i - 1));
      }
    }

    return lcpLeft.substring(0, min);
  }

  return lcp(0, strs.length - 1);
}
```
