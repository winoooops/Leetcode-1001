给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。

如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。

假设环境不允许存储 64 位整数（有符号或无符号）。

```
输入：x = 123
输出：321
```

```
输入：x = -123
输出：-321
```

```
输入：x = 120
输出：21
```

```
输入：x = 0
输出：0
```


## 取余数
```typescript
function reverse(x: number): number {
  let sum = 0
  while (x !== 0) {
    let digit = x % 10
    if (x < 0) {
      x = Math.ceil(x / 10) // 如果为-9 /10 , floor的结果是-1
    } else {
      x = Math.floor(x / 10)
    }
    sum = sum * 10 + digit
  }
  if (sum < Math.pow(-2, 31) || sum > Math.pow(2, 31) - 1) return 0
  return sum
};
```