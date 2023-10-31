export function isAnagram(s: string, t: string): boolean {
  if(s.length !== t.length) return false;

  const charMap: Map<string, number> = new Map();

  for(let c of s) {
    charMap.set(c, (charMap.get(c) || 0) + 1);
  }

  for(let c of t) {
    const found = charMap.get(c);
    if(!found || found - 1 < 0) return false;

    charMap.set(c, found - 1);
  }

  return true;
}
