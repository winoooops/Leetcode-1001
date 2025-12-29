# 58. Length of Last Word

Given a string `s` consisting of words separated by spaces, return the length of the last word in the string. A word is a maximal substring consisting only of English letters and containing no spaces.

**Constraints**

* 1 <= s.length <= 10<sup>4</sup>
* `s` consists of English letters and spaces
* There will be at least one word in `s`

## Examples
```
Input: s = "Hello World"
Output: 5
```

```
Input: s = "   fly me   to   the moon  "
Output: 4
```

```
Input: s = "luffy is still joyboy"
Output: 6
```

## Solution

### Trim and Scan from the Right
* Use `trim()` to remove any trailing spaces so the last word ends at the final index.
* Iterate backward to find the nearest space; the distance between that space and the end is the last word's length.
* Time complexity: `O(n)` for the single pass. Space complexity: `O(1)` since the work happens in place on the trimmed string.
