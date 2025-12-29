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
