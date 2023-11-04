export function groupAnagrams(strs: string[]): string[][] {
  const anagramMap: Map<string, string[]> = new Map();

  for(let word of strs) {
    let product = word.split("").sort().join("");

    const arr = anagramMap.get(product);
    if(arr) {
      anagramMap.set(product, [...arr, word]);
    } else {
      anagramMap.set(product, [word]);
    }
  }

  return Array.from(anagramMap.values());
}
