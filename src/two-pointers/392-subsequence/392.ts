export function isSubsequence(s: string, t: string): boolean {
  if(s === t) return true;
  if(s.length > t.length) return false;

  let x = 0;

  for(let y = 0; y < t.length; y++) {
    if(s.charCodeAt(x) === t.charCodeAt(y)) {
      x++;
    }
    if(x === s.length) return true;
  }

  return false;
}
