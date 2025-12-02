export function fullJustifify(words: string[], maxWidth: number): string[] {
  const result: string[] = [];
  let line: string[] = [];
  let length = 0;

  for (let i = 0; i < words.length; i++) {
    // complete lines go here
    if (length + line.length + words[i].length > maxWidth) {
      const totalSpaces = maxWidth - length;
      const gaps = Math.max(1, line.length - 1);
      const evenSpace = Math.floor(totalSpaces / gaps);
      let extraSpace = totalSpaces % gaps; // distribute leftovers from the left

      if (line.length === 1) {
        result.push(line[0] + ' '.repeat(totalSpaces));
      } else {
        let justified = '';
        for (let j = 0; j < line.length; j++) {
          justified += line[j];
          if (j < Math.max(1, line.length - 1)) {
            justified += ' '.repeat(evenSpace + (extraSpace > 0 ? 1 : 0));
            if (extraSpace > 0) extraSpace--;
          }
        }
        result.push(justified);
      }

      line = [words[i]];
      length = words[i].length;
      continue;
    }

    // incomplete lines go here
    line.push(words[i]);
    length += words[i].length;
  }

  // handle last line
  let last = line.join(' ');
  last += ' '.repeat(maxWidth - last.length);

  result.push(last);

  return result;
}
