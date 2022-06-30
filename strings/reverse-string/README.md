# 反转字符串

编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 *s* 的形式给出。
不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 `O(1)` 的额外空间解决这一问题。

## 示例

```
输入：s = ["h","e","l","l","o"]
输出：["o","l","l","e","h"]
```


```
输入：s = ["H","a","n","n","a","h"]
输出：["h","a","n","n","a","H"]
```

## 解题思路

前后两个指针同时运动, 交换当前指针所在元素. 

```typescript 
export function reverseString(s: string[]): string[] {
  let l = 0 
  let r = s.length - 1 


  while(l < r) {
    let temp = s[l]
    s[l] = s[r]
    s[r] = temp

    l++
    r--
  }

  return s
}

```



# 反转字符串II 

给定一个字符串 *s* 和一个整数 *k*，从字符串开头算起，每计数至 *2k* 个字符，就反转这 *2k* 字符中的前 *k* 个字符。

如果剩余字符少于 *k* 个，则将剩余字符全部反转。
如果剩余字符小于 *2k* 但大于或等于 *k* 个，则反转前 *k* 个字符，其余字符保持原样。

## 示例

```
输入：s = "abcdefg", k = 2
输出："bacdfeg"
```

```
输入：s = "abcd", k = 2
输出："bacd"
```

## 解题思路

不需要通过判断不同条件然后使用递归; 只需要for循环的时候`i += 2*k`,让后对前k位的字符串进行反转即可.

```typescript 
export function reverseStr(s: string, k: number): string {
  let l: number 
  let r: number
  let arr: string[] = s.split("");
  let tmp: string;

  for(let i = 0; i < s.length ; i += 2 * k) {
    l = i 
    r = i + k - 1 > s.length ? s.length - 1 : i + k - 1; 

    while(l < r) {
      tmp = arr[l]
      arr[l] = arr[r]
      arr[r] = tmp;

      l++
      r--
    }
  }
  return arr.join("");
}
```
