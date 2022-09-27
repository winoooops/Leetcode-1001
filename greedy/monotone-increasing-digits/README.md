# 738. 单调递增的数字 

当且仅当每个相邻位数上的数字 x 和 y 满足 x <= y 时，我们称这个整数是单调递增的。

给定一个整数 n ，返回 小于或等于 n 的最大数字，且数字呈 单调递增 。

## 示例

```
输入: n = 10
输出: 9
```

```
输入: n = 1234
输出: 1234
```

```
输入: n = 332
输出: 299
```

## 思路

 > 如果出现`strNum[i] < strNum[i - 1]`的情况, 需要进行的操作是: `strNum[i - 1]--; strNum[i] = 9;` 只需要保证每一次都这么操作, 那么对于全局来说, 就一定可以制造小于`strNum`并且符合条件的最大数字. 

> 这里如果采用从前往后的遍历方式的话, 会改变已更改过的结果, 所以推荐使用从后到前的遍历方式. 

```typescript 
export function monoIncreaseDigits(n: number): number {
  const strNum: number[] = []

  while(n >= 1) {
    strNum.push(n % 10);
    n = Math.floor(n / 10);
  }

  let flag: number;

  for(let i = 0; i < strNum.length; i++) {
    if(i > 0 && strNum[i] > strNum[i - 1]) {
      strNum[i]--;
      strNum[i-1] = 9;
      flag = i - 2
    }
  }

  while(flag >= 0) {
    strNum[flag] = 9
    flag--
  }

  return Number(strNum.reverse().join(""))
}
```


