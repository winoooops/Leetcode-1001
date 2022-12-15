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
