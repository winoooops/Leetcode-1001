# 回文数

给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。

回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，121 是回文，而 123 不是。

```
输入：x = 121
输出：true
```

```
输入：x = -121
输出：false
解释：从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
```

```
输入：x = 10
输出：false
解释：从右向左读, 为 01 。因此它不是一个回文数。
```

```
输入：x = -101
输出：false
```

## 关键点
- 负数必然不是回文数
- 如果回文数的末尾为0， 那么满足条件的首位也必须为0， 只有0满足条件：`(x % 10 == 0 && x != 0))`


## 前后对比
```typescript
function isPalindrome(x: number): boolean {
  const arr = x.toString().split('') // 转换成数组
  let i = 0
  let j = arr.length - 1 - i
  while (i < j) {
    if (arr[i] !== arr[j]) {
      return false // 如果不相等直接退出
    }
    i++
    j--
  }
  return true // 比较完成后没有退出则为回文数
};
```

## 不转化为字符串
> 当数字长度为奇数时，我们可以通过 revertedNumber/10 去除处于中位的数字。例如，当输入为 12321 时，在 while 循环的末尾我们可以得到 x = 12，revertedNumber = 123，由于处于中位的数字不影响回文（它总是与自己相等），所以我们可以简单地将其去除。

```typescript
const isPalidome = (x: number):boolean => {
  if (x < 0 || (x % 10 == 0 && x != 0)) return false
  if (x === 0) return true
  let revertNum = 0
  while (x > revertNum) {
    let a = x % 10
    revertNum = revertNum * 10 + a
    x = Math.floor(x / 10)
  }
  return x === revertNum || x === Math.floor(revertNum / 10)
}
```