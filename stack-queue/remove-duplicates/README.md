# 删除字符串中所有的相邻重复项

给出由小写字母组成的字符串 S，重复项删除操作会选择两个相邻且相同的字母，并删除它们。

在 S 上反复执行重复项删除操作，直到无法继续删除。

在完成所有重复项删除操作后返回最终的字符串。答案保证唯一。

## 示例

```
输入："abbaca"
输出："ca"
解释：
例如，在 "abbaca" 中，我们可以删除 "bb" 由于两字母相邻且相同，这是此时唯一可以执行删除操作的重复项。之后我们得到字符串 "aaca"，其中又只有 "aa" 可以执行重复项删除操作，所以最后的字符串为 "ca"。

```



## 思路

### 栈(使用递归法)

未出现匹配时入栈, 在出现匹配项时候, 把匹配的那组字母出栈.

> 这里需要考虑到出栈之后再次出现匹配需要再次判断的情况


```typescript
function removeDuplicates(s: string): string {
    let stack: string[] = []

    for(let i of s) {
        stack.push(i)
        stack = poppin(stack)
    }

    return stack.join("")
};

function poppin(arr: string[]) {
    if(arr.length < 2) return arr

    if(arr[arr.length - 1] === arr[arr.length -2]) {
        arr.pop()
        arr.pop()
        arr = poppin(arr)
    }

    return arr
}
```

### 栈(不使用递归)

针对上一种方法的优化, 因为我们在栈已压入了字母的顺序, 所以我们只需要匹配栈顶的元素和当前遍历的元素是否一致即可. 

```
export function removeDuplicates(s: string) {
  let stack: string[] = []

  for(let i of s) {
    if(stack.length > 0 && i === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(i)
    }
  }

  return stack.join("")
}

```

### 双指针法

与不是用递归的栈方法远离一致, 也是比较栈顶的元素和当前元素是否匹配.

```
export function removeDuplicates2(s: string) {
  let stack: string[] = []

  let i = 0 
  for(let j = 0 ; j < s.length ; j++) {

    if(i > 0 && s[j] === stack[i - 1]) {
      // 如果匹配, 回退栈顶的指针
      i--
    } else {
      // 如果不匹配, 压入栈
      // 然后移动栈顶指针
      stack[i] = s[j]
      i++
    }
  }

  return stack.join("")
}
```
