
# 392. Is Subsequence

Given two strings `s` and `t`, determine whether `s` can be formed by deleting characters from `t` without reordering the remaining characters.

## Example

```
Input: s = "abc", t = "ahbgdc"
Output: true
```

```
Input: s = "axc", t = "ahbgdc"
Output: false
```

## Solution

### Queue-style scan
- Load every character from `s` into a queue and walk through `t` one character at a time.
- If the current `t` character equals the queue front, remove it; otherwise put the queued character back so it can be checked against the next `t` character.
- When the queue empties, every character in `s` appeared in order.

```ts
export function isSubsequenceStack(s: string, t: string): boolean {
  const stack: string[] = [];
  for (let i = 0; i < s.length; i++) {
    stack.push(s[i]);
  }

  let j = 0;
  while (stack.length > 0 && j < t.length) {
    const peekFirst = stack.shift()!;
    if (t[j] !== peekFirst) {
      stack.unshift(peekFirst);
    }
    j++;
  }

  return stack.length === 0;
}
```

### Two pointers (greedy)

- use pointer `i` and pointer `j` to iterate through `s` and `t`, the iterate should end when any of the pointer reaches the end
- if `s[i] === s[t]`, then increment the i pointer; always incrementing j pointer 
- after the iteration is completed, check if i pointer has indeed reaches the end => every character in the string `s` has a match

```ts
export function isSubsequencePointer(s: string, t: string): boolean {
  let i = 0; // iterate through s
  let j = 0; // iterate through t

  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++;
    }

    j++;
  }

  return i === s.length;
}
```
