export function findAnagrams(s: string, p: string): number[] {
  const result: number[] = [];
  if (s.length === 0 || p.length === 0) return result;

  // maintain a map that collects the chars needed
  // maintain a int to collect the missing char in total
  const needs: Map<string, number> = new Map();
  for (const c of p) {
    needs.set(c, (needs.get(c) ?? 0) + 1);
  }
  let missing = p.length;

  let fast = 0;
  let slow = 0;

  while (fast < s.length) {
    const c = s[fast];
    // if an valid char enters the window => missing--
    if (needs.has(c)) {
      const newVal = needs.get(c)! - 1;
      needs.set(c, newVal);

      if (newVal >= 0) {
        missing--;
      }
    }
    fast++;

    // make sure the window size can't exceeds target size
    if (fast - slow > p.length) {
      const left = s[slow];
      // if a valid cahr leaves the window => missing++;
      if (needs.has(left)) {
        const newVal = needs.get(left)! + 1;
        needs.set(left, newVal);

        if (newVal > 0) {
          missing++;
        }
      }
      slow++;
    }

    if (fast - slow === p.length && missing === 0) {
      result.push(slow);
    }
  }

  return result;
}
