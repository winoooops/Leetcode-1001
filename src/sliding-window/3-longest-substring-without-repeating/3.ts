export function lengthOfLongestSubstring(s: string): number {
  let length = 0;
  let slow = 0;

  for(let fast = 1; fast < s.length; fast++) {
    for(let i = slow; i < fast; i++) {
      if(s.charCodeAt(i) === s.charCodeAt(fast)) {
        slow = i+1;
      }
    }

    length = Math.max(length, fast - slow + 1);
  }

  return length;
}
