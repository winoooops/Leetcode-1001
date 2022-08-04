# 二叉树的层平均值

给定一个非空二叉树的根节点 root , 以数组的形式返回每一层节点的平均值。与实际答案相差 10-5 以内的答案可以被接受。

```
输入：root = [3,9,20,null,null,15,7]
输出：[3.00000,14.50000,11.00000]
解释：第 0 层的平均值为 3,第 1 层的平均值为 14.5,第 2 层的平均值为 11 。
因此返回 [3, 14.5, 11] 。

```

```typescript 
export function averageOfLevels(root: TreeNode) {
  const result: number[] = []
  const queue: TreeNode[] = []

  let curr: TreeNode = root
  let length: number 
  let sum: number

  queue.push(curr)

  while(queue.length > 0) {
    length = queue.length
    sum = 0 
    for(let i = 0 ; i < length; i++) {
      curr = queue.shift()!
      sum += curr.val
      curr?.left && queue.push(curr.left)
      curr?.right && queue.push(curr.right)
    }

    result.push(sum / length)
  }

  return result
}
```

