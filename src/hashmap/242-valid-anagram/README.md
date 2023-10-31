# 242. Valid Anagram

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

## Example
```
Input: s = "anagram", t = "nagaram"
Output: true
```

```
Input: s = "rat", t = "car"
Output: false
```


Constraints:
* 1 <= s.length, t.length <= 5 * 104
* s and t consist of lowercase English letters.



> Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

## Solution

### HushMap

use a HashMap to double-check every letter in `s` is also appear in `t`, and vice versa.

```ts
export function isAnagram(s: string, t: string): boolean {
  if(s.length !== t.length) return false;

  const charMap: Map<string, number> = new Map();

  for(let c of s) {
    charMap.set(c, (charMap.get(c) || 0) + 1);
  }

  for(let c of t) {
    const found = charMap.get(c);
    if(!found || found - 1 < 0) return false;

    charMap.set(c, found - 1);
  }

  return true;
}
```

