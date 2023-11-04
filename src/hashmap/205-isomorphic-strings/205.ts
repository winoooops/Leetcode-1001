export function isIsomorphic(s: string, t: string): boolean {
  const sMap: Map<string, string> = new Map();
  const tMap: Map<string, string> = new Map();

  for(let i = 0; i < s.length; i++) {
    const sValue = sMap.get(s[i]);
    const tValue = tMap.get(t[i]);

    if( (sValue && sValue !== t[i]) || (tValue && tValue !== s[i])) return false;

    sMap.set(s[i], t[i]);
    tMap.set(t[i], s[i]);
  }

  return true;
}
