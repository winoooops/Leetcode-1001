# 层序遍历II 

给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）

把正序层序遍翻转过来即可.

```typescript
export function levelOrderBottom(root: TreeNode) {
  const result: number[][] = []
  const queue: TreeNode[] = []
  let level: number[] = []
  let curr: TreeNode = root
  let length: number

  queue.push(curr)

  while(queue.length > 0) {
    level = []
    length = queue.length

    for(let i = 0; i < length ; i++) {
      curr = queue.shift()!
      curr?.val && level.push(curr.val)
      curr?.left && queue.push(curr.left)
      curr?.right && queue.push(curr.right)
    }

    result.push(level)
  }

  return result.reverse()
}
```
