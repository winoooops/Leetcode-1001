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

export function findAnagramsII(s: string, p: string): number[] {
  const result: number[] = [];
  if (s.length === 0 || p.length === 0 || p.length > s.length) return result;

  const needs = Array.from({length: 26}, () => 0);
  for (const c of p) {
    needs[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }

  let missing = p.length; // how many chars we still need to match
  let left = 0;
  let right = 0;

  while (right < s.length) {
    const idxRight = s[right].charCodeAt(0) - 'a'.charCodeAt(0);

    // when a new element enters the window
    if (needs[idxRight] > 0) {
      // this char was still needed
      missing--;
    }
    // consume this char in the window (can go negative if extra)
    needs[idxRight]--;

    right++;

    // shrink window if it's longer than p
    while (right - left > p.length) {
      const idxLeft = s[left].charCodeAt(0) - 'a'.charCodeAt(0);

      // we are removing s[left] from the window
      needs[idxLeft]++;

      // if after adding back, needs[idxLeft] > 0, we just lost a needed char
      if (needs[idxLeft] > 0) {
        missing++;
      }

      left++;
    }

    // when match
    if (right - left === p.length && missing === 0) {
      result.push(left);
    }
  }

  return result;
}
