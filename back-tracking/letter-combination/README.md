# 17. 电话号码的字母组合 

![letter-combination](../../static/img/back-tracking/letter-combination.png)

给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合.

给出数字到字母的映射如下（与电话按键相同). 注意 1 不对应任何字母.

## 示例 

```
输入："23" 
输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
```

## 思路 

大体思路和组合相同, 唯一需要注意的是每一层的元素不是固定的, 需要从2-9对应的字符串中选取, 可以用二维数组或者哈希表来存储. 

```typescript 
function letterCombinations(digits: string): string[] {
  const digitMap: Map<string, string[]> = new Map([
    ["2", ["a", "b", "c"]],
    ["3", ["d", "e", "f"]],
    ["4", ["g", "h", "i"]],
    ["5", ["j", "k", "l"]],
    ["6", ["m", "n", "o"]],
    ["7", ["p", "q", "r", "s"]],
    ["8", ["t", "u", "v"]],
    ["9", ["w", "x", "y", "z"]]
  ])

  const result: string[] = []

  function backTracking(index: number, path: string[]) {
    if (index > digits.length) return

    if (path.length === digits.length) {
      return result.push(path.join(""))
    }

    const letters = digitMap.get(digits[index])

    for (let i = 0; i < letters.length; i++) {
      path.push(letters[i])
      backTracking(index + 1, path)
      path.pop()
    }
  }

  if (digits === "") return result
  backTracking(0, [])
  return result
};
```