# 找到字符串中所有字母异位词

给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。

## 示例
```
输入: s = "cbaebabacd", p = "abc"
输出: [0,6]
解释:
起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。
```

```
输入: s = "abab", p = "ab"
输出: [0,1,2]
解释:
起始索引等于 0 的子串是 "ab", 它是 "ab" 的异位词。
起始索引等于 1 的子串是 "ba", 它是 "ab" 的异位词。
起始索引等于 2 的子串是 "ab", 它是 "ab" 的异位词。
```

### 思路

利用双指针截取符合长度的子字符串, 和对比目排序后进行比对

```typescript 
export function findAnagram(s: string, p: string) {
  const result = []
  if(p.length > s.length) return result 
  
  let slow = 0 
  let fast = 0 
  
  while(fast <= s.length) {
      if(fast - slow === p.length) {
          isAnagram(s.substring(slow, fast), p) && result.push(slow)
          slow++
      } 
      fast++
  }
  
  return result
}

function isAnagram(one: string, two: string) {
  const base = "a".charCodeAt(0)
    const letters = new Array(26).fill(0)
    
    for(let i of one) {
        letters[i.charCodeAt(0) - base]++
    }
    
    for(let j of two) {
        letters[j.charCodeAt(0) - base]--
    }
    
    return letters.every(item => item === 0) 
}
```

缺点: 
* 每次移动窗口满足条件后都要重新建一张hash表
* 窗口每次只前进一步

优化
* 只针对p建立哈希表, 并且记录下缺失的字母数量
  ```
  let occruance: {[key: string]: number} = {}
  let missingChars = 0

  for(let char of p) {
    if(!occurance[p]) {
      occurance[p] = 1 
      missingChars++
    } else{
      occurance[p] ++
    }
  }
  ```  
* 遍历s, 当s出现的字母数量和次数对应上p缺失的字母数量时, 比较子字符串和p的长度
  * 如果长度相等, 那么符合条件
  * 在慢指针往右边移动的时候, 判断下个字母是否出现在p中, 如果出现, count--

> 关键: 这个解法中, 是慢指针的位置决定了子字符串的长度


```typescript 
export function findAnagram(s: string, p: string) {
  const result: number[] = []
  
  if(p.length > s.length) return result 

  let left = 0 
  let right = 0 

  const occurance: { [key: string]: number } = {}

  let count = 0 
  let missingChars = 0 

  // 统计出现次数
  for(let char of p) {
    if(!occurance[char]) {
      occurance[char] = 1
      missingChars++
    } else {
      occurance[char]++
    }
  }


  while(right < s.length) {
    const char = s[right++]

    // 如果字母出现, 需要判断次数: 只有当次数清零之后才算某个字母补全
    if(--occurance[char] === 0) {
      count++
    }

    while(count === missingChars) {
      if(right - left === p.length) result.push(left)
      
      let leftChar = s[left++]      
      // 在转移到下一个字母之前, 需要回复初始状态 
      if(++occurance[leftChar] > 0) count--
    }
  }

  return result

}


```
