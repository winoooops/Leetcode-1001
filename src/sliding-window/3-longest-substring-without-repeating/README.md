# 3. Longest Substring Without Repeating Characters
Given a string s, find the length of the longest substring without repeating characters.



## Example

```
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
```

```
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
```

```
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
```

## Solution
```
p
pw  -> 2
pww 
w
wk  
wke -> 3
```

### Sliding Window
* use two pointers: `slow` and `fast` to describe the start and end of the substring.
* iterate fast through the `s` string, everytime check the current substring: `s.substring(slow, fast)` with the character the `fast` pointer points to
  * if the comparison found no equal characters, move on to next iteration
  * if the comparison found a case where a character in `i`th position is equal to the one in `fast` position, move the slow position to `i + 1`; and move on to next iteration 
  * on every iteration, calculate the length to be `Math.max(length, fast - slow + 1)` 


```ts
function lengthOfLongestSubstring(s: string): number {
  let length = 0;
  let slow = 0;

  for(let fast = 1; fast < s.length; fast++) {
    for(let i = slow; i < fast; i++) {
      if(s.charCodeAt(i) === s.charCodeAt(fast)) {
        slow = i+1;
      }
    }

    length = Math.max(length, fast - slow + 1);
  }

  return length;
}
```
