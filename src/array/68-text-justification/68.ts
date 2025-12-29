export function fullJustify2(words: string[], maxWidth: number): string[] {
  const result: string[] = [];
  let line: string[] = [];
  let length = 0;

  for (let i = 0; i < words.length; i++) {
    if (length + line.length + words[i].length > maxWidth) {
      const totalSpaces = maxWidth - length;
      const gaps = Math.max(1, line.length - 1);
      const evenSpace = Math.floor(totalSpaces / gaps);
      let extraSpace = totalSpaces % gaps;

      let j = 0;
      while (j < gaps) {
        line[j] += ' '.repeat(evenSpace + (extraSpace > 0 ? 1 : 0));
        if (extraSpace > 0) extraSpace--;
        j++;
      }
      result.push(line.join(''));

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

export function fullJustify(words: string[], maxWidth: number): string[] {
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
