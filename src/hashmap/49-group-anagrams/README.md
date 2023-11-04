# 49. Group Anagrams

Given an array of strings `strs`, group the anagrams together. You can return the answer in any order.

An *Anagram* is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

# Example

```ts
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
```

```
Input: strs = [""]
Output: [[""]]
```

```
Input: strs = ["a"]
Output: [["a"]]
```



Constraints:
* 1 <= strs.length <= 104
* 0 <= strs[i].length <= 100
* strs[i] consists of lowercase English letters.

## Solution

One character of anagram is that -- if we sort the chars in order, they will always appear in the same order.  
So we can use this to store a hashMap that maps `<s, occurance>`, where `s` is the sorted outcome, occurrence is the words that are one of the anagrams.

```ts
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
```
