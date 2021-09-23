# 最长公共前缀

编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

```
输入：strs = ["flower","flow","flight"]
输出："fl"
```

```
输入：strs = ["dog","racecar","car"]
输出：""
解释：输入不存在公共前缀。
```


## 纵向扫描
```typescript
function findLongestCommonPrefix(strs: string[]): string {
  let prefix = ''
  if (!strs.length) return prefix
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 0; j < strs.length; j++) {
      if (strs[0][i] !== strs[j][i]) return prefix
    }
    prefix += strs[0][i]
  }

  return prefix
}
```
- 时间复杂度：O(mn)O(mn)，其中 mm 是字符串数组中的字符串的平均长度，nn 是字符串的数量。最坏情况下，字符串数组中的每个字符串的每个字符都会被比较一次。

- 空间复杂度：O(1)O(1)。使用的额外空间复杂度为常数。


## 横向扫描
- 用`String.prototype.charAt(n)`获取第n+1位的字符
- 遍历每个字符串，比较这个字符串和上一次公共前缀

```typescript
const LongestCommonPrefix = (strs: string[]): string => {
  // 对比时只需要遍历到最短元素的结尾
  const commonPrefix = (one: string, two: string): string => {
    let prefix = ''
    const length = Math.min(one.length, two.length)
    if (length === 0) return prefix
    for (let i = 0; i < length; i++) {
      // if (!prefix) prefix = ''
      if (one.charAt(i) !== two.charAt(i)) return prefix
      prefix += one.charAt(i)
    }
    return prefix
  }
  // 预设第一个元素为prefix的起始值
  let prefix = strs[0]
  // 如果只有一个元素,则返回那个元素
  if (strs.length === 1) return strs[0]
  // 依次遍历元素,进行两两对比
  for (let i = 1; i < strs.length; i++) {
    prefix = commonPrefix(strs[i], prefix)
    if (!prefix) return prefix
  }
  return prefix
}

```
## 两分查找

```typescript

```