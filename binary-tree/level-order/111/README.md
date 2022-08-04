# 二叉树的最小深度

同二叉树的最大深度类似, 也是通过depth变量来记录层级, 如果出现左子节点和右子节点同时为空的情况, 返回深度. 

```typescript
export function minDepth(root: TreeNode | null): number {
  let depth: number = 0 
  const queue: TreeNode[] = []

  let curr: TreeNode = root
  let levelLength: number 
  queue.push(curr)

  while(queue.length > 0) {
    levelLength = queue.length
    depth++
    for(let i = 0; i < levelLength ; i++) {
      curr = queue.shift()!
      if(!curr?.left && !curr?.right) return depth
      curr?.left && queue.push(curr.left)
      curr?.right && queue.push(curr.right)
    }
  }

  return depth
}
```
