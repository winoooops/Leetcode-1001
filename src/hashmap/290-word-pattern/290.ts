export function wordPattern(pattern: string, s: string): boolean {
  const words = s.split(" ");

  const patternMap: Map<string, string> = new Map();
  const wordMap: Map<string, string> = new Map();

  for(let i = 0; i <= pattern.length; i++) {
    const word = patternMap.get(pattern[i]);
    const char = wordMap.get(words[i]);

    if((word && word !== words[i]) || (char && char !== pattern[i])) return false;

    patternMap.set(pattern[i], words[i]);
    wordMap.set(words[i], pattern[i]);
  }

  return true;
}
