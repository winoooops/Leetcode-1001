# 反转字符串中的单词
给定一个字符串，逐个翻转字符串中的每个单词。

## 示例
```
输入: "the sky is blue"
输出: "blue is sky the"
```

```
示例 2：
输入: "  hello world!  "
输出: "world! hello"
解释: 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。
```

```
示例 3：
输入: "a good   example"
输出: "example good a"
解释: 如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。
```

## 思路分析

这里使用不产生额外空间的解题思路,
* 首先去除多余的空格
* 反转整个字符串
* 反转逐个单词


```typescript 
export function delExSpaces(str: string[]) {
  const len = str.length;

  let l: number = 0;
  let r: number = 0;

  while(r < len) {
    // 去除字符串头部多余的空格 
    if(l === 0 && str[r] === " ") {
      r++
      continue;
    }

    // 去除字符串中间多余的空格
    if(r > 1 && str[r] === " " && str[r-1] === " ") {
      r++
      continue;
    }
    str[l++] = str[r++]
  }

  // 去除字符串末尾多余的空格, 此时l指针为数组的最后一位
  if(l > 1 && str[l - 1] === " ") {
    str.length = l - 1
  } else{
    str.length = l
  }

  return str
}

export function reverse(str: string[], left: number, right: number) {
  let tmp: string
  
  while(left < right) {
    tmp = str[left]
    str[left] = str[right]
    str[right] = tmp

    left++
    right--
  }
}


export function reverseWords(str: string) {
  let strArr = str.split('');
  let result = delExSpaces(strArr);
  reverse(result, 0, result.length - 1)

  let l = 0 
  let r = 0 

  while(r < result.length) {
    while(result[r] !== " " && r < result.length) r++ 
    reverse(result, l, r - 1)
    l = r + 1 
    r = r + 1
  }

  return result.join("")
}
```
