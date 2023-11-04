# 205. Isomorphic Strings

Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

* 1 <= s.length <= 5 * 104
* t.length == s.length
* s and t consist of any valid ascii character.

## Example
```
Input: s = "egg", t = "add"
Output: true
```

```
Input: s = "foo", t = "bar"
Output: false
```

```
Input: s = "paper", t = "title"
Output: true
```

## Solution

![mapping](../../../static/img/hushmap/mapping.png)
Base on the description,
* "All occurrences of a character must be replaced with another character" -> means every char in `s` is mapped to `t` 
* "No two characters may map to the same character" -> means they could only be one-to-one mapping.

### HashMap
use 2 hashmap to store the mapping from `s-t` and `t-s`, name it as `sMap` and `tMap`, 
iterate through `s`, if an element is found on `sMap` where `sMap.get(s[i]) !== t[i]` or `tMap.get(t[i]) !== s[i]`, then they are not isomorphic

```ts
export function isIsomorphic(s: string, t: string): boolean {
  const sMap: Map<string, string> = new Map();
  const tMap: Map<string, string> = new Map();

  for(let i = 0; i < s.length; i++) {
    const sValue = sMap.get(s[i]);
    const tValue = tMap.get(t[i]);

    if( (sValue && sValue !== t[i]) || (tValue && tValue !== s[i])) return false;

    sMap.set(s[i], t[i]);
    tMap.set(t[i], s[i]);
  }

  return true;
}
```

    

