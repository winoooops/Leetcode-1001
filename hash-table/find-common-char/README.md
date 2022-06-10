# 寻找常用字符

给你一个字符串数组 words ，请你找出所有在 words 的每个字符串中都出现的共用字符（ 包括重复字符），并以数组形式返回。你可以按 任意顺序 返回答案。


## 示例

示例 1：
```
输入：words = ["bella","label","roller"] 输出：["e","l","l"] 示例 2：
```

```
输入：words = ["cool","lock","cook"] 输出：["c","o"]
```


### 哈希统计出现次数

统计出现搜索字符串中26个英文字母出现的频率, 取频率的最小值, 输出到数组里即可.

```typescript 
export function commonChars(words: string[]): string[] {
  const result: string[] = []
  const occurance = new Array(26).fill(0)
  const compare = new Array(26).fill(0)
  const base = "a".charCodeAt(0)


  // 利用第一个字符串初始化出现频率
  for(let i of words[0]) {
    occurance[i.charCodeAt(0) - base] ++
  }

  // 遍历字符串: 更新出现频率
  for(let i = 1 ; i < words.length; i++) {
    const word = words[i]
    compare.fill(0)

    for(let char of word) {
      compare[char.charCodeAt(0) - base] ++
    }
    
    // 更新时候采出现的最小值
    for(let j = 0 ; j < occurance.length ; j++) {
      occurance[j] = Math.min(occurance[j], compare[j])
    }
  }

  // 出现几次推几次字母到数组中
  for(let n = 0 ; n < occurance.length ; n++) {
    let count = occurance[n]
    while(count > 0) {
      result.push(String.fromCharCode(n+base))
      count --
    }
  }


  return result
}
```
