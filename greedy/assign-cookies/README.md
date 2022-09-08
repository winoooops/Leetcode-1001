# 455.分发饼干 

对每个孩子 i，都有一个胃口值 g[i]，这是能让孩子们满足胃口的饼干的最小尺寸；并且每块饼干 j，都有一个尺寸 s[j] 。如果 s[j] >= g[i]，我们可以将这个饼干 j 分配给孩子 i ，这个孩子会得到满足。你的目标是尽可能满足越多数量的孩子，并输出这个最大数值。

 
## 示例
```
输入: g = [1,2,3], s = [1,1]
输出: 1
解释: 
你有三个孩子和两块小饼干，3个孩子的胃口值分别是：1,2,3。
虽然你有两块小饼干，由于他们的尺寸都是1，你只能让胃口值是1的孩子满足。
所以你应该输出1。
```

```
输入: g = [1,2], s = [1,2,3]
输出: 2
解释: 
你有两个孩子和三块小饼干，2个孩子的胃口值分别是1,2。
你拥有的饼干数量和尺寸都足以让所有孩子满足。
所以你应该输出2.
```

## 思路 

为了满足更多的小孩, 就要有效利用饼干--大饼干优先给胃口大的小孩. 所以首先需要给两个数组排序.

```
biscuits: [1, 3, 5, 9]
            /   /  /
children: [1, 2, 7, 10]
```

```typescript
export function findContentChildren(g: number[], s: number[]): number {
  let result: number = 0 

  // 首先需要排序 
  g.sort((a,b) => a - b)
  s.sort((a, b) => a - b)

  let biscuit: number 
  let index: number = g.length - 1

  while(s.length > 0) {
    biscuit = s.pop()!

    // 如果不满足小孩的需求, 换小孩
    while(biscuit < g[index]) {
      index--
    }

    // 退出while循环有可能全部满足, 再次判断
    if(index >=0 ){
      result++
      index--
    }
  }
  
  return result
}
```

如果不想更改源数组的话, while循环可以改成
```typescript 
export function findContentChildren(g: number[], s: number[]): number {
  let result: number = 0 

  g.sort((a,b) => a - b)
  s.sort((a, b) => a - b)

  let biscuitPointer: number = s.length - 1 
  let childPointer: number = g.length - 1

  while(biscuitPointer >= 0 && childPointer >=0) {
    if(s[biscuitPointer] >= g[childPointer]) {
      result++
      biscuitPointer--
    }
    childPointer--
  }
  
  return result
}
```