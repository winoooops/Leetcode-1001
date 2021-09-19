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


## 横向两两对比
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