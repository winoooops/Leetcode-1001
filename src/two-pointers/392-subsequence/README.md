# 392. Is Subsequence

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters 
without disturbing the relative positions of the remaining characters. 
(i.e., "ace" is a subsequence of "abcde" while "aec" is not).



## Example

```
Input: s = "abc", t = "ahbgdc"
Output: true
```

```
Input: s = "axc", t = "ahbgdc"
Output: false
```

```
Input: s = "ace", t = "abcde"
Output: true
```

```
Input: s = "aec", t = "abcde"
Output: false
```

## Solution

### Two Pointers 
* use *pointer_x* to iterate to points to chars in string `s`, and iterate string `t` with *pointer_y*. 
* check if characters at `pointer_x` and `pointer_y` are equal: 
  * if they are the same, *pointer_x* move to right
* if all the characters in `s` are checked, then `s` is subsequence of `t`; otherwise

```ts
function isSubsequence(s: string, t: string): boolean {
  if(s === t) return true;
  if(s.length > t.length) return false;

  let x = 0;

  for(let y = 0; y < t.length; y++) {
    if(s.charCodeAt(x) === t.charCodeAt(y)) {
      x++;
    }
    if(x === s.length) return true;
  }

  return false;
}
```

