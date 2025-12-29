export function romanToInt(s: string): number {
  const map: Map<string, number> = new Map();
  map.set('I', 1);
  map.set('V', 5);
  map.set('X', 10);
  map.set('L', 50);
  map.set('C', 100);
  map.set('D', 500);
  map.set('M', 1000);

  // I, X, C
  // VX, LC, DM
  let prev = 0;
  let result = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    const curr = map.get(s[i])!;
    if (curr < prev) {
      result -= curr;
    } else {
      result += curr;
    }
    prev = curr;
  }

  return result;
}
