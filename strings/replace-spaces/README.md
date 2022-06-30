# 替换空格

实现一个函数, 把字符串中的`s`的每个空格替换成`%20`. 

## 示例

```
输入：s = "We are happy."
输出："We%20are%20happy."
```

## 思路
> 对于数组填充的问题, 可以预先给数组扩容到带填充的大小, 然后再从后往前进行操作. 优点是1) 不用申请新数组; 2) 从后向前填充, 避免了将新添加的元素向后移动(时间复杂度位O(n*2))


如果想不使用额外的空间, 可以使用双指针法
* 首先需要扩充数组
* 然后从后向前用双指针法替换空格


![replace-spaces](../../static/img/string/replace-space.gif)

```typescript 
export function replaceSpace(s: string): string {
  const strArr = Array.from(s);
  const oldLen = strArr.length;

  let count = 0 

  for(let i = 0 ; i < oldLen ; i++) {
    if(strArr[i] === ' ') count++
  }

  let left = oldLen - 1 
  let right = strArr.length + 2 * count - 1

  while(left >= 0) {
    if(strArr[left] !== ' ') {
      strArr[right--] = strArr[left--]
    } else {
      strArr[right--] = '0';
      strArr[right--] = '2';
      strArr[right--] = '%';
      left--
    }
  }
 
  return strArr.join('');
}
```
