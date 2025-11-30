export function strStr(haystack: string, needle: string): number {
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    let matched = 0;
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        break;
      }
      matched++;
      if (matched === needle.length) {
        return i;
      }
    }
  }

  return -1;
}

export function getNext(s: string): number[] {
  if (s.length === 0) return [];
  const next: number[] = [];

  let left = 0;
  next.push(left);

  for (let right = 1; right < s.length; right++) {
    while (left > 0 && s[left] !== s[right]) {
      left = next[left - 1];
    }

    if (s[left] === s[right]) {
      left++;
    }
    next.push(left);
  }

  return next;
}

export function KMP(haystack: string, needle: string): number {
  const next: number[] = getNext(needle);
  console.log(next);
  let j = 0;

  for (let i = 0; i < haystack.length; i++) {
    while (j > 0 && haystack[i] !== needle[j]) {
      j = next[j - 1];
    }

    if (haystack[i] === needle[j]) {
      if (j === needle.length - 1) {
        return i - j;
      }
      j++;
    }
  }

  return -1;
}
