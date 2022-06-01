# 分组字母异位词

给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。

字母异位词 是由重新排列源单词的字母得到的一个新单词，所有源单词中的字母通常恰好只用一次。



## 哈希表
利用map存储多对单词

```typescript
export function groupAnagram(strs: string[]) {
  const base = "a".charCodeAt(0)
  const map = new Map() 

  for(const word of strs) {
    let letters = new Array(26).fill(0)
    
    for(let i of word) {
      letters[i.charCodeAt(0) - base]++
    }
    
    let occurance = letters.toString()

    map.has(occurance) ? map.get(occurance).push(word) : map.set(occurance, [word])
  }

  return Array.from(map.values())
}
```

## reduce排序
```typescirpt
export function groupAnagram(strs: string[]) {
  const obj = strs.reduce((prev, curr) => {
    // 统一成同个顺序
    let key = curr.split('').sort().toString()
    prev[key] ? prev[key].push(curr): prev[key] = [curr]
    return prev
  },{})

  return Object.values(obj)
}
```
