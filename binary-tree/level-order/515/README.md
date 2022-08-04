# 二叉树的最大值

在二叉树中的每一行中找到最大的值

```
输入: [1, 3, 2, null, 5, 3, null, 9 ]
输出: [1, 3, 9]

```

```typescript
export function largestFromBinary(root: TreeNode): number[] {
  const result: number[] = []
  const queue: TreeNode[] = []

  let curr: TreeNode = root
  let len: number
  let max: number = 0 

  queue.push(curr)

  while(queue.length > 0) {
    len = queue.length
    max = 0

    for(let i = 0 ; i < len ; i++) {
      curr = queue.shift()! 
      curr.val > max ? (max = curr.val) : max
      
      curr?.left && queue.push(curr.left)
      curr?.right && queue.push(curr.right)
    }
    result.push(max)
  }



  return result
}
```


