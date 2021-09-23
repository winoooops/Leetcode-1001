# 有效的括号

给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效. s 仅由括号 '()[]{}' 组成.

有效字符串需满足：

- 左括号必须用相同类型的右括号闭合。
- 左括号必须以正确的顺序闭合。

```
输入：s = "()"
输出：true
```

```
输入：s = "(]"
输出：false
```

```
输入：s = "([)]"
输出：false
```

```
输入：s = "{[]}"
输出：true
```


## 递归
```typescript
function isValid(s: string): boolean {
  const pMap = new Map()
  pMap.set('(', ")")
  // pMap.set(')', "(")
  pMap.set("[", "]")
  // pMap.set("]", "[")
  pMap.set("{", "}")
  // pMap.set("}", "{")

  const arr = s.split('')
  const recursive = (array: string[]) => {
    if (array.length > 2) {
      if (isValid(array[0], array[1])) {
        return recursive(array.splice(2))
      } else {
        return isValid(array[0], array[array.length - 1]) && recursive(array.splice(1, array.length - 2))
      }
    } else {
      return isValid(array[0], array[1])
    }
  }

  const isValid = (one: string, two: string): boolean => {
    if (!one || !two) return false
    return pMap.get(one) === two
  }

  return recursive(arr)
};

```

## 栈操作

> 维护一个栈，遇到左括号入栈，遇到右括号，取出栈顶元素，判断和当前右括号是否配对。

但要注意以下两种特殊情况。

- 遇到右括号，但栈为空，说明缺少左括号。

- 遍历完整个括号序列，栈不为空，说明多了左括号。

```typescript
const pMap = new Map()
  pMap.set('{', 1)
  pMap.set('[', 2)
  pMap.set('(', 3)
  pMap.set('}', 4)
  pMap.set(']', 5)
  pMap.set(')', 6)

  const pArr = s.split('')
  const stack = []
  let isValid = true
  pArr.forEach(item => {
    // 如果为前括号，则直接入栈
    if (pMap.get(item) >= 1 && pMap.get(item) <= 3) return stack.push(item)
    // 获取栈顶的元素和值 
    let currIndex = pMap.get(item)
    let stackTop = stack.pop()
    let stackTopIndex = pMap.get(stackTop)
    // 如果不匹配则不满足条件
    if (currIndex - 3 !== stackTopIndex) {
      return isValid = false
    }
  })
  return isValid && stack.length === 0 // 需要确定栈内没有元素

```


