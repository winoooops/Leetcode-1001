export function minSubstring(s: string, t: string): string {
  let result = s + t;
  const needMap: Map<string, number> = new Map();
  for(let c of t) {
    needMap.set(c, (needMap.get(c) || 0) + 1);
  }
  // now everytime a char is meet, count - 1

  let l = 0, r = 0, validCount = 0;
  while(r < s.length) {
    const char = s.charAt(r);
    const charCount = needMap.get(char);
    if(charCount !== undefined) {
      needMap.set(char, charCount - 1);
      if(needMap.get(char) === 0) validCount++;
    }

    // maintain validCount
    while(validCount === needMap.size && l <= r) {
      if(r - l + 1 < result.length) {
        result = s.substring(l, r + 1);
      }
      const leftChar = s.charAt(l);
      let leftCharCount = needMap.get(leftChar);
      if(leftCharCount === 0) break;
      l++;
      leftCharCount != undefined && needMap.set(leftChar, leftCharCount + 1);
    }

    r++;
  }

  return result.length === s.length + t.length ? "" : result;
}
