export function canConstruct(ransomNote: string, magazine: string): boolean {
  const needMap: Map<string, number> = new Map();

  for(let c of ransomNote) {
    needMap.set(c, (needMap.get(c) || 0)  + 1);
  }

  let fulfilled = 0;
  for(let c of magazine) {
    if(needMap.has(c)) {
      const target = needMap.get(c);
      if(target) {
        needMap.set(c, target - 1);
        if(target - 1 === 0) fulfilled++;
      }
    }
  }

  return fulfilled === needMap.size;
}

export function canConstructTwo(ransom: string, magazine: string): boolean {
  const charArr: number[] = new Array(26).fill(0);
  const BASE = 'a'.charCodeAt(0)
  for(let c of magazine) {
    charArr[c.charCodeAt(0) - BASE]++;
  }

  for(let c of ransom) {
    const target = --charArr[c.charCodeAt(0) - BASE];
    if(target < 0) {
      return false;
    }
  }

  return true;
}
