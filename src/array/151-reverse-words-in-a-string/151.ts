export function reverseWords(s: string): string {
  // get rid of the extra spaces
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
