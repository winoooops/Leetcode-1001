export function replaceSpaces(s: string): string {
  let spaces = 0;
  for (const char of s) {
    if (char === ' ') spaces++;
  }

  const newLength = s.length + spaces * 2;
  const arr = new Array<string>(newLength);
  let right = newLength - 1;

  for (let left = s.length - 1; left >= 0; left--) {
    if (s[left] !== ' ') {
      arr[right] = s[left];
      right--;
    } else {
      // %20
      arr[right--] = '0';
      arr[right--] = '2';
      arr[right--] = '%';
    }
  }

  return arr.join('');
}
