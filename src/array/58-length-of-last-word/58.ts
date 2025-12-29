export function lengthOfLastWord(s: string): number {
  const trimmed = s.trim();

  for (let i = trimmed.length - 1; i >= 0; i--) {
    if (trimmed[i] === ' ') {
      return trimmed.length - i - 1;
    }
  }

  return trimmed.length;
}
