# 76. Minimum Window Substring

Given two strings `s` and `t` of lengths `m` and `n` respectively, return the minimum window substring
of `s` such that every character in `t` (**including duplicates**) is included in the window. If there is no such substring, return the empty string "".
> The testcases will be generated such that the answer is unique.

## Example

```
Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
```

```
Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.
```

```
Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.
```

## Solution
### Sliding Window
```
"ABAACBAB"
"ABC"
l  |  r   |  char  |  charMap              | validCount | 
0  |  0   |  "A"   | A->1                  |    1       |  
0  |  1   |  "AB"  | A->1 B->1             |    2       |
0  |  2   | "ABA"  | A->2 B->1             |    2       |
0  |  3   | ABAA   | A->3 B->1             |    2       |
0  |  4   | ABAAC  | A->3 B->1 C->1        |    3       |
1  |  4   | BAAC   | A->2 B->1 C->1        |    3       |
2  |  4   | AAC    | 
1  |  5   | BAACB  | A->2 B->2 C->1        |    3       |
2  |  5   | AACB   | A->2 B->1 C->1        |    3       |
3  |  5   | ACB    | A->1 B->1 C->1        |    3       |
```

```
"acbbaca" 
"aba"
l  |  r   |  char  |  charMap              | validCount |    result   | 
0     1       a       a->1                     0
0     2      ac       a->1                     0 
0     3      acb      a->1 b->1                1
0     4      acbb     a->1 b->2                1 
0     5      acbba    a->2 b->2                2             acbba  
1     5      cbba     a->1 b->2                              acbba     
0     6      acbbac   a->2 b->2                2             acbba
0     7      acbbaca  a->3 b->2                2             acbba 
1     7      cbbaca   a->2 b->2                2             acbba
2     7      bbaca    a->2 b->2                2             bbaca
```
intuition: because this is a question about finding substring, normally need to use a HashMap to store the occurrence of characters in target word.
steps: 
1. use a hashMap called `needMap` to store occurrences of chars in `t`,
2. use `l` and `r` pointers to determine the size of the sliding window, maintain a number called `validCount` and check if `validCount === map.`  
3. iterate through `s` and check if the character(called `char`) of `s` in position `r` is in the `needMap`
    * if not in the map, simply `r++`
    * if in tha map, subtract its value in `needMap` by 1, 
      * check if the updated value is equal to 0. if so, that means it would not be necessary to have more `char` in the substring 
    * since the problem is to find the **shortest** substring, so we need to make sure the sliding window to be shrinked as much as possible. meaning, we need to use `l` pointer to do so
4.   


```ts
export function minSubstring(s: string, t: string): string {
  let result = s + t;
  const needMap: Map<string, number> = new Map();
  for(let c of t) {
    needMap.set(c, (needMap.get(c) || 0) + 1);
  }
  // now everytime a char is meet, count - 1

  let l = 0, r = 0, validCount = 0;
  while(r < s.length) {
    const char = s.charAt(r);
    const charCount = needMap.get(char);
    if(charCount !== undefined) {
      needMap.set(char, charCount - 1);
      if(needMap.get(char) === 0) validCount++;
    }

    // maintain validCount
    while(validCount === needMap.size && l <= r) {
      if(r - l + 1 < result.length) {
        result = s.substring(l, r + 1);
      }
      const leftChar = s.charAt(l);
      let leftCharCount = needMap.get(leftChar);
      if(leftCharCount === 0) break;
      l++;
      leftCharCount != undefined && needMap.set(leftChar, leftCharCount + 1);
    }

    r++;
  }

  return result.length === s.length + t.length ? "" : result;
}
```

