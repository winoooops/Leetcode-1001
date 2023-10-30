# 383. Ransom Note

Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

* 1 <= ransomNote.length, magazine.length <= 105
* ransomNote and magazine consist of lowercase English letters.

## Example

```
Input: ransomNote = "a", magazine = "b"
Output: false
```

```
Input: ransomNote = "aa", magazine = "ab"
Output: false
```

```
Input: ransomNote = "aa", magazine = "aab"
Output: true
```

## Solution

### HashMap
*from the perspective of ransomNote*, 
1. Collect all the letters required and store them in a hashmap `need`
2. go through the magazine, if encounter a character that's in the hashmap, subtract it's number in the map by 1
    * if the number in the map is equal to 0, than the letter required in the ransom is fulfilled
3. check if `fulfilled === need.size` 

```ts
export function canConstruct(ransomNote: string, magazine: string): boolean {
  const needMap: Map<string, number> = new Map();

  for(let c of ransomNote) {
    needMap.set(c, (needMap.get(c) || 0)  + 1);
  }

  let fulfilled = 0;
  for(let c of magazine) {
    if(needMap.has(c)) {
      const target = needMap.get(c);
      if(target) {
        needMap.set(c, target - 1);
        if(target - 1 === 0) fulfilled++;
      }
    }
  }

  return fulfilled === needMap.size;
}
```

*use a 26-characters dict to check everything from the perspective of magazine is sufficient for writing a ransom*

```ts
export function canConstructTwo(ransom: string, magazine: string): boolean {
  const charArr: number[] = new Array(26).fill(0);
  const BASE = 'a'.charCodeAt(0)
  for(let c of magazine) {
    charArr[c.charCodeAt(0) - BASE]++;
  }

  for(let c of ransom) {
    const target = --charArr[c.charCodeAt(0) - BASE];
    if(target < 0) {
      return false;
    }
  }

  return true;
}
```

