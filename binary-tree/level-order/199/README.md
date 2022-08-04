# 二叉树的右视图

给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

![rightside-view](../../../static/img/binary-tree/rightside-view.png)

判断下是否是右侧节点, 即最后一个节点即可

```typescript
export function rightSideView(root: TreeNode): number[] {
  const result: number[] = []
  const queue: TreeNode[] = []
  let curr: TreeNode = root
  let length: number

  queue.push(curr)

  while(queue.length > 0) {
    length = queue.length
    
    for(let i = 0; i < length ; i++) {
      curr = queue.shift()!

      if(i === length - 1) {
        result.push(curr.val)
      }

      curr?.left && queue.push(curr.left)
      curr?.right && queue.push(curr.right)
    }
  }

  return result
}
```
