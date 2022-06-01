# 有效的字母异位词

> An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

## 示例

```
Input: s = "anagram", t = "nagaram"

Output: true
```

```
Input: s = "rat", t = "car"

Ouput: false
```

## 思路

### 哈希表

因为考虑到Anagram单词顺序可能发生改变, 所以考虑使用哈希表来记录26个字母在单词s中的出现次数(出现一次+1), 然后在遍历单词t的出现次数(出现一次-1), 如果最后全部字母的出现次数为0, 则成立.

* 构造26个字母的数组
* 通过ASCII值来判断当前的字母在哪个位置

```typescript 
export function validAnagram(s: string, t: string) {
  if(!s.length) return false

  const letters = new Array(26).fill(0)

  const aPos = "a".charCodeAt(0)
  

  for(let i of s) {
    letters[i.charCodeAt(0) - aPos]++
  }

  for(let j of t) {
    letters[j.charCodeAt(0) - aPos]--
  }

  return letters.every(count => count === 0)
}
```

> 时间复杂度为O(n), 空间复杂度O(1)
