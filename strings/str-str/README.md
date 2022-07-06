# **KMP**实战例题: 实现strStr()

实现一个`strStr()`函数:给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。

## 示例

```
输入: haystack = "hello", needle = "ll" 
输出: 2
```

```
输入: haystack = "aaaaa", needle = "bba" 
输出: -1
```

> 说明: 当 *needle* 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。 对于本题而言，当 *needle* 是空字符串时我们应当返回 **0** 。这与C语言的 `strstr()` 以及 Java的 `indexOf()` 定义相符。


## 思路

经典的KMP题目: **但出现字符不匹配时, 可以记录一部分之前已经匹配的文本内容, 避免从头开始匹配**.

> 算法的发明人为Knuth，Morris和Pratt，所以取了三位学者名字的首字母, 叫做KMP算法.

KMP主要应用在字符串匹配上.

## *KMP* 解法

> KMP 算法是一个快速查找匹配串的算法，它的作用其实就是本题问题：如何快速在「原字符串」中找到「匹配字符串」。KMP的经典思想就是:当出现字符串不匹配时，可以记录一部分之前已经匹配的文本内容，利用这些信息避免从头再去做匹配。

### 计算最长公共(相等)前后缀

给定一个字符串, 找到一个最长的让字符串前缀和后缀相等的子串. 

```
字符串: aba 
最长公共前后缀: a, 长度是1
```

```
字符串: abab
最长公共前后缀: ab, 长度是2
```

```
字符串: a
最长公共前后缀: 不存在, 长度是0
```

```
字符串: abc
最长公共前后缀: 不存在, 长度是0
```

### 前缀表

> 前缀表是用来回退的, 它记录了模式串文串不匹配的时候, 模式串应该从哪里开始重新匹配.

> **但前后缀相等的情况下, 回退的时候可以直接回退到相等的前缀之后下一位, 这样可以省去不必要的重复**

前缀表: 是不包括首字母的子字符串和其最长公共前后缀的集合 
对于字符串`aabaaf`来说: 

| 子字符串 | 最长公共前后缀的长度 |
| ---- | ---- |
| a | 0 |
| aa | 1 |
| aab | 0 |
| aaba | 1 | 
| aabaa | 2 | 

前缀表就是: 
```
|a|a|b|a|a|f|

|0|1|0|1|2|0|
```

> 前缀表特性: 如果前缀表对应的小标为*i*, 那么字符串在匹时候就应该从下标`i`开始重新比较.

### next数组

> next数组指引我们在遇到冲突的时候需要回退到那里, 其本质也是通过前缀表实现的.



构造next数组(不对next数组进行变换的情况)

#### 1. 初始化

```typescript 

// 模式串中下标为0是, 固定没有最长相等前后缀
let left = 0 
next.push(left)

```

#### 2. 处理前后缀不相同的情况


* 遍历模式串的循环下标从1开始
  ```typescript
  for(let right = 1; right < s.length ; right++){ 
    // 此时的`next[right]` 就记录着`s.slice(0, j)`这个子串最长公共前后缀的长度
    
  }
  ```
* 不相同的情况下需要回退
  ```
  while(left > 0 && s[left] !== s[right]) {
    left--
  }
  ```
#### 3. 处理前后缀相同的情况
  ```
  if(s[left] === s[right]) {
    left++
  }
  ```


#### 完整代码 
```typescript
export function getNext(str: string) {
  const next: number[] = []
  const len = str.length

  let left = 0 
  next.push(left)

  for(let right = 1; right < len ; right++) {

    while(left > 0 && str[left] !== str[right]) {
      left = next[left - 1]
    }

    if(str[left] === str[right]) {
      left++
    }

    next.push(left)
  }

  return next
}
```


### 利用next数组来做匹配


当文本串和模式串不同的时候, 就需要回退. 而回退最有效的方式不是回退到模式串的开头, 而是回退到模式串不同指针上一位公共前后缀结束的地方(可以通过next数组快速得到)


```typescript
export function strStr(haystack: string, needle: string) {
  if(haystack.length === 0) return 0

  const next = getNext(needle);

  // 模式串的指针
  let j = 0 

  // 循环遍历文本串
  for(let i = 0; i < haystack.length ; i++) {
    while(j > 0 && haystack[i] !== needle[j]) {
      j = next[j - 1]
    }

    if(haystack[i] === needle[j]) {
      if(j === needle.length - 1) {
        return i - j
      }
      j++
    }
  }

  return -1
}
```

