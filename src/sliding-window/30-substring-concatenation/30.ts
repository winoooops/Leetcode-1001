export function findSubstring(s: string, words: string[]) {
  const wordSize = words[0].length;
  const windowSize = words.length * wordSize;
  const wordsMap: Map<string, number> = new Map();
  const ans: number[] = [];

  for(let word of words) {
    wordsMap.set(word, (wordsMap.get(word) || 0) + 1);
  }

  for(let i = 0; i < s.length - windowSize; i++) {
    let matchCount = 0;
    let map = new Map(wordsMap);

    for(let j = i; j <= i + windowSize - wordSize; j += wordSize) {
      let currentWord = s.substring(j, j + wordSize);
      let wordCount = map.get(currentWord);

      if(wordCount && wordCount > 0) {
        map.set(currentWord, wordCount - 1);
        if(map.get(currentWord) === 0) {
          matchCount++;
        }
      }

      if(matchCount === map.size) {
        ans.push(i);
        break;
      }
    }
  }

  return ans;
}
