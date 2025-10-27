# Basic Run-Length Encoding

Given a string consisting of lowercase letters, digits, or symbols, compress it by replacing each maximal block of identical characters with the character followed by the number of times it appears consecutively.

Return the compressed string. You may assume the input string is non-empty and ASCII-only.

## Example

```
Input: "wwbbbw"
Output: "w2b3w1"
```

```
Input: "aabcccccaaa"
Output: "a2b1c5a3"
```

## Reasoning Steps

1. Walk through the string once, keeping a running count for the current character.
2. When the character changes (or we reach the end), append the character and its count to the answer buffer.
3. Reset the running count for the new character and continue scanning.

This maintains the invariant that the buffer always reflects all complete runs we have already processed.

## Complexity

- Time: `O(n)` because we read each character once.
- Space: `O(1)` extra beyond the output string.

## Implementation

```ts
// suppose I want to parse "wwbbbw" into "w3b3"

export function RLEBasic(target: string): string {
  let result = '';
  for (let i = 0; i < target.length; i++) {
    console.log(target[i]);
    let occurance = 1;

    while (i + 1 < target.length && target[i] === target[i + 1]) {
      occurance++;
      i++;
    }

    result += `${target[i]}${occurance}`;
  }

  return result;
}
```
