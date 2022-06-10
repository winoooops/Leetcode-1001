# 快乐数

> **快乐数**定义为：
> * 对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。
> * 然后重复这个过程直到这个数变为*1*，也可能是**无限循环**但始终变不到*1*。
> * 如果这个过程 结果为*1*，那么这个数就是**快乐数**。

## 示例
```
输入：19
输出：true

解释：
1^2 + 9^2 = 82
8^2 + 2^2 = 68
6^2 + 8^2 = 100
1^2 + 0^2 + 0^2 = 1

```

## 思路

会出现**无限循环**, 也意味着求和*sum*会重复出现; 而哈希能够快速判断一个元素是否出现在集合中. 所以使用哈希来判断sum是非重复出现, 如果是,返回`false`, 否则为`true`.

```typescript 
export function isHappy(n: number){
  let sum = calculateSum(n)
  let sumSet: Set<number> = new Set();

  while(sum !== 1 && !sumSet.has(sum)){
    sumSet.add(sum)
    sum = calculateSum(sum)
  }

  return sum === 1;
}

export function calculateSum(n) {
  let sum = 0 

  while(n > 0) {
    sum += Math.pow(n % 10, 2)
    n = Math.floor(n / 10)
  }

  return sum
}

```

