export function wordBreakWithBackTracking(s: string, wordDict: string[]): boolean {
  // only remember when the outcome is false
  const memory: boolean[] = [];

  function backTracking(index: number, memory: boolean[]) {
    if (index >= s.length) return true;
    if (memory[index] === false) return false;

    for (let i = index; i < s.length; i++) {
      const word = s.substring(index, i + 1);

      if (wordDict.includes(word) && backTracking(i + 1, memory)) {
        return true
      }
    }

    // reset to last state
    memory[index] = false
    return false;
  }

  return backTracking(0, memory);
}

export function wordBreak(s: string, wordDict: string[]): boolean {
  const dp: boolean[] = new Array(s.length + 1).fill(false);

  dp[0] = true

  for (let j = 0; j <= s.length; j++) {
    for (let i = 0; i <= s.length; i++) {
      let word: string = s.substring(j, i);
      if (wordDict.includes(word) && dp[j]) {
        dp[i] = true;
      }
    }
  }

  return dp[s.length];
}