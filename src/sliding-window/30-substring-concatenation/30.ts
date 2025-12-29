export function findSubstring(s: string, words: string[]) {
  const wordSize = words[0].length;
  const windowSize = words.length * wordSize;
  const wordsMap: Map<string, number> = new Map();
  const ans: number[] = [];

  for (const word of words) {
    wordsMap.set(word, (wordsMap.get(word) || 0) + 1);
  }

  for (let i = 0; i < s.length - windowSize; i++) {
    let matchCount = 0;
    const map = new Map(wordsMap);

    for (let j = i; j <= i + windowSize - wordSize; j += wordSize) {
      const currentWord = s.substring(j, j + wordSize);
      const wordCount = map.get(currentWord);

      if (wordCount && wordCount > 0) {
        map.set(currentWord, wordCount - 1);
        if (map.get(currentWord) === 0) {
          matchCount++;
        }
      }

      if (matchCount === map.size) {
        ans.push(i);
        break;
      }
    }
  }

  return ans;
}

export function findSubstringII(s: string, words: string[]) {
  const result: number[] = [];
  if (!s || s.length === 0) return result;

  const wordSize = words[0].length;
  const numWords = words.length;
  const windowSize = wordSize * numWords;

  if (s.length < windowSize) return result;

  const wordMap: Map<string, number> = new Map();
  for (const c of words) {
    wordMap.set(c, (wordMap.get(c) ?? 0) + 1);
  }

  for (let i = 0; i + windowSize < s.length; i++) {
    let matched = 0;
    const map = new Map(wordMap);
    let left = i;

    for (let j = i + wordSize; j <= i + windowSize; j += wordSize) {
      const currentWord = s.slice(left, j);

      if (map.has(currentWord)) {
        matched++;
        map.set(currentWord, map.get(currentWord)! - 1);
      }

      if (matched === numWords) {
        result.push(i);
        break;
      }

      left += wordSize;
    }
  }

  return result;
}
