# 68. Text Justification

Given an array of words and a width `maxWidth`, format the text so each line has exactly `maxWidth` characters and is fully justified. Distribute extra spaces as evenly as possible between words; the last line should be left-justified.

## Example

```
Input: words = ["This","is","an","example","of","text","justification."], maxWidth = 16
Output:
["This    is    an",
 "example  of text",
 "justification.  "]
```

```
Input: words = ["What","must","be","acknowledgment","shall","be"], maxWidth = 16
Output:
["What   must   be",
 "acknowledgment  ",
 "shall be        "]
```

## Solution

### Requirements recap
- Each line must be exactly `maxWidth` characters.
- Distribute spaces as evenly as possible between words; when uneven, fill extra spaces from **left to right** (not all to the right).
- Lines with a single word should be padded with trailing spaces.
- The last line is left-justified with single spaces between words, then padded on the right.

### Greedy line assembly with space distribution

Accumulate words in the current line until the next word would overflow `maxWidth`. When that happens, compute how many spaces to add:
* Let `totalSpaces = maxWidth - totalWordLength` and `gaps = max(1, line.length - 1)`.
* If the line has one word, append all trailing spaces.
* Otherwise, give each gap `evenSpace = floor(totalSpaces / gaps)` spaces, spread the remaining `totalSpaces % gaps` one-by-one from left to right, then push the justified line.
Start a new line with the overflow word and continue. After processing all words, join the last line with single spaces and pad trailing spaces to reach `maxWidth`.

```ts
export function fullJustifify(words: string[], maxWidth: number): string[] {
  const result: string[] = [];
  let line: string[] = [];
  let length = 0;

  for (let i = 0; i < words.length; i++) {
    if (length + line.length + words[i].length > maxWidth) {
      const totalSpaces = maxWidth - length;
      const gaps = Math.max(1, line.length - 1); // handle single-word lines
      const evenSpace = Math.floor(totalSpaces / gaps);
      let extraSpace = totalSpaces % gaps; // left-greedy: spread from left to right

      let j = 0;
      let justified = '';
      while (j < gaps) {
        justified += line[j];
        justified += ' '.repeat(evenSpace + (extraSpace > 0 ? 1 : 0));
        if (extraSpace > 0) extraSpace--;
        j++;
      }
      if (line.length > 1) {
        justified += line[line.length - 1];
      }
      result.push(justified);

      line = [];
      length = 0;
    }
    line.push(words[i]);
    length += words[i].length;
  }

  let last = line.join(' ');
  last += ' '.repeat(maxWidth - last.length);
  result.push(last);

  return result;
}
```

### Alternative implementation (Solution 2)

Same greedy line build, but assembles the justified line with a `pieces` array before joining, which can be easier to reason about spacing placement.

```ts
export function fullJustifify2(words: string[], maxWidth: number): string[] {
  const result: string[] = [];
  let line: string[] = [];
  let length = 0;

  for (let i = 0; i < words.length; i++) {
    if (length + line.length + words[i].length > maxWidth) {
      const totalSpaces = maxWidth - length;
      const gaps = Math.max(1, line.length - 1);
      const evenSpace = Math.floor(totalSpaces / gaps);
      let extraSpace = totalSpaces % gaps;

      if (line.length === 1) {
        result.push(line[0] + ' '.repeat(totalSpaces));
      } else {
        const pieces: string[] = [];
        for (let j = 0; j < line.length; j++) {
          pieces.push(line[j]);
          if (j < line.length - 1) {
            pieces.push(' '.repeat(evenSpace + (extraSpace > 0 ? 1 : 0)));
            if (extraSpace > 0) extraSpace--;
          }
        }
        result.push(pieces.join(''));
      }

      line = [words[i]];
      length = words[i].length;
      continue;
    }

    line.push(words[i]);
    length += words[i].length;
  }

  let last = line.join(' ');
  last += ' '.repeat(maxWidth - last.length);
  result.push(last);

  return result;
}
```
