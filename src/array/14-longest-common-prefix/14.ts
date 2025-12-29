export function lcpVertical(strs: string[]): string {
  let target: string = strs[0];
  for (let i = 0; i < strs[0].length; i++) {
    target = strs[0].substring(0, i + 1);
    for (let j = 1; j < strs.length; j++) {
      const sub = strs[j].substring(0, i + 1);
      if (sub !== target) {
        return strs[0].substring(0, i);
      }
    }
  }

  return target;
}

export function lcpSub(strs: string[]): string {
  function lcp(start: number, end: number): string {
    if (start === end) return strs[start];
    const mid = Math.floor((start + end) / 2);
    const lcpLeft = lcp(start, mid);
    const lcpRight = lcp(mid + 1, end);
    const min = Math.min(lcpLeft?.length, lcpRight?.length);

    for (let i = 0; i <= min; i++) {
      if (lcpLeft[i] !== lcpRight[i]) {
        return lcpLeft.substring(0, i);
      }
    }

    return lcpLeft.substring(0, min);
  }

  return lcp(0, strs.length - 1);
}
