# 151. Reverse Words in a String

Given a string `s` that may contain leading, trailing, or repeated spaces, the
goal is to return a new string where the words appear in reverse order and are
separated by a single space. The order of characters inside each word remains
unchanged.

## Intuition

If we normalize the spacing first, reversing the words becomes trivial. A
two-pointer pass over the character array can collapse extra spaces while
preserving the characters that belong to each word. Once the string has single
spaces between words and no leading/trailing whitespace, we can split on spaces
and reverse the resulting list.

## Approach

1. Convert the string to a character array and use two pointers (`fast` and
   `slow`) to copy characters in place while skipping redundant spaces:
   - Skip leading spaces while `slow === 0`.
   - Skip any space that immediately follows another space.
2. If the normalized array ends with a space, drop it.
3. Join the kept characters back into a string.
4. Split the normalized string on single spaces, reverse the list of words, and
   join them back with spaces.

```ts
export function reverseWords(s: string): string {
  const normalized = deleteExtraSpaces(s);
  return normalized.split(' ').reverse().join(' ');
}

function deleteExtraSpaces(s: string) {
  const arr = s.split('');
  let slow = 0;

  for (let fast = 0; fast < arr.length; fast++) {
    if (slow === 0 && arr[fast] === ' ') continue;
    if (arr[fast] === ' ' && arr[slow - 1] === ' ') continue;
    arr[slow++] = arr[fast];
  }

  if (slow > 0 && arr[slow - 1] === ' ') slow--;

  return arr.slice(0, slow).join('');
}
```

### Example

```
Input:  s = "  the  sky is  blue  "
Step 1: normalize → "the sky is blue"
Step 2: split and reverse → ["blue","is","sky","the"]
Output: "blue is sky the"
```

## Complexity

- Time: `O(n)` to scan the characters and reverse the words.
- Space: `O(n)` for the normalized string and word list.
