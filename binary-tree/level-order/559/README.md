# N叉树的最大深度

给定一个 n 叉树，找到其最大深度。

最大深度是指从根节点到最远叶子节点的最长路径上的节点总数。

> N叉树定义参考[N叉树的层序遍历](../429/README.md)

![n-tree](../../../static/img/binary-tree/n-tree.png)

```
输入: root = [1,null,3,2,4,null,5,6]
输出: 3
```

```typescript 
import { Node } from "../429/node.type"

export function maxDepth(root: Node | null): number {
  let depth:number = 0
  let curr: Node | null = root;
  let lvlen: number 
  const queue: Node[] = []

  if(!curr) return depth
  
  queue.push(curr)

  while(queue.length > 0) {
    lvlen = queue.length; 
    depth++
    
    for(let i = 0; i < lvlen; i++) {
      curr = queue.shift()!
      while(curr.children.length > 0) {
        queue.push(curr.children.shift())
      }
    }
  }

  return depth
}
```
