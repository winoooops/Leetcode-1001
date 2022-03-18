## strStr()

实现 strStr() 函数。

给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。如果不存在，则返回  -1 。

 

> 说明：
> 
> 当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。
>
> 对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与 C 语言的 strstr() 以及 Java 的 indexOf() 定义相符。
 

示例 1：
```
输入：haystack = "hello", needle = "ll"
输出：2
```
示例 2：
```
输入：haystack = "aaaaa", needle = "bba"
输出：-1
```
示例 3：
```
输入：haystack = "", needle = ""
输出：0
``` 

> 提示：
>
> 0 <= haystack.length, needle.length <= 5 * 104
> haystack 和 needle 仅由小写英文字符组成



## 暴力(朴素)算法
```ts
export const strStr = (haystack: string, needle: string): number => {
  if (needle === '') return 0
  for (let i = 0; i + needle.length <= haystack.length; i++) {
    let flag = true
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        flag = false
        break;
      }
    }
    if (flag) return i
  }

  return -1
}
```

* 时间复杂度：n 为原串的长度，m 为匹配串的长度。时间复杂度为`O(n*m)`

* 空间复杂度：O(1)。

或者可以利用`substring()`的方法:
```ts
export const strStr = (haystack: string, needle: string): number => {
  if (needle === '') return 0

  const hList = haystack.split('')
  const fChar = needle.charAt(0)
  const length = needle.length

  for (let i = 0; i < hList.length; i++) {
    if (hList[i] === fChar) {
      if (haystack.substring(i, i + length) === needle) return i
    }
    else i+=length
  }
  return -1
}

console.log(strStr('hello', 'll'))
```



## *KMP* 解法

> KMP 算法是一个快速查找匹配串的算法，它的作用其实就是本题问题：如何快速在「原字符串」中找到「匹配字符串」。KMP的经典思想就是:当出现字符串不匹配时，可以记录一部分之前已经匹配的文本内容，利用这些信息避免从头再去做匹配。

### 计算最长公共(相等)前后缀

给定一个字符串, 找到另前缀和后缀相等的最长字符串. 
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

前缀表: 是不包括首字母的子字符串和其最长公共前后缀的集合 
对于字符串`aabaaf`来说: 

| 子字符串 | 最长公共前后缀的长度 |
| ---- | ---- |
| a | 0 |
| aa | 1 |
| aab | 0 |
| aaba | 0 | 
| aabaa | 2 | 

前缀表就是: 
```
|a|a|b|a|a|f|

|0|1|0|0|2|0|
```

### next数组
