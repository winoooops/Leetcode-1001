## 二叉树的层序遍历

给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点).

![level-order](../../static/img/binary-tree/level-order-sample.png)

层序遍历一个二叉树。就是从左到右一层一层的去遍历二叉树。这种遍历的方式和我们之前讲过的都不太一样。

需要借用一个辅助数据结构即队列来实现，队列先进先出，符合一层一层遍历的逻辑，而是用栈先进后出适合模拟深度优先遍历也就是递归的逻辑。

而这种层序遍历方式就是图论中的广度优先遍历，只不过我们应用在二叉树上。

![animation](../../static/img/binary-tree/level-order-animation.gif)


## 简单的层序遍历

* 利用队列先进先出的机制按顺序推入元素
* 循环的长度为进入循环的初始长度
* 因为转换为队列, 所以遍历的时间和空间复杂度为`O(n)`, 其中`n`为队列的长度

```typescript
export function levelOrder(root: TreeNode | null): number[][] {
  const result: number[][] = []
  const helperQueue: TreeNode[] = []

  let curr: TreeNode = root

  helperQueue.push(curr)

  while(helperQueue.length > 0) {
    let level: number[] = []
    let length = helperQueue.length 

    for(let i = 0 ; i < length; i++){
      curr = helperQueue.shift()!
      level.push(curr.val);

      curr?.left && helperQueue.push(curr.left)
      curr?.right && helperQueue.push(curr.right)
    }
    result.push(level);
  }
  return result
}
```
