# 125. Valid Palindrome

Given a string `s`, return `true` if, after converting uppercase letters to lowercase and removing non-alphanumeric characters, it reads the same forward and backward; otherwise return `false`.

**Constraints**

* `1 <= s.length <= 2 * 10^5`
* `s` consists of printable ASCII characters

## Examples
```
Input: s = "A man, a plan, a canal: Panama"
Output: true
```

```
Input: s = "race a car"
Output: false
```

## Solution

### Two pointers skipping non-alphanumeric
* Keep pointers at the start and end of the string, advancing each until they land on alphanumeric characters.
* Compare the lowercase versions of these characters; a mismatch means the string is not a palindrome.
* Stop when the pointers meet or cross, which means every valid character matched. Time complexity: `O(n)`, space complexity: `O(1)`.

```ts
export function isPalidrome(s: string): boolean {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (left < right && isInvalid(s[left])) left++;
    while (left < right && isInvalid(s[right])) right--;

    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;

    left++;
    right--;
  }

  return true;
}

export function isInvalid(s: string): boolean {
  return !s.match(/[A-Za-z0-9]/);
}
```
