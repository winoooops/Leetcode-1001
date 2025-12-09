export function lengthOfLongestSubstring(s: string): number {
  let length = 0;
  let slow = 0;

  for (let fast = 1; fast < s.length; fast++) {
    for (let i = slow; i < fast; i++) {
      if (s.charCodeAt(i) === s.charCodeAt(fast)) {
        slow = i + 1;
      }
    }

    length = Math.max(length, fast - slow + 1);
  }

  return length;
}

export function lengthOfLongestSubstringSet(s: string): number {
  let length = 0;
  const set: Set<string> = new Set();
  for (let slow = 0, fast = 0; fast < s.length; fast++) {
    while (set.has(s[fast])) {
      set.delete(s[slow]);
      slow++;
    }
    set.add(s[fast]);

    length = Math.max(length, fast - slow + 1);
  }

  return length;
}
