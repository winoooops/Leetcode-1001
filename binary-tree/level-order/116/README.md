# 填充每个节点的下一个右侧节点指针 

给定一个 完美二叉树 ，其所有叶子节点都在同一层，每个父节点都有两个子节点。二叉树定义如下：

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。

初始状态下，所有 next 指针都被设置为 NULL。

## 示例
```
输入：root = [1,2,3,4,5,6,7]
输出：[1,#,2,3,#,4,5,6,7,#]
解释：给定二叉树如图 A 所示，你的函数应该填充它的每个 next 指针，以指向其下一个右侧节点，如图 B 所示。序列化的输出按层序遍历排列，同一层节点由 next 指针连接，'#' 标志着每一层的结束。

```

![116_sample](../../../static/img/binary-tree/116_sample.png)

### 思路

增加一个`prev`变量来记录上一个节点
* 如果是每一层的第一个节点, `prev`节点计作它本身, 供下一位使用
* 如果是每一层最后一个节点, `prev` 指向`null`

```typescript
export function connect(root: Node): Node {
  const queue: Node[] = []
  let curr: Node = root
  let prev: Node 
  let len: number 

  queue.push(curr)

  while(queue.length > 0) {
    len = queue.length
    prev = null
    for(let i = 0 ; i < len ; i++) {
      if(i === 0) {
        curr = queue.shift()!
        prev = curr
      } else {
        curr = queue.shift()!
        prev.next = curr 
        prev = curr
      }

      curr?.left && queue.push(curr.left)
      curr?.right && queue.push(curr.right)
    }

    prev.next = null
  }

  return root
}
```


