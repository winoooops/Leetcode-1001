# 重复的子字符串


给定一个非空的字符串 `s`, 检查是否可以通过由它的一个子串重复多次构成. 

## 示例

```
输入: s = "abab"
输出: true
解释: 可由子串 "ab" 重复两次构成。
```

```
输入: s = "aba"
输出: false
```

```
输入: s = "abcabcabcabc"
输出: true
解释: 可由子串 "abc" 重复四次构成。 (或子串 "abcabc" 重复两次构成。)
```


## 思路

### 利用KMP规律
![pattern](../../static/img/string/repeated-substring.png)

以next数组(统一进行-1变换)为例, 如果`next[lengh - 1] !== -1`, 那么这个字符串就存在最长相等前后缀, 其长度为`next[length - 1] + 1`; 

此时如果`lengh % (length - (next[length - 1] + 1)) === 0`, 那么该字符串即满足可被这个最长相等前后缀多次构成的条件

```typescript 
export function repeatedSubstring(s: string) {
  const len = s.length 
  const next = getNext(s)
  const suffixLengh = next[len - 1] + 1
  
  return suffixLengh === 0 ? false : len % (len - (next[len -1] + 1)) === 0 
}

export function getNext(s: string): number[] {
  const next: number[] = []

  let start = -1 
  next.push(start)

  for(let i = 1; i < s.length ; i++){

    while(start > -1 && s[start+1] !== s[i]) {
      start = next[start]
    }

    if(s[start+1] === s[i]) {
      start++
    }

    next.push(start)
  }

  return next
}
```

### 滑动窗口

利用ES6的新语法`String.prototype.repeat(count: number)`

```typescript 
export function repeatSubStringIII(s: string) {
  let length = s.length 

  let step = 1 
  let head = s.substring(0, step)

  while(step <= length / 2) {
    if(head.repeat(length / step) === s) {
      return true
    }
    step++
    head = s.substring(0, step)
  }

  return false
}
```

### 手动判断规律

* 首先判断几种特殊情况
  * 完全由单个字母组成
  * 只有1个或者两个字母的情况
* 子串同时满足下列条件时, 满足题干要求
  * 子串的结尾和字符串结尾一致
  * 字符串的长度能够被子串的长度整除
  * 

```typescript 
export function repeatedSubstringII(s: string) {
  const length = s.length;

  // 特殊情况: 长度
  if(length === 1) return false
  if(length === 2) return s[0] === s[1]

  // 特殊情况: 单个字母
  if(s[0] === s[length - 1]) {
    if(s[0].repeat(length) === s) {
      return true
    }
  }

  // 判断3个条件
  for(let i = 1 ; i < length / 2 ; i++) {
    if(s[i] === s[length - 1] && length % (i + 1) === 0 && s.slice(0, i + 1).repeat(length/(i+1)) === s) {
      return true
    }

  }

  return false
}
```
