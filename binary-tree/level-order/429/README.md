# N叉树的层序遍历 

给定一个 N 叉树，返回其节点值的层序遍历。 (即从左到右，逐层遍历)。

![n-treenode](../../../static/img/binary-tree/n-tree.png)



```
上面这个3叉树返回的层序遍历为
[[1], [3,2,4], [5, 6]]
```
### N叉树的定义 

```typescript
export class Node {
  val: number;
  children: Node[]

  constructor(val?: number) {
    this.val = val === undefined ? 0 : val
    this.children = []
  }

  static create(list: Array<number | null>) {
    const queue: Node[] = []
    const root = new Node(list[0])
    let curr: Node 

    queue.push(root)

    for(let i = 1 ; i < list.length ; i++) {
      if(list[i]) {
        let node = new Node(list[i])
        queue.push(node)
        curr.children.push(node)
      } else {
        curr = queue.shift()
      }
    }
    return root
  }
}

```


### 思路

依次把当前节点下的子节点推入队列即可

```typescript 
export function levelOrder(root: Node | null):number[][] {
  const result: number[][] = []
  const queue: Node[] = []

  let curr: Node = root
  let level: number[] = []
  let levelLenth: number 

  queue.push(curr)

  while(queue.length > 0) {
    levelLenth = queue.length;
    level = []

    for(let i = 0 ; i < levelLenth ; i++) {
      curr = queue.shift()!
      level.push(curr.val)

      while(curr.children.length > 0) {
        queue.push(curr.children.shift()!)
      }
    }
    result.push(level)
  }

  return result
}
```

