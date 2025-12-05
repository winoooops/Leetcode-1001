export function isSubsequenceStack(s: string, t: string): boolean {
  const stack: string[] = [];
  for (let i = 0; i < s.length; i++) {
    stack.push(s[i]);
  }

  let j = 0;
  while (stack.length > 0 && j < t.length) {
    const peekFirst = stack.shift()!;
    if (t[j] !== peekFirst) {
      stack.unshift(peekFirst);
    }
    j++;
  }

  return stack.length === 0;
}

export function isSubsequencePointer(s: string, t: string): boolean {
  let i = 0; // iterate through s
  let j = 0; // iterate through t

  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++;
    }

    j++;
  }

  return i === s.length;
}
